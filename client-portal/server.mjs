import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { createPortal, normalizeEmail, validEmail } from './app.mjs';
import { makeProviders } from './providers.mjs';
import { openStore } from './store.mjs';

function required(name) {
  if (!process.env[name]?.trim()) throw new Error(name + ' must be configured.');
  return process.env[name].trim();
}

const url = new URL(required('PORTAL_ORIGIN'));
if (url.protocol !== 'https:' || url.origin !== process.env.PORTAL_ORIGIN.trim()) {
  throw new Error('PORTAL_ORIGIN must be an HTTPS origin, without a trailing slash.');
}
const staff = new Set(required('PORTAL_STAFF_EMAILS').split(',').map(normalizeEmail));
const notificationEmail = normalizeEmail(required('PORTAL_NOTIFICATION_EMAIL'));
const secret = Buffer.from(required('PORTAL_AUTH_SECRET'), 'base64url');
if (![...staff, notificationEmail].every(validEmail) || secret.length < 32) {
  throw new Error('Configure valid email addresses and a random authentication secret of at least 32 bytes.');
}

const googleComputeAccount = process.env.PORTAL_GOOGLE_COMPUTE_ACCOUNT?.trim();
if (googleComputeAccount && (!validEmail(googleComputeAccount) || !googleComputeAccount.endsWith('.iam.gserviceaccount.com'))) {
  throw new Error('PORTAL_GOOGLE_COMPUTE_ACCOUNT must be a Google service account email.');
}

const config = {
  origin: url.origin, notificationEmail, staff, secret,
  trustedProxy: process.env.PORTAL_TRUSTED_PROXY,
  googleComputeAccount,
  googleCredentials: googleComputeAccount ? undefined : required('GOOGLE_APPLICATION_CREDENTIALS'),
  driveId: required('PORTAL_DRIVE_ID'),
  driveRoot: required('PORTAL_INTAKE_ROOT_ID'),
  emailFrom: required('PORTAL_EMAIL_FROM'),
  emailKey: required('RESEND_API_KEY'),
  scanHost: required('PORTAL_CLAMD_HOST'),
  scanPort: Number(process.env.PORTAL_CLAMD_PORT ?? 3310),
};
if (![config.driveId, config.driveRoot].every((id) => /^[\w-]{10,120}$/.test(id)) ||
    config.driveId === config.driveRoot) {
  throw new Error('Configure a Shared Drive ID and a separate intake root folder ID.');
}
const databasePath = required('PORTAL_DB_PATH');
process.umask(0o077);
mkdirSync(dirname(databasePath), { recursive: true, mode: 0o700 });
const providers = makeProviders(config);
const db = openStore(databasePath);
const server = createPortal({ db, config, providers });
server.listen(Number(process.env.PORT ?? 8787), process.env.PORTAL_BIND ?? '127.0.0.1', () => {
  console.log('Ascent Legal portal is listening.');
});
