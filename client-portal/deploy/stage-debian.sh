#!/usr/bin/env bash
# Run on the dedicated portal VM from a checkout of this repository.
set -euo pipefail

if [[ "$(id -u)" != 0 ]]; then
  echo "Run this script with sudo on the portal VM." >&2
  exit 1
fi
if [[ "$(dpkg --print-architecture)" != amd64 ]]; then
  echo "This installer requires an amd64 Debian VM." >&2
  exit 1
fi

repo="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/../.." && pwd)"
work="$(mktemp -d)"
trap 'rm -rf -- "$work"' EXIT
node_version=v24.22.3
node_archive="node-${node_version}-linux-x64.tar.xz"
node_url="https://nodejs.org/dist/${node_version}"
app=/opt/ascent-client-portal

apt-get update
DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends   ca-certificates curl xz-utils clamav-daemon clamav-freshclam caddy

curl --fail --silent --show-error --location --proto '=https' --proto-redir '=https'   --output "$work/SHASUMS256.txt" "$node_url/SHASUMS256.txt"
curl --fail --silent --show-error --location --proto '=https' --proto-redir '=https'   --output "$work/$node_archive" "$node_url/$node_archive"
(
  cd -- "$work"
  awk -v archive="$node_archive" '$2 == archive { print; matched++ } END { if (matched != 1) exit 1 }'     SHASUMS256.txt > node.sha256
  sha256sum --check node.sha256
  tar -xJf "$node_archive" "node-${node_version}-linux-x64/bin/node"
)

install -D -m 0755 "$work/node-${node_version}-linux-x64/bin/node" /opt/ascent-node/bin/node
getent passwd ascent-portal >/dev/null || useradd --system --user-group --home-dir /nonexistent --shell /usr/sbin/nologin ascent-portal
install -d -m 0750 -o root -g ascent-portal "$app" "$app/client-portal" "$app/client-portal/public" "$app/public"
install -m 0640 -o root -g ascent-portal "$repo/client-portal/"{app,providers,server,store}.mjs "$app/client-portal/"
install -m 0640 -o root -g ascent-portal "$repo/client-portal/public/"{index.html,portal.css,portal.js} "$app/client-portal/public/"
install -m 0640 -o root -g ascent-portal "$repo/public/ascent-legal-logo.png" "$app/public/"
install -d -m 0700 /etc/ascent-client-portal
install -m 0644 "$repo/client-portal/deploy/ascent-client-portal.service"   /etc/systemd/system/ascent-client-portal.service
systemctl daemon-reload

clam_config=/etc/clamav/clamd.conf
if [[ ! -e "$clam_config.ascent-original" ]]; then
  cp -p -- "$clam_config" "$clam_config.ascent-original"
fi
awk '$1 !~ /^(TCPSocket|TCPAddr|StreamMaxLength|MaxFileSize|MaxScanSize|AlertExceedsMax|AlertEncryptedArchive|AlertEncryptedDoc)$/'   "$clam_config" > "$work/clamd.conf"
cat >> "$work/clamd.conf" <<'CLAM'
TCPSocket 3310
TCPAddr 127.0.0.1
StreamMaxLength 25M
MaxFileSize 25M
MaxScanSize 100M
AlertExceedsMax true
AlertEncryptedArchive true
AlertEncryptedDoc true
CLAM
cat "$work/clamd.conf" > "$clam_config"
systemctl enable --now clamav-freshclam.service
for attempt in {1..60}; do
  if compgen -G '/var/lib/clamav/main.c[lv]d' >/dev/null &&
     compgen -G '/var/lib/clamav/daily.c[lv]d' >/dev/null; then
    break
  fi
  sleep 2
done
if ! compgen -G '/var/lib/clamav/main.c[lv]d' >/dev/null ||
   ! compgen -G '/var/lib/clamav/daily.c[lv]d' >/dev/null; then
  echo "ClamAV signatures are not available yet. Check: sudo journalctl -u clamav-freshclam -n 35 --no-pager" >&2
  exit 1
fi
# Debian passes sockets to clamd through systemd, which takes precedence over
# the TCP settings in clamd.conf. Keep the packaged Unix socket and add loopback.
install -d -m 0755 /etc/systemd/system/clamav-daemon.socket.d
cat > /etc/systemd/system/clamav-daemon.socket.d/ascent-portal.conf <<'SOCKET'
[Socket]
ListenStream=127.0.0.1:3310
SOCKET
systemctl stop clamav-daemon.service clamav-daemon.socket
systemctl daemon-reload
systemctl start clamav-daemon.socket
systemctl start clamav-daemon.service

/opt/ascent-node/bin/node --version
python3 - <<'PY'
import socket
import time

for attempt in range(30):
    try:
        with socket.create_connection(("127.0.0.1", 3310), timeout=1) as scanner:
            scanner.sendall(b"zPING\0")
            if scanner.recv(32).rstrip(b"\0\n") == b"PONG":
                break
    except OSError:
        pass
    time.sleep(2)
else:
    raise SystemExit("ClamAV did not answer. Check: sudo journalctl -u clamav-daemon -u clamav-freshclam -n 35 --no-pager")
print("ClamAV: ready on localhost")
PY
echo "Portal files staged. The portal service has not been started."
