// src/data/rhix-constituents.ts
// Constituents of RHIX as of latest rebalancing. To update at each
// rebalancing: edit the values below and commit.

export type Constituent = {
  ticker: string;
  name: string;
  subIndustry: string;
  sharesMillions: number;
  freeFloatPct: number;     // 0–100
  weightPct: number;        // 0–100
};

export const RHIX_AS_OF = "2026-03-31";

export const RHIX_CONSTITUENTS: Constituent[] = [
  {
    ticker: "OZPH",
    name: "Ozon Pharmaceutica",
    subIndustry: "Pharmaceuticals",
    sharesMillions: 450.0,
    freeFloatPct: 30,
    weightPct: 31.4,
  },
  {
    ticker: "MDMG",
    name: "MD Medical Group",
    subIndustry: "HC Providers & Services",
    sharesMillions: 67.7,
    freeFloatPct: 22,
    weightPct: 22.6,
  },
  {
    ticker: "GEMC",
    name: "European Medical Centre",
    subIndustry: "HC Providers & Services",
    sharesMillions: 65.6,
    freeFloatPct: 25,
    weightPct: 19.1,
  },
  {
    ticker: "PRMD",
    name: "Promomed",
    subIndustry: "Pharmaceuticals / Biotech",
    sharesMillions: 212.5,
    freeFloatPct: 15,
    weightPct: 15.8,
  },
  {
    ticker: "ABIO",
    name: "Artgen Biotech",
    subIndustry: "Biotechnology",
    sharesMillions: 92.6,
    freeFloatPct: 20,
    weightPct: 11.1,
  },
];
