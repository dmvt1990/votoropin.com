#!/usr/bin/env bash
# deploy.sh [en|ru|both]
#
# Builds votoropin.com / votoropin.ru and deploys to the VPS.
# Default target when no argument is provided: both
#
# Steps:
#   1. Run export_benchmarks.py on the VPS to refresh IMOEX/MOEXIT CSVs.
#   2. Pull all four level CSVs from /opt/indices/state/.
#   3. Build each requested language variant.
#   4. Rsync each variant to its VPS web root.

set -euo pipefail

TARGET="${1:-both}"

VPS="root@153.80.196.164"
REMOTE_STATE="/opt/indices/state"
WEBROOT_EN="/var/www/votoropin/dist"
WEBROOT_RU="/var/www/votoropin-ru/dist"
DATA_DIR="$(dirname "$0")/../src/data"

# ── Step 1: Export fresh benchmark data on the VPS ───────────────────────────
echo "=== [1/4] Refreshing benchmark data on VPS ==="
ssh "$VPS" "cd /opt/indices && ./venv/bin/python3 export_benchmarks.py"

# ── Step 2: Pull all level CSVs ──────────────────────────────────────────────
echo ""
echo "=== [2/4] Pulling index & benchmark levels ==="

scp "$VPS:$REMOTE_STATE/ritix_levels.csv"  "$DATA_DIR/ritix_levels.csv"
echo "  ✓ ritix_levels.csv"

scp "$VPS:$REMOTE_STATE/rhix_levels.csv"   "$DATA_DIR/rhix_levels.csv"
echo "  ✓ rhix_levels.csv"

scp "$VPS:$REMOTE_STATE/imoex_levels.csv"  "$DATA_DIR/imoex_levels.csv"
echo "  ✓ imoex_levels.csv"

scp "$VPS:$REMOTE_STATE/moexit_levels.csv" "$DATA_DIR/moexit_levels.csv"
echo "  ✓ moexit_levels.csv"

scp "$VPS:$REMOTE_STATE/ritix_stats.json"  "$DATA_DIR/ritix_stats.json"
echo "  ✓ ritix_stats.json"

scp "$VPS:$REMOTE_STATE/rhix_stats.json"   "$DATA_DIR/rhix_stats.json"
echo "  ✓ rhix_stats.json"

scp "$VPS:$REMOTE_STATE/rdix_levels.csv"   "$DATA_DIR/rdix_levels.csv"
echo "  ✓ rdix_levels.csv"

scp "$VPS:$REMOTE_STATE/mcftrr_levels.csv" "$DATA_DIR/mcftrr_levels.csv"
echo "  ✓ mcftrr_levels.csv"

scp "$VPS:$REMOTE_STATE/rdix_stats.json"   "$DATA_DIR/rdix_stats.json"
echo "  ✓ rdix_stats.json"

# ── Step 3: Build ─────────────────────────────────────────────────────────────
echo ""
echo "=== [3/4] Building ==="
cd "$(dirname "$0")/.."

if [[ "$TARGET" == "en" || "$TARGET" == "both" ]]; then
  echo "  → EN build (dist-en/)"
  PUBLIC_LANG=en ASTRO_OUT_DIR=dist-en npx astro build
fi

if [[ "$TARGET" == "ru" || "$TARGET" == "both" ]]; then
  echo "  → RU build (dist-ru/)"
  PUBLIC_LANG=ru ASTRO_OUT_DIR=dist-ru npx astro build
fi

# ── Step 4: Deploy ────────────────────────────────────────────────────────────
echo ""
echo "=== [4/4] Deploying to VPS ==="

if [[ "$TARGET" == "en" || "$TARGET" == "both" ]]; then
  echo "  → votoropin.com  →  $WEBROOT_EN"
  rsync -avz --delete dist-en/ "$VPS:$WEBROOT_EN/"
fi

if [[ "$TARGET" == "ru" || "$TARGET" == "both" ]]; then
  echo "  → votoropin.ru   →  $WEBROOT_RU"
  rsync -avz --delete dist-ru/ "$VPS:$WEBROOT_RU/"
fi

echo ""
if [[ "$TARGET" == "en" ]]; then
  echo "=== Done. https://votoropin.com ==="
elif [[ "$TARGET" == "ru" ]]; then
  echo "=== Done. https://votoropin.ru ==="
else
  echo "=== Done. https://votoropin.com  ·  https://votoropin.ru ==="
fi
