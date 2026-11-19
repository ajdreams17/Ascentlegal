import { createSign } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createConnection } from 'node:net';

const folderMime = 'application/vnd.google-apps.folder';
const driveApi = 'https://www.googleapis.com/drive/v3';
const driveScope = 'https://www.googleapis.com/auth/drive';
const encode = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');

export function makeProviders(config) {
  let requestToken;
  if (config.googleComputeAccount) {
    const account = encodeURIComponent(config.googleComputeAccount);
    const endpoint = new URL('http://169.254.169.254/computeMetadata/v1/instance/service-accounts/' + account + '/token');
    endpoint.searchParams.set('scopes', driveScope);
    endpoint.searchParams.set('enforce_scopes', 'true');
    requestToken = () => fetch(endpoint, {
      headers: { 'Metadata-Flavor': 'Google' },
      redirect: 'error',
      signal: AbortSignal.timeout(5000),
    });
  } else {
    requestToken = keyTokenRequest(config.googleCredentials);
  }

  let accessToken;
  let tokenExpires = 0;
  async function googleToken() {
    if (Date.now() < tokenExpires) return accessToken;
    const result = await requestToken();
    if (!result.ok) throw new Error('Google token exchange failed.');
    const token = await result.json();
    if (typeof token.access_token !== 'string' || !token.access_token ||
        !Number.isFinite(token.expires_in) || token.expires_in <= 0) {
      throw new Error('Google returned an invalid access token.');
    }
    accessToken = token.access_token;
    tokenExpires = Date.now() + (token.expires_in - 60) * 1000;
    return accessToken;
  }

  async function google(url, options = {}) {
    const token = await googleToken();
    return fetch(url, {
      ...options,
      headers: { ...options.headers, Authorization: 'Bearer ' + token },
      redirect: 'manual',
      signal: AbortSignal.timeout(35000),
    });
  }

  async function validateFolder(folder) {
    // Verify the specific destination and its ancestry inside the configured intake boundary.
    let current = folder;
    for (let depth = 0; depth < 30; depth += 1) {
      if (current === config.driveId) return false;
      const result = await google(driveApi + '/files/' + current +
        '?supportsAllDrives=true&fields=id,driveId,mimeType,trashed,parents,capabilities(canAddChildren)');
      if (result.status === 403 || result.status === 404) return false;
      if (!result.ok) throw new Error('Drive folder verification failed.');
      const info = await result.json();
      if (info.trashed || info.driveId !== config.driveId || info.mimeType !== folderMime) return false;
      if (depth === 0 && !info.capabilities?.canAddChildren) return false;
      if (current === config.driveRoot) return depth > 0;
      current = info.parents?.[0];
      if (!current) return false;
    }
    return false;
  }

  async function reserveFile() {
    const result = await google(driveApi + '/files/generateIds?count=1&space=drive');
    if (!result.ok) throw new Error('Drive ID allocation failed.');
    const { ids } = await result.json();
    if (!ids?.[0]) throw new Error('Drive ID was missing.');
    return ids[0];
  }

  async function saveFile({ id, folder, name, type, content, receipt }) {
    const metadata = JSON.stringify({
      id, name, parents: [folder], appProperties: { portalReceipt: receipt },
    });
    const query = '?supportsAllDrives=true&fields=id,driveId,parents,appProperties,trashed';
    let result = await google('https://www.googleapis.com/upload/drive/v3/files' + query + '&uploadType=resumable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'X-Upload-Content-Type': type,
        'X-Upload-Content-Length': String(content.length),
      },
      body: metadata,
    });
    if (result.ok) {
      const session = new URL(result.headers.get('location') ?? '');
      if (session.origin !== 'https://www.googleapis.com' || !session.pathname.startsWith('/upload/drive/')) {
        throw new Error('Unexpected Google upload URL.');
      }
      result = await google(session, {
        method: 'PUT',
        headers: { 'Content-Type': type, 'Content-Length': String(content.length) },
        body: content,
      });
    }
    if (result.status === 409) result = await google(driveApi + '/files/' + id + query);
    if (!result.ok) throw new Error('Drive rejected the upload.');
    const file = await result.json();
    if (file.id !== id || file.trashed || file.driveId !== config.driveId ||
        !file.parents?.includes(folder) || file.appProperties?.portalReceipt !== receipt) {
      throw new Error('Drive returned an unexpected destination or receipt.');
    }
  }

  async function mail({ to, subject, text, key }) {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + config.emailKey,
        'Content-Type': 'application/json',
        'Idempotency-Key': key,
      },
      body: JSON.stringify({ from: config.emailFrom, to: [to], subject, text }),
      signal: AbortSignal.timeout(10000),
    });
    if (!result.ok) throw new Error('Email delivery service rejected the message.');
  }

  return { validateFolder, reserveFile, saveFile, mail, scan: (content) => scanFile(config, content) };
}

function keyTokenRequest(credentialFile) {
  const identity = JSON.parse(readFileSync(credentialFile, 'utf8'));
  if (identity.type !== 'service_account' || !identity.client_email || !identity.private_key) {
    throw new Error('Provide a Google service-account credential file.');
  }
  return () => {
    const now = Math.floor(Date.now() / 1000);
    const audience = 'https://oauth2.googleapis.com/token';
    const claims = encode({ iss: identity.client_email, scope: driveScope, aud: audience, iat: now, exp: now + 3600 });
    const jwt = encode({ alg: 'RS256', typ: 'JWT' }) + '.' + claims;
    const signature = createSign('RSA-SHA256').update(jwt).sign(identity.private_key, 'base64url');
    return fetch(audience, {
      method: 'POST',
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: jwt + '.' + signature,
      }),
      redirect: 'error',
      signal: AbortSignal.timeout(10000),
    });
  };
}

// ClamAV INSTREAM. The scanner is reachable over a private network only.
function scanFile(config, content) {
  return new Promise((resolve, reject) => {
    const socket = createConnection({ host: config.scanHost, port: config.scanPort });
    const timer = setTimeout(() => socket.destroy(new Error('Scanner timed out.')), 20000);
    socket.once('close', () => {
      clearTimeout(timer);
      reject(new Error('Scanner disconnected.'));
    });
    socket.once('error', reject);
    socket.on('connect', async () => {
      try {
        await write(socket, Buffer.from('zINSTREAM\0'));
        for (let offset = 0; offset < content.length; offset += 65536) {
          const chunk = content.subarray(offset, offset + 65536);
          const length = Buffer.alloc(4);
          length.writeUInt32BE(chunk.length);
          await write(socket, length);
          await write(socket, chunk);
        }
        await write(socket, Buffer.alloc(4));
      } catch (error) {
        socket.destroy(error);
      }
    });
    let response = '';
    socket.on('data', (data) => {
      response += data.toString('utf8');
      if (response.length > 2048) return socket.destroy(new Error('Invalid scanner response.'));
      if (!response.includes('\0')) return;
      const line = response.split('\0')[0];
      if (line === 'stream: OK') resolve(true);
      else if (/^stream: .+ FOUND$/.test(line)) resolve(false);
      else reject(new Error('Scanner could not verify the upload.'));
      socket.destroy();
    });
  });
}

function write(socket, value) {
  return new Promise((resolve, reject) => socket.write(value, (error) => error ? reject(error) : resolve()));
}
