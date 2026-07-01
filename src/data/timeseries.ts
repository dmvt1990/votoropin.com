/**
 * timeseries.ts
 *
 * Exports historical level series for RITIX, RHIX, and the benchmark
 * indices (IMOEX, MOEXIT). All series are pulled from the VPS by
 * deploy/deploy.sh before each build.
 *
 * Index CSVs (date,level,divisor,total_ff_mcap):
 *   src/data/ritix_levels.csv  ← /opt/indices/state/ritix_levels.csv
 *   src/data/rhix_levels.csv   ← /opt/indices/state/rhix_levels.csv
 *
 * Benchmark CSVs (date,level — already rebased to 1000 at inception):
 *   src/data/imoex_levels.csv  ← /opt/indices/state/imoex_levels.csv
 *   src/data/moexit_levels.csv ← /opt/indices/state/moexit_levels.csv
 *
 * For local dev: run `npm run fetch-levels` to pull fresh data from the VPS.
 */

import ritixRaw  from "./ritix_levels.csv?raw";
import rhixRaw   from "./rhix_levels.csv?raw";
import imoexRaw  from "./imoex_levels.csv?raw";
import moexitRaw from "./moexit_levels.csv?raw";
import rdixRaw   from "./rdix_levels.csv?raw";
import mcftrrRaw from "./mcftrr_levels.csv?raw";

/** Parse a CSV with at least two columns (date, level) into [date, level] pairs.
 *  Sorts ascending by date so the series is always in chronological order,
 *  regardless of the order rows appear in the CSV file.
 */
function parseLevelsCsv(raw: string): [string, number][] {
  return raw
    .trim()
    .split("\n")
    .slice(1)              // skip header row
    .filter(Boolean)
    .map((row): [string, number] | null => {
      const parts = row.split(",");
      if (parts.length < 2) return null;
      const d = parts[0].trim();
      const l = parseFloat(parts[1].trim());
      if (!d || isNaN(l)) return null;
      return [d, l];
    })
    .filter((x): x is [string, number] => x !== null)
    .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
}

/**
 * Rebase a series so the first data point equals exactly 1000.
 * Preserves all daily return ratios; only shifts the absolute level.
 */
function rebaseTo1000(series: [string, number][]): [string, number][] {
  if (series.length === 0) return [];
  const base = series[0][1];
  if (base === 0) return series;
  return series.map(([d, v]) => [d, (v / base) * 1000]);
}

// ── Index series (rebased so first point = 1000) ────────────────────────────
export const RITIX_SERIES: [string, number][] = rebaseTo1000(parseLevelsCsv(ritixRaw));
export const RHIX_SERIES:  [string, number][] = rebaseTo1000(parseLevelsCsv(rhixRaw));
export const RDIX_SERIES:  [string, number][] = rebaseTo1000(parseLevelsCsv(rdixRaw));

// ── Benchmark series (already rebased by export_benchmarks.py on the VPS) ───
export const IMOEX_SERIES:  [string, number][] = parseLevelsCsv(imoexRaw);
export const MOEXIT_SERIES: [string, number][] = parseLevelsCsv(moexitRaw);
// RDIX benchmark: MOEX net total return (MCFTRR), pre-rebased to 1000 at RDIX inception.
export const MCFTRR_SERIES: [string, number][] = parseLevelsCsv(mcftrrRaw);

// ── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Return the most recent [date, level] in a series.
 * Returns null when the series is empty.
 */
export function latestLevel(
  series: [string, number][]
): { date: string; level: number } | null {
  if (series.length === 0) return null;
  const [date, level] = series[series.length - 1];
  return { date, level };
}

/**
 * Total return since inception as a percentage.
 * Returns null when fewer than 2 data points are available.
 */
export function inceptionReturn(series: [string, number][]): number | null {
  if (series.length < 2) return null;
  const [, first] = series[0];
  const [, last]  = series[series.length - 1];
  return ((last - first) / first) * 100;
}

/**
 * Year-to-date return as a percentage.
 *
 * Uses the first available trading day on or after Jan 1 of the current
 * calendar year as the base — consistent with compute_stats.py on the VPS.
 * Returns null when there is no data for the current year yet.
 */
export function ytdReturn(series: [string, number][]): number | null {
  if (series.length < 2) return null;
  const jan1 = `${new Date().getFullYear()}-01-01`;

  // First trading day on or after Jan 1 of the current year
  let baseLevel: number | null = null;
  let baseIndex = -1;
  for (let i = 0; i < series.length; i++) {
    if (series[i][0] >= jan1) {
      baseLevel = series[i][1];
      baseIndex = i;
      break;
    }
  }

  // No data for current year yet
  if (baseLevel === null || baseLevel === 0 || baseIndex === series.length - 1) return null;

  const [, last] = series[series.length - 1];
  return ((last / baseLevel) - 1) * 100;
}

/**
 * Return over a trailing window ('1M','3M','YTD','1Y','3Y','5Y','ALL'),
 * measured from the last point. Mirrors the chart's range logic so the
 * adjustable period-return figure matches the visible chart window.
 */
export function windowReturn(series: [string, number][], range: string): number | null {
  if (series.length === 0) return null;
  const last = series[series.length - 1];
  let from: string | null = null;
  if (range !== "ALL") {
    const d = new Date(last[0]); const c = new Date(d);
    if (range === "1M") c.setMonth(c.getMonth() - 1);
    else if (range === "3M") c.setMonth(c.getMonth() - 3);
    else if (range === "1Y") c.setFullYear(c.getFullYear() - 1);
    else if (range === "3Y") c.setFullYear(c.getFullYear() - 3);
    else if (range === "5Y") c.setFullYear(c.getFullYear() - 5);
    else if (range === "YTD") c.setFullYear(d.getFullYear(), 0, 1);
    from = c.toISOString().slice(0, 10);
  }
  const win = from ? series.filter(([dd]) => dd >= from) : series;
  if (win.length < 2) return null;
  return (win[win.length - 1][1] / win[0][1] - 1) * 100;
}
