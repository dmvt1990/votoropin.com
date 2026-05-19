#!/usr/bin/env bash
# deploy.sh
#
# Builds votoropin.com and deploys to the VPS.
#
# Steps:
#   1. Pull latest index level CSVs from /opt/indices/state/ on the VPS.
#   2. Build the Astro site (data is baked in at build time).
#   3. Rsync the built dist/ to the VPS web root.
#
# Usage:
#   ./deploy/deploy.sh
#
# Requirements: ssh key for root@153.80.196.164 must be in your ssh-agent.

set -euo pipefail

VPS="root@153.80.196.164"
REMOTE_STATE="/opt/indices/state"
REMOTE_WEBROOT="/var/www/votoropin/dist"
DATA_DIR="$(dirname "$0")/../src/data"

# ── Step 1: Pull fresh index levels ─────────────────────────────────────────
echo "=== [1/3] Pulling index levels from VPS ==="

scp "$VPS:$REMOTE_STATE/ritix_levels.csv" "$DATA_DIR/ritix_levels.csv"
echo "  ✓ ritix_levels.csv"

scp "$VPS:$REMOTE_STATE/rhix_levels.csv" "$DATA_DIR/rhix_levels.csv"
echo "  ✓ rhix_levels.csv"

# ── Step 2: Build ────────────────────────────────────────────────────────────
echo ""
echo "=== [2/3] Building ==="
cd "$(dirname "$0")/.."
npm run build

# ── Step 3: Deploy ───────────────────────────────────────────────────────────
echo ""
echo "=== [3/3] Deploying to VPS ==="
rsync -avz --delete dist/ "$VPS:$REMOTE_WEBROOT/"

echo ""
echo "=== Done. Site is live at https://votoropin.com ==="
