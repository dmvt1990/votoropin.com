#!/usr/bin/env bash
#
# deploy/deploy.sh — Build & deploy votoropin.com to the VPS.
#
# Prerequisites on your local machine:
#   - SSH access to the VPS configured in ~/.ssh/config under host "votoropin"
#     (e.g. `Host votoropin` block with HostName, User, IdentityFile)
#   - rsync installed
#
# Prerequisites on the VPS (first time only — see deploy/SETUP.md):
#   - /var/www/votoropin owned by the deploy user
#   - Nginx + certbot configured (deploy/nginx.conf, see SETUP.md)
#
# Usage:
#   ./deploy/deploy.sh
#
set -euo pipefail

HOST="${DEPLOY_HOST:-votoropin}"        # ssh host alias
TARGET="${DEPLOY_TARGET:-/var/www/votoropin/dist}"

echo "→ Building site..."
npm run build

echo "→ Deploying to $HOST:$TARGET ..."
rsync -avz --delete \
    --exclude '.DS_Store' \
    dist/ "$HOST:$TARGET/"

echo "→ Reloading Nginx (no-op if config unchanged)..."
ssh "$HOST" 'sudo nginx -t && sudo systemctl reload nginx' || {
  echo "  (Nginx reload skipped — set up passwordless sudo for nginx if you want this)"
}

echo "✓ Deployed."
