/**
 * timeseries.ts
 *
 * Exports historical index level series for RITIX and RHIX.
 *
 * Data source: CSV files pulled from /opt/indices/state/ on the VPS by
 * deploy/deploy.sh before each build. Format: date,level,divisor,total_ff_mcap
 *
 * For local development: run `npm run fetch-levels` to pull current data,
 * or leave the committed placeholder files in place (charts will show
 * whatever data is currently in src/data/*.csv).
 */

import ritixRaw from "./ritix_levels.csv?raw";
import rhixRaw from "./rhix_levels.csv?raw";

/** Parse a level CSV (date,level,... format) into [date, level] pairs. */
function parseLevelsCsv(raw: string): [string, number][] {
  return raw
    .trim()
    .split("\n")
    .slice(1) // skip header row
    .filter(Boolean)
    .map((row): [string, number] | null => {
      const parts = row.split(",");
      if (parts.length < 2) return null;
      const d = parts[0].trim();
      const l = parseFloat(parts[1].trim());
      if (!d || isNaN(l)) return null;
      return [d, l];
    })
    .filter((x): x is [string, number] => x !== null);
}

export const RITIX_SERIES: [string, number][] = parseLevelsCsv(ritixRaw);
export const RHIX_SERIES: [string, number][] = parseLevelsCsv(rhixRaw);

/**
 * Latest level for quick display (e.g. hero cards on the index page).
 * Returns null if no data is available.
 */
export function latestLevel(
  series: [string, number][]
): { date: string; level: number } | null {
  if (series.length === 0) return null;
  const [date, level] = series[series.length - 1];
  return { date, level };
}

/**
 * Performance since inception as a percentage.
 * Returns null if fewer than 2 data points.
 */
export function inceptionReturn(series: [string, number][]): number | null {
  if (series.length < 2) return null;
  const [, first] = series[0];
  const [, last] = series[series.length - 1];
  return ((last - first) / first) * 100;
}
