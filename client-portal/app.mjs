import { createServer } from 'node:http';
import { isIP } from 'node:net';
import { readFileSync } from 'node:fs';
import { createHash, createHmac, randomBytes, randomInt, randomUUID } from 'node:crypto';

const minute = 60_000;
const hour = 60 * minute;
const maxUpload = 20 * 1024 * 1024;
const uuid = /^[0-9a-f-]{36}$/i;
const folderId = /^[A-Za-z0-9_-]{10,120}$/;
const tokenPattern = /^[A-Za-z0-9_-]{43}$/;
const newToken = () => randomBytes(32).toString('base64url');
const hash = (value) => createHash('sha256').update(value).digest('hex');
export const normalizeEmail = (value) => String(value ?? '').trim().toLowerCase();
export const validEmail = (value) => /^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(value) && value.length <= 254;
const fileTypes = {
  pdf: ['application/pdf', '255044462d'],
  png: ['image/png', '89504e470d0a1a0a'],
  jpg: ['image/jpeg', 'ffd8ff'],
  jpeg: ['image/jpeg', 'ffd8ff'],
  docx: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', '504b0304'],
  xlsx: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', '504b0304'],
};
const assets = {
  '/': ['index.html', 'text/html; charset=utf-8'],
  '/portal.css': ['portal.css', 'text/css; charset=utf-8'],
  '/portal.js': ['portal.js', 'text/javascript; charset=utf-8'],
  '/brand.png': ['../../public/ascent-legal-logo.png', 'image/png'],
};

class RequestError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function requireThat(condition, status, message) {
  if (!condition) throw new RequestError(status, message);
}

async function readBody(req, limit) {
  // The browser sends a fixed-size body. Proxies should enforce the same cap.
  const length = Number(req.headers['content-length']);
  requireThat(Number.isSafeInteger(length) && length > 0, 411, 'A request body is required.');
  requireThat(length <= limit, 413, 'This file exceeds the 20 MB upload limit.');
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    requireThat(size <= length, 413, 'The request is too large.');
    chunks.push(chunk);
  }
  requireThat(size === length, 400, 'The request was incomplete.');
  return Buffer.concat(chunks, size);
}

async function readJson(req) {
  requireThat(req.headers['content-type']?.split(';')[0] === 'application/json', 415, 'Expected JSON.');
  try {
    const data = JSON.parse((await readBody(req, 8192)).toString());
    requireThat(data && typeof data === 'object' && !Array.isArray(data), 400, 'Invalid request.');
    return data;
  } catch (error) {
    if (error instanceof RequestError) throw error;
    throw new RequestError(400, 'Invalid request.');
  }
}

