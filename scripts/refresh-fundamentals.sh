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
# REFRESH=0 skips the network half; anything else keeps it.
REFRESH_ARG="--refresh"
[[ "${REFRESH-1}" == 0 ]] && REFRESH_ARG=""

if [[ ! -x "$RITIX_FA/bin/ritix-fa" ]]; then
  echo "ritix-fa not found at $RITIX_FA — clone dmvt1990/ritix-fa or set RITIX_FA" >&2
  exit 1
fi

mkdir -p "$DATA_DIR"

# How far back an issuer's own filings actually reach. Ozon and IVA each publish
# a three-year statement carrying 2022; Diasoft's year ends 31 March, so its
# columns are years to that date. The default suits everyone else — Softline
# included, since its FY2024 filing was read (2026-09-03) and carries 2023.
# Without this the script would quietly regenerate those three a year short of
# what they hold.
years_for() {
  case "$1" in
    OZON|IVAT) echo "2022:2025" ;;
    DIAS)      echo "2022:2026" ;;
    *)         echo "2023:2025" ;;
  esac
}

# An LTM column needs a published half-year to trail from. Softline issues no
# interim IFRS statements at all, only presentations. Diasoft closes its books
# on 31 March, so its next interim covers the six months to 30 September 2026
# and is not out yet, while the one before it falls inside the year already
# shown — there is nothing to add.
ltm_for() {
  case "$1" in
    DIAS|SOFL) echo "" ;;
    *)         echo "2025,2026-H1,2025-H1" ;;
  esac
}

for t in "${TICKERS[@]}"; do
  out="$DATA_DIR/$(echo "$t" | tr '[:upper:]' '[:lower:]').json"
  echo "=== $t"
  ltm="$(ltm_for "$t")"
  # REFRESH=0 re-exports from the facts and market data already on disk. The
  # market half of a refresh is ~6 MOEX requests per issuer behind a polite
  # delay, and ISS times out often enough that a run to pick up a change in the
  # table's own arithmetic can fail ten times over a network it never needed.
  "$RITIX_FA/bin/ritix-fa" fa "$t" \
    ${REFRESH_ARG} \
    --years "$(years_for "$t")" \
    ${ltm:+--ltm "$ltm"} \
    --json "$out" >/dev/null
  echo "  -> ${out#"$(cd "$(dirname "$0")/.." && pwd)/"}"
done
