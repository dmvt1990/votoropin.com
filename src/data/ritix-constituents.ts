// src/data/ritix-constituents.ts
// Constituents of RITIX as of the last quarterly rebalancing.
// Source: 2026-07-01 Q3 rebalance; weights from the production methodology.py
// sqrt(ff_mcap) basis at Jul-1 prices. No membership change from Q2.
// Free-float coefficients are MOEX's published values as at 29.07.2026, applied
// in the 2026-07-29 correction. Re-read MOEX's table at every quarterly rebalance.

import type { Constituent } from "./rhix-constituents";

export const RITIX_AS_OF = "2026-07-01";

export const RITIX_CONSTITUENTS: Constituent[] = [
  { ticker: "YDEX", name: "Yandex (MKPAO)",         subIndustry: "Internet / Software",  sharesMillions: 0, freeFloatPct: 26, weightPct: 32.31 },
  { ticker: "OZON", name: "Ozon Holdings",          subIndustry: "Internet / E-commerce", sharesMillions: 0, freeFloatPct: 26, weightPct: 23.07 },
  { ticker: "HEAD", name: "HeadHunter (MKPAO)",     subIndustry: "Internet / Services",   sharesMillions: 0, freeFloatPct: 53, weightPct: 13.58 },
  { ticker: "VKCO", name: "VK Company",             subIndustry: "Internet Platforms",    sharesMillions: 0, freeFloatPct: 20, weightPct: 7.68 },
  { ticker: "CNRU", name: "CIAN",                   subIndustry: "Internet / Marketplace", sharesMillions: 0, freeFloatPct: 40, weightPct: 6.49 },
  { ticker: "POSI", name: "Positive Technologies",  subIndustry: "Cybersecurity",         sharesMillions: 0, freeFloatPct: 24, weightPct: 6.24 },
  { ticker: "ASTR", name: "Astra Group",            subIndustry: "Enterprise Software",   sharesMillions: 0, freeFloatPct: 17, weightPct: 4.10 },
  { ticker: "SOFL", name: "Softline",               subIndustry: "IT Services",           sharesMillions: 0, freeFloatPct: 19, weightPct: 3.05 },
  { ticker: "DIAS", name: "Diasoft",                subIndustry: "Enterprise Software",   sharesMillions: 0, freeFloatPct: 15, weightPct: 2.15 },
  { ticker: "IVAT", name: "IVA Technologies",       subIndustry: "Enterprise Software",   sharesMillions: 0, freeFloatPct: 11, weightPct: 1.34 },
];

// Editorial sub-sector grouping used by the sub-sector map. This is a
// presentation layer only — the methodology screens a single GICS Information
// Technology universe and knows nothing about sub-sectors. Every constituent
// must appear in exactly one group; unlisted tickers are silently dropped from
// the map, so revisit this list at any reconstitution.
import type { SubSector } from "../components/SubSectorMap.astro";

export const RITIX_SUBSECTORS: SubSector[] = [
  {
    key: "internet",
    name: "Internet platforms & e-commerce",
    nameRu: "Интернет-платформы и e-commerce",
    tickers: ["YDEX", "OZON", "VKCO"],
  },
  {
    key: "classifieds",
    name: "Classifieds & HR-tech",
    nameRu: "Классифайды и HR-tech",
    tickers: ["HEAD", "CNRU"],
  },
  {
    key: "enterprise",
    name: "Enterprise software",
    nameRu: "Корпоративное ПО",
    tickers: ["ASTR", "DIAS", "IVAT"],
  },
  {
    key: "security",
    name: "Cybersecurity",
    nameRu: "Кибербезопасность",
    tickers: ["POSI"],
  },
  {
    key: "services",
    name: "IT services & integration",
    nameRu: "IT-услуги и интеграция",
    tickers: ["SOFL"],
  },
];

// Aggregate performance metrics for calendar 2025, recomputed 2026-07-29 from
// the corrected level series (v1.5 fixed-units + MOEX free-float correction).
// Supersedes the figures carried from the original 2025 performance report,
// which predated both restatements. Update at each report cycle.
export const RITIX_PERFORMANCE_2025 = {
  startDate: "2025-01-03",
  endDate: "2025-12-30",
  startingLevel: 1000.00,
  endingLevel: 955.88,
  periodHigh: 1115.66,
  periodHighDate: "2025-02-25",
  periodLow: 875.55,
  periodLowDate: "2025-10-15",
  totalReturnPct: -4.41,
  annualizedReturnPct: -4.46,
  annualizedVolPct: 23.80,
  sharpe: -1.55,
  maxDrawdownPct: -21.52,
  maxDrawdownDate: "2025-10-15",
  bestDayPct: 4.98,
  bestDayDate: "2025-10-16",
  worstDayPct: -5.26,
  worstDayDate: "2025-04-04",
  tradingDays: 254,
};
