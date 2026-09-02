#!/usr/bin/env bash
# refresh-snapshot.sh [PERIOD PRICE_MONTH LTM]
#
# Regenerates the cross-constituent snapshot behind the table on /indices/ritix.
#
# Where refresh-fundamentals.sh gives one issuer across five years, this gives
# one period across all ten constituents. Flows and balances come from the
# period; the multiples and yields trail twelve months to the same date, priced
# at the same close, because a P/E on six months of earnings is not a P/E.
#
# Re-run at each half-year once every constituent has reported, changing the
# three arguments together — they have to describe the same date.

set -euo pipefail

RITIX_FA="${RITIX_FA:-$HOME/ritix-fa}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/src/data/ritix-snapshot.json"

PERIOD="${1:-2026-H1}"
PRICE="${2:-2026-06}"
LTM="${3:-2025,2026-H1,2025-H1}"

if [[ ! -x "$RITIX_FA/bin/ritix-fa" ]]; then
  echo "ritix-fa not found at $RITIX_FA — clone dmvt1990/ritix-fa or set RITIX_FA" >&2
  exit 1
fi

"$RITIX_FA/bin/ritix-fa" snapshot RITIX \
  --period "$PERIOD" \
  --price "$PRICE" \
  --ltm "$LTM" \
  --json "$OUT"
