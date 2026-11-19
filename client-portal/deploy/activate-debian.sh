#!/usr/bin/env bash
# Configure the staged portal VM. The operator supplies infrastructure IDs and the sending key.
set -euo pipefail
if [[ "$(id -u)" != 0 || "$#" != 5 ]]; then
  echo "Usage: sudo bash activate-debian.sh HOST MAIL_DOMAIN UPLOADER_EMAIL DRIVE_ID INTAKE_ROOT_ID" >&2
  exit 1
fi

host=$1
mail_domain=$2
uploader=$3
drive=$4
intake=$5
domain_pattern='^[a-z0-9]([a-z0-9.-]*[a-z0-9])?\.[a-z]{2,}$'
account_pattern='^[a-z0-9-]+@[a-z0-9-]+\.iam\.gserviceaccount\.com$'
id_pattern='^[a-zA-Z0-9_-]{10,120}$'
if [[ ! "$host" =~ $domain_pattern || ! "$mail_domain" =~ $domain_pattern ||
      ! "$uploader" =~ $account_pattern || ! "$drive" =~ $id_pattern ||
      ! "$intake" =~ $id_pattern || "$drive" = "$intake" ]]; then
  echo "Check the portal hostname, sending domain, uploader account and Drive IDs." >&2
  exit 1
fi
node=/opt/ascent-node/bin/node
if [[ ! -x "$node" || ! -f /etc/systemd/system/ascent-client-portal.service ]]; then
  echo "Run stage-debian.sh before activation." >&2
  exit 1
fi
systemctl is-active --quiet clamav-daemon.service

umask 077
env_path=/etc/ascent-client-portal/portal.env
if [[ ! -f "$env_path" ]]; then
  read -r -p "Firm email for first staff login and alerts: " staff </dev/tty
  if [[ ! "$staff" =~ ^[a-zA-Z0-9._+%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]; then
    echo "Enter a single valid firm email address." >&2
    exit 1
  fi
  read -r -s -p "Paste your Resend Sending access key (input hidden): " resend_key </dev/tty
  printf '\n'
  if [[ ! "$resend_key" =~ ^re_[a-zA-Z0-9_-]+$ ]]; then
    echo "The key should start with re_. No settings were saved." >&2
    exit 1
  fi
  auth_secret="$("$node" -p "require('node:crypto').randomBytes(32).toString('base64url')")"
  (
    set -o noclobber
    cat > "$env_path" <<SETTINGS
PORTAL_ORIGIN=https://$host
PORTAL_STAFF_EMAILS=$staff
PORTAL_NOTIFICATION_EMAIL=$staff
PORTAL_AUTH_SECRET=$auth_secret
PORTAL_DB_PATH=/var/lib/ascent-client-portal/portal.db
PORTAL_GOOGLE_COMPUTE_ACCOUNT=$uploader
PORTAL_DRIVE_ID=$drive
PORTAL_INTAKE_ROOT_ID=$intake
PORTAL_EMAIL_FROM="Ascent Legal <no-reply@$mail_domain>"
RESEND_API_KEY=$resend_key
PORTAL_CLAMD_HOST=127.0.0.1
PORTAL_CLAMD_PORT=3310
PORTAL_BIND=127.0.0.1
PORTAL_TRUSTED_PROXY=127.0.0.1
PORT=8787
SETTINGS
  )
  unset resend_key auth_secret
else
  if ! grep -Fxq "PORTAL_ORIGIN=https://$host" "$env_path"; then
    echo "Saved settings have a different portal hostname." >&2
    exit 1
  fi
  echo "Using the existing settings file."
fi

caddyfile="$(mktemp)"
trap 'rm -f -- "$caddyfile"' EXIT
cat > "$caddyfile" <<CADDY
$host {
	reverse_proxy 127.0.0.1:8787 {
		header_up X-Real-IP {remote_host}
	}
}
CADDY
caddy validate --config "$caddyfile" --adapter caddyfile

systemctl enable ascent-client-portal.service
systemctl restart ascent-client-portal.service
for attempt in {1..15}; do
  if curl --fail --silent --max-time 2 http://127.0.0.1:8787/api/session >/dev/null; then
    break
  fi
  sleep 1
done
curl --fail --silent --show-error --max-time 2 http://127.0.0.1:8787/api/session >/dev/null
echo "Portal: responsive on localhost"

if [[ -f /etc/caddy/Caddyfile && ! -e /etc/caddy/Caddyfile.pre-ascent-portal ]]; then
  cp -p -- /etc/caddy/Caddyfile /etc/caddy/Caddyfile.pre-ascent-portal
fi
install -m 0644 "$caddyfile" /etc/caddy/Caddyfile
systemctl enable caddy.service
systemctl reload-or-restart caddy.service
echo "HTTPS proxy configured for $host"
