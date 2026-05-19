#!/usr/bin/env bash
# scripts/fetch-levels.sh
#
# Pull the latest index level CSVs from the VPS without doing a full deploy.
# Useful for local development — run this, then `npm run dev` to see real data.
#
# Usage:
#   npm run fetch-levels
#   -- or directly --
#   bash scripts/fetch-levels.sh

set -euo pipefail

VPS="root@153.80.196.164"
REMOTE_STATE="/opt/indices/state"
DATA_DIR="$(dirname "$0")/../src/data"

echo "Pulling index levels from VPS..."
scp "$VPS:$REMOTE_STATE/ritix_levels.csv" "$DATA_DIR/ritix_levels.csv"
scp "$VPS:$REMOTE_STATE/rhix_levels.csv"  "$DATA_DIR/rhix_levels.csv"

RITIX_ROWS=$(tail -n +2 "$DATA_DIR/ritix_levels.csv" | wc -l | tr -d ' ')
RHIX_ROWS=$(tail -n +2 "$DATA_DIR/rhix_levels.csv" | wc -l | tr -d ' ')

echo "  ✓ ritix_levels.csv — $RITIX_ROWS trading days"
echo "  ✓ rhix_levels.csv  — $RHIX_ROWS trading days"
echo "Done. Run 'npm run dev' to preview with real data."