export function createPortal({ db, config, providers }) {
  const secure = new URL(config.origin).protocol === 'https:';
  const sessionCookie = secure ? '__Host-ascent-session' : 'ascent-session';
  const challengeCookie = secure ? '__Host-ascent-challenge' : 'ascent-challenge';
  const statements = new Map();
  const stmt = (sql) => {
    if (!statements.has(sql)) statements.set(sql, db.prepare(sql));
    return statements.get(sql);
  };
  const get = (sql, ...args) => stmt(sql).get(...args);
  const all = (sql, ...args) => stmt(sql).all(...args);
  const run = (sql, ...args) => stmt(sql).run(...args);
  const mac = (value) => createHmac('sha256', config.secret).update(value).digest('hex');
  const roles = (email) => config.staff.has(email);
  const matters = (email) => all(`
    SELECT matters.id, matters.label FROM grants JOIN matters ON matters.id = grants.matter
    WHERE grants.email = ? AND grants.active = 1 ORDER BY matters.label
  `, email);
  const canSignIn = (email) => roles(email) || Boolean(get(
    'SELECT 1 FROM grants WHERE email = ? AND active = 1 LIMIT 1', email));
  const readCookie = (req, name) => {
    const item = req.headers.cookie?.split(/; */).find((entry) => entry.startsWith(name + '='));
    const token = item?.slice(name.length + 1);
    return tokenPattern.test(token ?? '') ? hash(token) : '';
  };
  const cookie = (name, value, seconds) =>
    name + '=' + value + '; Path=/; HttpOnly; SameSite=Strict; Max-Age=' + seconds + (secure ? '; Secure' : '');
  const setCookie = (res, ...values) => res.setHeader('Set-Cookie', values);
  let activeUploads = 0;
  let noticeRunning = false;
  let loginMailInFlight = 0;

  function limited(key, max, window) {
    const now = Date.now();
    const result = get(`
      INSERT INTO limits (key, until, count) VALUES (?, ?, 1) ON CONFLICT(key) DO UPDATE SET
        count = CASE WHEN limits.until <= ? THEN 1 ELSE limits.count + 1 END,
        until = CASE WHEN limits.until <= ? THEN excluded.until ELSE limits.until END
      WHERE limits.until <= ? OR limits.count < ? RETURNING count
    `, mac(key), now + window, now, now, now, max);
    requireThat(result, 429, 'Too many requests. Try again in a few minutes.');
  }

  function ip(req) {
    const peer = req.socket.remoteAddress;
    if (!config.trustedProxy || peer !== config.trustedProxy) return peer ?? 'unknown';
    const real = req.headers['x-real-ip'];
    return typeof real === 'string' && isIP(real) ? real : peer;
  }

  function json(res, status, data) {
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(data));
  }

  async function notices() {
    if (noticeRunning) return;
    noticeRunning = true;
    try {
      const now = Date.now();
      const due = all(`
        SELECT id FROM receipts WHERE saved > ? AND notified IS NULL AND notice_retry <= ?
        AND notice_attempts < 8 LIMIT 20
      `, now - 22 * hour, now);
      for (const { id } of due) {
        try {
          await providers.mail({
            to: config.notificationEmail,
            subject: 'Ascent Legal portal upload received',
            text: 'A client uploaded a document. Review the receipt in the staff portal at ' + config.origin + '/.',
            key: 'upload-' + id,
          });
          run('UPDATE receipts SET notified = ? WHERE id = ?', Date.now(), id);
        } catch {
          run('UPDATE receipts SET notice_attempts = notice_attempts + 1, notice_retry = ? WHERE id = ?',
            Date.now() + 5 * minute, id);
          console.warn('A portal upload notification needs retry.');
        }
      }
    } finally {
      noticeRunning = false;
    }
  }

  const maintenance = setInterval(() => {
    const now = Date.now();
    run('DELETE FROM limits WHERE until <= ?', now);
    run('DELETE FROM sessions WHERE until <= ?', now);
    run('DELETE FROM challenges WHERE until <= ?', now);
    void notices();
  }, minute);
  maintenance.unref();

  const server = createServer({ requestTimeout: 90_000, headersTimeout: 15_000 }, async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
    res.setHeader('Referrer-Policy', 'no-referrer');
    res.setHeader('Content-Security-Policy', "default-src 'none'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'");
    if (secure) res.setHeader('Strict-Transport-Security', 'max-age=31536000');

    try {
      const url = new URL(req.url, config.origin);
      const path = url.pathname;
      if (req.method === 'GET' && Object.hasOwn(assets, path)) {
        const [file, contentType] = assets[path];
        const data = readFileSync(new URL('./public/' + file, import.meta.url));
        res.writeHead(200, { 'Content-Type': contentType });
        return res.end(data);
      }
      requireThat(path.startsWith('/api/'), 404, 'Page not found.');
      requireThat(req.method === 'GET' || req.method === 'POST', 405, 'Method not allowed.');
      if (req.method === 'POST') {
        requireThat(req.headers.origin === config.origin, 403, 'Request origin is invalid.');
      }
      const post = req.method === 'POST';
      const session = get('SELECT email FROM sessions WHERE id = ? AND until > ?',
        readCookie(req, sessionCookie), Date.now());
      const email = session?.email;
      const staff = roles(email);

      if (path === '/api/code' && post) {
        const input = normalizeEmail((await readJson(req)).email);
        requireThat(validEmail(input), 400, 'Enter a valid email address.');
        limited('send-ip:' + ip(req), 30, 15 * minute);
        limited('send-email:' + input, 4, 15 * minute);
        requireThat(loginMailInFlight < 10, 503, 'Sign-in is busy. Try again shortly.');
        const challenge = newToken();
        const id = hash(challenge);
        const code = String(randomInt(0, 100_000_000)).padStart(8, '0');
        setCookie(res, cookie(challengeCookie, challenge, 600));
        if (canSignIn(input)) {
          const old = readCookie(req, challengeCookie);
          if (old) run('DELETE FROM challenges WHERE id = ?', old);
          run('INSERT INTO challenges(id, email, code, until) VALUES (?, ?, ?, ?)',
            id, input, mac(id + ':' + code), Date.now() + 10 * minute);
          loginMailInFlight += 1;
          void providers.mail({
            to: input, subject: 'Your Ascent Legal sign-in code',
            text: 'Your sign-in code is ' + code + '. It expires in 10 minutes. If you did not request it, you can ignore this email.',
            key: 'code-' + id,
          }).catch(() => {
            run('DELETE FROM challenges WHERE id = ?', id);
            console.warn('The portal could not deliver a sign-in code.');
          }).finally(() => { loginMailInFlight -= 1; });
        }
        return json(res, 202, { ok: true });
      }

      if (path === '/api/verify' && post) {
        const { code } = await readJson(req);
        requireThat(typeof code === 'string' && /^[0-9]{8}$/.test(code), 400, 'Enter the eight-digit code.');
        limited('verify-ip:' + ip(req), 80, 15 * minute);
        const id = readCookie(req, challengeCookie);
        const now = Date.now();
        const match = get(`
          DELETE FROM challenges WHERE id = ? AND until > ? AND attempts < 5 AND code = ? RETURNING email
        `, id, now, mac(id + ':' + code));
        if (!match) run('UPDATE challenges SET attempts = attempts + 1 WHERE id = ? AND attempts < 5', id);
        requireThat(match && canSignIn(match.email), 401, 'The code is invalid or expired. Try again or request a new code.');
        const token = newToken();
        run('DELETE FROM sessions WHERE id = ?', readCookie(req, sessionCookie));
        run('INSERT INTO sessions(id, email, until) VALUES (?, ?, ?)', hash(token), match.email, now + 2 * hour);
        setCookie(res, cookie(sessionCookie, token, 7200), cookie(challengeCookie, '', 0));
        return json(res, 200, { ok: true });
      }

      if (path === '/api/session' && !post) {
        return json(res, 200, { email: email ?? null, staff, matters: email ? matters(email) : [] });
      }
      if (path === '/api/logout' && post) {
        run('DELETE FROM sessions WHERE id = ?', readCookie(req, sessionCookie));
        setCookie(res, cookie(sessionCookie, '', 0), cookie(challengeCookie, '', 0));
        return json(res, 200, { ok: true });
      }

      requireThat(email && canSignIn(email), 401, 'Sign in to continue.');
      if (path === '/api/staff' && !post) {
        requireThat(staff, 403, 'Staff access is required.');
        const grants = all(`
          SELECT grants.id, grants.email, grants.active, matters.label FROM grants
          JOIN matters ON grants.matter = matters.id WHERE grants.active = 1 ORDER BY matters.label, grants.email
        `);
        const receipts = all(`
          SELECT receipts.id, receipts.name, receipts.saved, receipts.notified, grants.email, matters.label
          FROM receipts JOIN grants ON receipts.grant_id = grants.id JOIN matters ON grants.matter = matters.id
          WHERE receipts.saved IS NOT NULL ORDER BY receipts.saved DESC LIMIT 30
        `);
        return json(res, 200, { grants, receipts, matters: all('SELECT id, label FROM matters ORDER BY label') });
      }

      if (path === '/api/staff/matters' && post) {
        requireThat(staff, 403, 'Staff access is required.');
        limited('staff:' + email, 40, hour);
        const data = await readJson(req);
        const label = String(data.label ?? '').trim();
        const folder = String(data.folder ?? '').trim();
        requireThat(label.length > 0 && label.length <= 120 && folderId.test(folder), 400, 'Enter a matter label and a valid Drive folder ID.');
        requireThat(await providers.validateFolder(folder), 422, 'Use a writable folder inside the configured intake folder in Google Workspace.');
        const result = run('INSERT INTO matters(id, label, folder) VALUES (?, ?, ?) ON CONFLICT(folder) DO NOTHING',
          randomUUID(), label, folder);
        requireThat(result.changes === 1, 409, 'This Drive folder is already assigned to a matter.');
        return json(res, 201, { ok: true });
      }

      if (path === '/api/staff/invite' && post) {
        requireThat(staff, 403, 'Staff access is required.');
        limited('staff:' + email, 40, hour);
        const data = await readJson(req);
        const recipient = normalizeEmail(data.email);
        requireThat(validEmail(recipient) && typeof data.matter === 'string', 400, 'Enter the client email and select a matter.');
        requireThat(get('SELECT 1 FROM matters WHERE id = ?', data.matter), 404, 'Matter not found.');
        run(`
          INSERT INTO grants(id, email, matter) VALUES (?, ?, ?)
          ON CONFLICT(email, matter) DO UPDATE SET active = 1
        `, randomUUID(), recipient, data.matter);
        try {
          await providers.mail({
            to: recipient, subject: 'Ascent Legal client portal invitation',
            text: 'Ascent Legal has invited you to upload documents. Open ' + config.origin + '/ and sign in with this email address.',
            key: 'invite-' + mac(recipient + ':' + data.matter + ':' + Math.floor(Date.now() / minute)),
          });
        } catch {
          return json(res, 202, { ok: true, pending: true });
        }
        return json(res, 201, { ok: true });
      }

      if (path === '/api/staff/revoke' && post) {
        requireThat(staff, 403, 'Staff access is required.');
        const { grant } = await readJson(req);
        requireThat(typeof grant === 'string' && uuid.test(grant), 400, 'Invalid access record.');
        const removed = get('UPDATE grants SET active = 0 WHERE id = ? AND active = 1 RETURNING email', grant);
        requireThat(removed, 404, 'Access record not found.');
        run('DELETE FROM sessions WHERE email = ?', removed.email);
        run('DELETE FROM challenges WHERE email = ?', removed.email);
        return json(res, 200, { ok: true });
      }

      if (path === '/api/upload' && post) {
        const matter = req.headers['x-matter'];
        const receipt = req.headers['x-upload-id'];
        const grant = typeof matter === 'string' && get(`
          SELECT grants.id, matters.folder FROM grants JOIN matters ON matters.id = grants.matter
          WHERE grants.email = ? AND grants.matter = ? AND grants.active = 1
        `, email, matter);
        requireThat(grant, 403, 'You do not have upload access to this matter.');
        requireThat(typeof receipt === 'string' && uuid.test(receipt), 400, 'The upload reference is invalid.');
        limited('upload:' + email, 50, hour);
        requireThat(activeUploads < 4, 503, 'Uploads are busy. Try again in a moment.');
        let filename;
        try {
          filename = decodeURIComponent(req.headers['x-file-name'] ?? '').normalize('NFC').trim();
        } catch {
          throw new RequestError(400, 'The file name is invalid.');
        }
        const extension = filename.split('.').pop().toLowerCase();
        const type = Object.hasOwn(fileTypes, extension) ? fileTypes[extension] : null;
        requireThat(type && filename.includes('.') && filename.length <= 180 && !/[\\/\u0000-\u001f\u007f\u202a-\u202e\u2066-\u2069]/.test(filename),
          415, 'Choose a PDF, Word document, Excel workbook, JPG or PNG with a valid file name.');
        activeUploads += 1;
        try {
          const content = await readBody(req, maxUpload);
          requireThat(content.toString('hex', 0, type[1].length / 2) === type[1], 415, 'The file contents do not match the file type.');
          const digest = hash(content);
          let previous = get('SELECT * FROM receipts WHERE id = ?', receipt);
          if (!previous) {
            const driveFile = await providers.reserveFile();
            run(`
              INSERT INTO receipts(id, grant_id, digest, name, size, drive_id, created) VALUES (?, ?, ?, ?, ?, ?, ?)
              ON CONFLICT(id) DO NOTHING
            `, receipt, grant.id, digest, filename, content.length, driveFile, Date.now());
            previous = get('SELECT * FROM receipts WHERE id = ?', receipt);
          }
          requireThat(previous.grant_id === grant.id && previous.digest === digest && previous.name === filename,
            409, 'This upload reference belongs to a different file.');
          if (!previous.saved) {
            requireThat(await providers.scan(content), 422, 'The file did not pass the security scan.');
            requireThat(await providers.validateFolder(grant.folder), 503, 'The destination folder is unavailable. Please contact Ascent Legal.');
            requireThat(get('SELECT 1 FROM grants WHERE id = ? AND active = 1', grant.id) &&
              get('SELECT 1 FROM sessions WHERE id = ? AND until > ?', readCookie(req, sessionCookie), Date.now()),
            403, 'Your upload access has expired.');
            await providers.saveFile({ id: previous.drive_id, folder: grant.folder, name: filename, type: type[0], content, receipt });
            run('UPDATE receipts SET saved = COALESCE(saved, ?) WHERE id = ?', Date.now(), receipt);
          }
          json(res, 201, { receipt, name: filename });
          void notices();
          return;
        } finally {
          activeUploads -= 1;
        }
      }

      return json(res, 404, { error: 'Page not found.' });
    } catch (error) {
      if (res.headersSent || res.destroyed) return;
      if (error instanceof RequestError) return json(res, error.status, { error: error.message });
      console.error('A portal operation failed.');
      return json(res, 503, { error: 'We could not complete the request. Try again shortly.' });
    }
  });
  server.on('close', () => clearInterval(maintenance));
  return server;
}
