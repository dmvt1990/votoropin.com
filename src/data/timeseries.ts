// src/data/timeseries.ts
// Index level time-series data.
//
// At launch this uses a synthetic placeholder generator so the chart
// renders during development. To replace with real data:
//   1. Drop a CSV with columns date,level into src/data/<index>.csv
//   2. Import it as a string?raw, parse it, and export instead of
//      the synthetic series.
//
// Reproducibility: the seed is fixed so the chart is stable in dev.

export type Point = [string, number]; // [ISO date, level]

function pseudoRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280 - 0.5;
  };
}

function generate(
  startISO: string,
  days: number,
  startLevel: number,
  driftPerDay: number,
  volPerDay: number,
  seed: number,
): Point[] {
  const rng = pseudoRandom(seed);
  const out: Point[] = [];
  let v = startLevel;
  const start = new Date(startISO);
  for (let i = 0; i < days; i++) {
    v *= 1 + driftPerDay + volPerDay * rng();
    const d = new Date(start);
    d.setUTCDate(start.getUTCDate() + i);
    out.push([d.toISOString().slice(0, 10), Math.round(v * 100) / 100]);
  }
  return out;
}

// RHIX synthetic series — slight positive drift, low vol
export const RHIX_SERIES: Point[] = generate(
  "2025-01-03",
  500, // ~2 years of trading days
  1000,
  0.00035,
  0.012,
  7,
);

// RITIX synthetic series — calibrated to roughly hit the 2025 -27% return
export const RITIX_SERIES: Point[] = generate(
  "2025-01-03",
  500,
  1000,
  -0.0015,
  0.015,
  13,
);

// Latest level helpers — convenient for hero / ribbon
export function latestLevel(series: Point[]): { level: number; date: string } {
  const last = series[series.length - 1];
  return { level: last[1], date: last[0] };
}
