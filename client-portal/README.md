# Ascent Legal Client Portal

An invite-only document upload service. A client signs in with an eight-digit email code and uploads into the Google Workspace Shared Drive folder assigned to their matter. Staff can register folders, send invitations, revoke access, and review receipts. The service stores document bytes in memory during scanning and transfer. The database stores matter and access records, receipt metadata, and temporary sign-in state. Upload alerts contain a link to the portal.

## Verify locally

From the repository root with Node.js 24, run `node --test client-portal/*.test.mjs`. The tests use a temporary or in-memory database, synthetic email messages, and simulated provider responses.

## Configure the live portal

### Stage the dedicated Debian VM

From the VM, check out the portal branch and run `sudo bash client-portal/deploy/stage-debian.sh` from the repository root. It installs Node.js 24, ClamAV, Caddy, and the portal's systemd unit. It copies the application to `/opt/ascent-client-portal`, keeps the scanner on the loopback interface, and leaves the portal service inactive.

For this staged layout, put the runtime settings in `/etc/ascent-client-portal/portal.env` with mode `0600` and set `PORTAL_DB_PATH=/var/lib/ascent-client-portal/portal.db`. The service manager creates and protects the state directory. Configure HTTPS and the email provider before enabling the service.

### Finish configuration

1. Use a firm-managed Google Cloud project and enable the Drive API. Create a dedicated service account with no domain-wide delegation. In Workspace, set up a private Shared Drive for portal intake and a dedicated intake root folder within it. Give the service account the least access required to traverse the configured path and upload into the client folders. Keep the service account restricted to the portal intake area. If Workspace policy prevents granting this account access, ask the Workspace administrator for an approved service identity.
2. Set up a firm-owned Resend account with a verified sending domain and a send-only API key. Use dedicated firm email accounts for staff sign-in and require MFA for those mailboxes.
3. Deploy the whole repository checkout to a firm-approved Node.js 24 host so the portal can use the firm logo in `public/`. Run one server instance behind an HTTPS reverse proxy. Use a private persistent disk for SQLite with encrypted backups and a firm-defined retention schedule for receipt metadata. Point DNS for `portal.ascentlegal.io` to the approved host and configure TLS. Block access to the Node port from outside the proxy. Set the proxy's request body limit to at least 20 MiB and configure timeouts to allow scanning and upload. Set `PORTAL_TRUSTED_PROXY` to the direct proxy socket address and have the proxy overwrite `X-Real-IP` with the actual client address. Leave that variable unset when the proxy cannot establish a trustworthy client address.
4. Run ClamAV with current signatures on a private local or adjacent server. Enable `INSTREAM`, set `StreamMaxLength` and scan limits to cover the 20 MiB intake limit, and configure it to report scan-limit and encrypted archive or document conditions so the portal rejects them. The scanner port must be unreachable from the internet. Verify clean and blocked responses before use.
5. Set the variables in [.env.example](.env.example) as host secrets or settings. On Compute Engine, attach the dedicated service account with the `https://www.googleapis.com/auth/drive` VM access scope, set `PORTAL_GOOGLE_COMPUTE_ACCOUNT` to that account's email, and leave `GOOGLE_APPLICATION_CREDENTIALS` blank. The portal requests short-lived Drive tokens from the VM metadata server. For a host configured to use a credential file, leave `PORTAL_GOOGLE_COMPUTE_ACCOUNT` blank and mount the credential as a secret file outside the deployment checkout. Generate `PORTAL_AUTH_SECRET` with `node -p "require('node:crypto').randomBytes(32).toString('base64url')"`. Run `node client-portal/server.mjs` under a service manager. For a local host configuration file outside the repo, start with `node --env-file=/path/to/portal.env client-portal/server.mjs`.
6. Create two dummy matter folders below the intake root. Sign in as staff, register the upload folders, and invite two test emails the firm controls. Test sign-in, upload, the correct Drive destination, team alert, and revocation. Confirm that a client can see only the matters assigned to their email and that the source Shared Drive is private. Verify scanning, service monitoring, and recovery before accepting actual client documents.
7. Once the portal works on the live subdomain, set `ASCENT_CLIENT_PORTAL_URL=https://portal.ascentlegal.io` in the marketing website's build environment and redeploy the website. This enables the Client Portal link in the desktop and mobile header.

## Staff workflow

Create a client-specific folder inside the portal intake root for each matter. Enter the folder ID and a short label suitable for the client to see. The portal verifies folder ancestry and checks access again before each upload. Assign a different destination folder to each matter. One matter can have multiple invited email addresses. If an invitation email fails, resubmit the same address and matter to resend it. Revoking a client also ends their current portal sessions. A revoked client can sign in again if they still have another assigned matter.

The portal takes PDFs, DOCX, XLSX, JPG, and PNG, one file at a time up to 20 MiB. Use the staff dashboard to track stored receipts. Upload notifications retry for temporary mail errors and appear as pending in the dashboard until sent. Staff must follow up on alerts that remain pending. Document retention and deletion take place in Google Workspace under the firm's policy.
