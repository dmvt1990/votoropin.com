// src/data/ritix-constituents.ts
// Constituents of RITIX as of the last quarterly rebalancing.
// Source: 2026-07-01 Q3 rebalance; weights from the production methodology.py
// sqrt(ff_mcap) basis at Jul-1 prices. No membership change from Q2.

import type { Constituent } from "./rhix-constituents";

export const RITIX_AS_OF = "2026-07-01";

export const RITIX_CONSTITUENTS: Constituent[] = [
  { ticker: "YDEX", name: "Yandex (MKPAO)",         subIndustry: "Internet / Software",  sharesMillions: 0, freeFloatPct: 40, weightPct: 40.75 },
  { ticker: "OZON", name: "Ozon Holdings",          subIndustry: "Internet / E-commerce", sharesMillions: 0, freeFloatPct: 32, weightPct: 26.23 },
  { ticker: "HEAD", name: "HeadHunter (MKPAO)",     subIndustry: "Internet / Services",   sharesMillions: 0, freeFloatPct: 25, weightPct:  9.41 },
  { ticker: "VKCO", name: "VK Company",             subIndustry: "Internet platforms",    sharesMillions: 0, freeFloatPct: 15, weightPct:  6.92 },
  { ticker: "POSI", name: "Positive Technologies",  subIndustry: "Cybersecurity",         sharesMillions: 0, freeFloatPct: 18, weightPct:  5.48 },
  { ticker: "ASTR", name: "Astra Group",            subIndustry: "Enterprise software",   sharesMillions: 0, freeFloatPct: 12, weightPct:  3.55 },
  { ticker: "CNRU", name: "CIAN",                   subIndustry: "Internet / Marketplace", sharesMillions: 0, freeFloatPct:  7, weightPct:  2.79 },
  { ticker: "SOFL", name: "Softline",               subIndustry: "IT services",           sharesMillions: 0, freeFloatPct: 10, weightPct:  2.28 },
  { ticker: "DIAS", name: "Diasoft",                subIndustry: "Enterprise software",   sharesMillions: 0, freeFloatPct:  8, weightPct:  1.58 },
  { ticker: "IVAT", name: "IVA Technologies",       subIndustry: "Enterprise software",   sharesMillions: 0, freeFloatPct:  6, weightPct:  1.01 },
];

// Aggregate performance metrics from the 2025 performance report.
// Update at each report cycle.
export const RITIX_PERFORMANCE_2025 = {
  startDate: "2025-01-03",
  endDate: "2025-12-31",
  startingLevel: 1000.00,
  endingLevel: 726.93,
  periodHigh: 1058.98,
  periodHighDate: "2025-01-13",
  periodLow: 662.84,
  periodLowDate: "2025-12-17",
  totalReturnPct: -27.31,
  annualizedReturnPct: -27.51,
  annualizedVolPct: 23.70,
  sharpe: -1.16,
  maxDrawdownPct: -37.41,
  maxDrawdownDate: "2025-12-17",
  bestDayPct: 3.44,
  bestDayDate: "2025-12-31",
  worstDayPct: -3.72,
  worstDayDate: "2025-03-27",
  tradingDays: 259,
};
