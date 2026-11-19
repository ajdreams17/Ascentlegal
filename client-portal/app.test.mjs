import test from 'node:test';
import assert from 'node:assert/strict';
import { randomBytes, randomUUID } from 'node:crypto';
import { openStore } from './store.mjs';
import { createPortal } from './app.mjs';

test('client signs in, can upload only to their matter, and loses access on revocation', async (t) => {
  const db = openStore(':memory:');
  const messages = [];
  const uploaded = [];
  let failAfterSaving = true;
  let scannerUnavailable = false;
  let validDestination = true;
  const config = {
    origin: 'https://portal.example.test',
    staff: new Set(['staff@example.test']),
    notificationEmail: 'alerts@example.test',
    secret: randomBytes(32),
  };
  const providers = {
    validateFolder: async (id) => validDestination && id.startsWith('intake_'),
    reserveFile: async () => randomUUID(),
    scan: async (bytes) => {
      if (scannerUnavailable) throw new Error('Simulated scanner outage');
      return !bytes.includes('synthetic-rejected-file');
    },
    saveFile: async (file) => {
      if (!uploaded.some(({ id }) => id === file.id)) uploaded.push(file);
      if (failAfterSaving) {
        failAfterSaving = false;
        throw new Error('Simulated connection loss after provider accepted the file');
      }
    },
    mail: async (message) => { messages.push(message); },
  };
  const server = createPortal({ db, config, providers });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  t.after(async () => {
    await new Promise((resolve) => server.close(resolve));
    db.close();
  });
  const host = 'http://127.0.0.1:' + server.address().port;

  function browser() {
    const cookies = new Map();
    return async (path, { json, body, headers, expected = 200, method, origin = config.origin } = {}) => {
      const response = await fetch(host + path, {
        method: method ?? (json !== undefined || body !== undefined ? 'POST' : 'GET'),
        headers: {
          Cookie: [...cookies].map(([key, value]) => key + '=' + value).join('; '),
          Origin: origin,
          ...(json !== undefined ? { 'Content-Type': 'application/json' } : {}),
          ...headers,
        },
        body: json !== undefined ? JSON.stringify(json) : body,
      });
      const received = await response.json();
      assert.equal(response.status, expected, JSON.stringify(received));
      for (const cookie of response.headers.getSetCookie()) {
        const [key, value] = cookie.split(';')[0].split('=');
        if (value) {
          assert.match(cookie, /HttpOnly; SameSite=Strict; Max-Age=\d+; Secure/);
          cookies.set(key, value);
        } else cookies.delete(key);
      }
      return received;
    };
  }

  async function codeFor(request, email) {
    await request('/api/code', { json: { email }, expected: 202 });
    const last = messages.findLast((message) => message.to === email && message.subject.includes('sign-in code'));
    return last?.text.match(/\b\d{8}\b/)[0];
  }

  const anonymous = browser();
  assert.equal((await fetch(host + '/')).status, 200);
  assert.equal((await fetch(host + '/brand.png')).status, 200);
  assert.equal(await codeFor(anonymous, 'stranger@example.test'), undefined);
  await anonymous('/api/verify', { json: { code: '00000000' }, expected: 401 });
  await anonymous('/api/code', { json: { email: 'staff@example.test' }, origin: 'https://other.example.test', expected: 403 });

  const staff = browser();
  const staffCode = await codeFor(staff, 'staff@example.test');
  await staff('/api/verify', { json: { code: staffCode } });
  await staff('/api/verify', { json: { code: staffCode }, expected: 401 });
  await staff('/api/staff/matters', { json: { label: 'Outside', folder: 'outside_12345' }, expected: 422 });
  await staff('/api/staff/matters', { json: { label: 'Matter A', folder: 'intake_aaaaaa' }, expected: 201 });
  await staff('/api/staff/matters', { json: { label: 'Matter B', folder: 'intake_bbbbbb' }, expected: 201 });
  await staff('/api/staff/matters', { json: { label: 'Duplicate', folder: 'intake_aaaaaa' }, expected: 409 });
  const { matters: [a, b] } = await staff('/api/staff');

  const email = 'client@example.test';
  await staff('/api/staff/invite', { json: { email, matter: a.id }, expected: 201 });
  await staff('/api/staff/invite', { json: { email: 'other@example.test', matter: b.id }, expected: 201 });
  const client = browser();
  const code = await codeFor(client, email);
  await anonymous('/api/verify', { json: { code }, expected: 401 });
  await client('/api/verify', { json: { code } });
  await client('/api/staff', { expected: 403 });
  assert.deepEqual((await client('/api/session')).matters, [a]);
  const uploadId = randomUUID();
  const headers = { 'X-Matter': a.id, 'X-Upload-Id': uploadId, 'X-File-Name': 'sample.pdf' };
  const sample = Buffer.from('%PDF-1.7 synthetic sample');
  await client('/api/upload', { headers: { ...headers, 'X-Matter': b.id }, body: sample, expected: 403 });
  await client('/api/upload', { headers, body: Buffer.from('fake type'), expected: 415 });
  await client('/api/upload', { headers: { ...headers, 'X-File-Name': 'hidden%2Fnested.pdf' }, body: sample, expected: 415 });
  await client('/api/upload', { headers: { ...headers, 'X-Upload-Id': randomUUID() }, body: Buffer.from('%PDF-synthetic-rejected-file'), expected: 422 });
  scannerUnavailable = true;
  await client('/api/upload', { headers, body: sample, expected: 503 });
  assert.equal(uploaded.length, 0);
  scannerUnavailable = false;
  validDestination = false;
  await client('/api/upload', { headers, body: sample, expected: 503 });
  assert.equal(uploaded.length, 0);
  validDestination = true;
  await client('/api/upload', { headers, body: sample, expected: 503 });
  const confirmation = await client('/api/upload', { headers, body: sample, expected: 201 });
  assert.equal(confirmation.receipt, uploadId);
  await client('/api/upload', { headers, body: sample, expected: 201 });
  assert.equal(uploaded.length, 1);
  assert.equal(uploaded[0].folder, 'intake_aaaaaa');
  const alert = messages.filter((message) => message.to === config.notificationEmail);
  assert.equal(alert.length, 1);
  assert.doesNotMatch(alert[0].text, /Matter A|sample.pdf|client@example/);

  const staffView = await staff('/api/staff');
  assert.equal(staffView.receipts[0].name, 'sample.pdf');
  await staff('/api/staff/revoke', { json: { grant: staffView.grants.find((grant) => grant.email === email).id } });
  await client('/api/upload', { headers, body: sample, expected: 401 });
  assert.equal((await client('/api/session')).email, null);
});
