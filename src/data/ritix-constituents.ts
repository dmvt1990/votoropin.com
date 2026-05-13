// src/data/ritix-constituents.ts
// Constituents of RITIX as of the last quarterly rebalancing.
// Source: performance report dated 2026-04-29.

import type { Constituent } from "./rhix-constituents";

export const RITIX_AS_OF = "2025-10-01";

export const RITIX_CONSTITUENTS: Constituent[] = [
  { ticker: "YDEX", name: "Yandex (MKPAO)",         subIndustry: "Internet / Software",  sharesMillions: 0, freeFloatPct: 40, weightPct: 35.40 },
  { ticker: "OZON", name: "Ozon Holdings",          subIndustry: "Internet / E-commerce", sharesMillions: 0, freeFloatPct: 32, weightPct: 23.22 },
  { ticker: "HEAD", name: "HeadHunter (MKPAO)",     subIndustry: "Internet / Services",   sharesMillions: 0, freeFloatPct: 25, weightPct: 12.77 },
  { ticker: "POSI", name: "Positive Technologies",  subIndustry: "Cybersecurity",         sharesMillions: 0, freeFloatPct: 18, weightPct:  7.33 },
  { ticker: "VKCO", name: "VK Company",             subIndustry: "Internet platforms",    sharesMillions: 0, freeFloatPct: 15, weightPct:  5.68 },
  { ticker: "ASTR", name: "Astra Group",            subIndustry: "Enterprise software",   sharesMillions: 0, freeFloatPct: 12, weightPct:  4.37 },
  { ticker: "SOFL", name: "Softline",               subIndustry: "IT services",           sharesMillions: 0, freeFloatPct: 10, weightPct:  4.25 },
  { ticker: "DIAS", name: "Diasoft",                subIndustry: "Enterprise software",   sharesMillions: 0, freeFloatPct:  8, weightPct:  3.63 },
  { ticker: "CNRU", name: "CIAN",                   subIndustry: "Internet / Marketplace", sharesMillions: 0, freeFloatPct:  7, weightPct:  2.54 },
  { ticker: "IVAT", name: "IVA Technologies",       subIndustry: "Enterprise software",   sharesMillions: 0, freeFloatPct:  6, weightPct:  0.82 },
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
