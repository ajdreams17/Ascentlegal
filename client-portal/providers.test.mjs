import test from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPairSync } from 'node:crypto';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createServer } from 'node:net';
import { makeProviders } from './providers.mjs';

test('Drive verifies the intake boundary and validates resumable upload receipts', async (t) => {
  const temp = mkdtempSync(join(tmpdir(), 'ascent-portal-test-'));
  t.after(() => rmSync(temp, { recursive: true, force: true }));
  mkdirSync(join(temp, 'credentials'));
  const googleCredentials = join(temp, 'credentials', 'synthetic.json');
  const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
  writeFileSync(googleCredentials, JSON.stringify({
    type: 'service_account',
    client_email: 'synthetic@example.test',
    private_key: privateKey.export({ type: 'pkcs8', format: 'pem' }),
  }));

  const driveId = 'sharedDrive1234';
  const driveRoot = 'intakeRoot1234';
  const destination = 'matterFolder1234';
  const fileId = 'reservedFile1234';
  const receipt = 'receipt1234';
  const mimeType = 'application/vnd.google-apps.folder';
  let stored;
  let puts = 0;
  let metadataMatches = true;
  const content = Buffer.from('%PDF-sample');
  t.mock.method(globalThis, 'fetch', async (input, options) => {
    const url = new URL(input);
    if (url.hostname === 'oauth2.googleapis.com') {
      const [header, metadata, signature] = options.body.get('assertion').split('.');
      assert.equal(JSON.parse(Buffer.from(header, 'base64url')).alg, 'RS256');
      assert.equal(JSON.parse(Buffer.from(metadata, 'base64url')).iss, 'synthetic@example.test');
      assert.ok(signature.length > 100);
      return Response.json({ access_token: 'synthetic-token', expires_in: 3600 });
    }
    assert.equal(url.hostname, 'www.googleapis.com');
    assert.equal(options.headers.Authorization, 'Bearer synthetic-token');
    if (url.pathname.endsWith('/generateIds')) return Response.json({ ids: [fileId] });
    if (url.searchParams.has('upload_id')) {
      assert.equal(options.method, 'PUT');
      assert.deepEqual(options.body, content);
      puts += 1;
      return Response.json(stored);
    }
    assert.equal(url.searchParams.get('supportsAllDrives'), 'true');
    if (options.method === 'POST') {
      assert.equal(url.searchParams.get('uploadType'), 'resumable');
      if (stored) return new Response(null, { status: 409 });
      const data = JSON.parse(options.body);
      assert.deepEqual(data.parents, [destination]);
      stored = { ...data, driveId, trashed: false };
      return new Response(null, { headers: { location: 'https://www.googleapis.com/upload/drive/v3/files?upload_id=synthetic' } });
    }
    const id = url.pathname.split('/').pop();
    if (id === fileId) return Response.json(metadataMatches ? stored : { ...stored, driveId: 'wrong-drive' });
    return Response.json({
      id, mimeType, driveId: id === 'foreignFolder' ? 'other' : driveId, trashed: false,
      parents: [id === destination ? driveRoot : driveId],
      capabilities: { canAddChildren: true },
    });
  });
  const providers = makeProviders({ googleCredentials, driveId, driveRoot });
  assert.equal(await providers.validateFolder(destination), true);
  assert.equal(await providers.validateFolder(driveRoot), false);
  assert.equal(await providers.validateFolder('foreignFolder'), false);
  assert.equal(await providers.reserveFile(), fileId);
  const upload = { id: fileId, folder: destination, name: 'test.pdf', type: 'application/pdf', content, receipt };
  await providers.saveFile(upload);
  await providers.saveFile(upload);
  assert.equal(puts, 1);
  metadataMatches = false;
  await assert.rejects(providers.saveFile(upload), /unexpected destination/);
});

test('Compute Engine authentication requests a short-lived token for the configured account and Drive scope', async (t) => {
  const account = 'test-portal@example-project.iam.gserviceaccount.com';
  let tokenCalls = 0;
  let attachedAccount = account;
  t.mock.method(globalThis, 'fetch', async (input, options) => {
    const url = new URL(input);
    if (url.hostname === '169.254.169.254') {
      assert.equal(options.headers['Metadata-Flavor'], 'Google');
      assert.equal(options.redirect, 'error');
      if (url.pathname === '/computeMetadata/v1/instance/service-accounts/default/email') {
        return new Response(attachedAccount);
      }
      assert.equal(url.pathname, '/computeMetadata/v1/instance/service-accounts/default/token');
      assert.equal(url.searchParams.get('scopes'), 'https://www.googleapis.com/auth/drive');
      assert.equal(url.searchParams.get('enforce_scopes'), 'true');
      tokenCalls += 1;
      return Response.json({ access_token: 'short-lived-token', expires_in: 3600 });
    }
    assert.equal(url.hostname, 'www.googleapis.com');
    assert.equal(options.headers.Authorization, 'Bearer short-lived-token');
    return Response.json({ ids: ['synthetic-file-id'] });
  });
  const providers = makeProviders({ googleComputeAccount: account });
  assert.equal(await providers.reserveFile(), 'synthetic-file-id');
  assert.equal(await providers.reserveFile(), 'synthetic-file-id');
  assert.equal(tokenCalls, 1);
  attachedAccount = 'wrong@example-project.iam.gserviceaccount.com';
  await assert.rejects(makeProviders({ googleComputeAccount: account }).reserveFile(),
    /not using the configured Google service account/);
  assert.equal(tokenCalls, 1);
});

test('ClamAV wire integration accepts clean files and rejects a detection', async (t) => {
  const temp = mkdtempSync(join(tmpdir(), 'ascent-scan-test-'));
  t.after(() => rmSync(temp, { recursive: true, force: true }));
  const credential = join(temp, 'dummy.json');
  writeFileSync(credential, JSON.stringify({
    type: 'service_account', client_email: 'synthetic@example.test', private_key: 'unused',
  }));
  const scanner = createServer((socket) => {
    let data = Buffer.alloc(0);
    socket.on('data', (chunk) => {
      data = Buffer.concat([data, chunk]);
      if (data.length < 14) return;
      const size = data.readUInt32BE(10);
      if (data.length < 14 + size + 4) return;
      assert.equal(data.toString('utf8', 0, 10), 'zINSTREAM\0');
      assert.equal(data.readUInt32BE(14 + size), 0);
      socket.end(data.includes('blocked') ? 'stream: Synthetic FOUND\0' : 'stream: OK\0');
    });
  });
  await new Promise((resolve) => scanner.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise((resolve) => scanner.close(resolve)));
  const providers = makeProviders({
    googleCredentials: credential, scanHost: '127.0.0.1', scanPort: scanner.address().port,
  });
  assert.equal(await providers.scan(Buffer.from('clean')), true);
  assert.equal(await providers.scan(Buffer.from('blocked')), false);
});
