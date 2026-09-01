#!/usr/bin/env bash
# refresh-fundamentals.sh [TICKER ...]
#
# Regenerates the per-constituent financial data behind /indices/<index>/<ticker>.
#
# The numbers come from the ritix-fa pipeline, which collects each issuer's own
# filings from its investor-relations pages and reads the line items out of them.
# This script only re-runs the export and drops the JSON into src/data/.
#
# Adding a constituent page is a data change: generate its JSON here and the
# route picks it up. Nothing in src/pages needs editing.

set -euo pipefail

RITIX_FA="${RITIX_FA:-$HOME/ritix-fa}"
DATA_DIR="$(cd "$(dirname "$0")/.." && pwd)/src/data/fundamentals"
TICKERS=("${@:-YDEX}")

if [[ ! -x "$RITIX_FA/bin/ritix-fa" ]]; then
  echo "ritix-fa not found at $RITIX_FA — clone dmvt1990/ritix-fa or set RITIX_FA" >&2
  exit 1
fi

mkdir -p "$DATA_DIR"

for t in "${TICKERS[@]}"; do
  out="$DATA_DIR/$(echo "$t" | tr '[:upper:]' '[:lower:]').json"
  echo "=== $t"
  "$RITIX_FA/bin/ritix-fa" fa "$t" \
    --refresh \
    --years 2023:2025 \
    --ltm 2025,2026-H1,2025-H1 \
    --json "$out" >/dev/null
  echo "  -> ${out#"$(cd "$(dirname "$0")/.." && pwd)/"}"
done
