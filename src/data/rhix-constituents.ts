// src/data/rhix-constituents.ts
// Constituents of RHIX as of latest rebalancing. To update at each
// rebalancing: edit the values below and commit.

export type Constituent = {
  ticker: string;
  name: string;
  nameRu?: string;
  subIndustry: string;
  subIndustryRu?: string;
  sharesMillions: number;
  freeFloatPct: number;     // 0–100
  weightPct: number;        // 0–100
};

export const RHIX_AS_OF = "2026-03-31";

export const RHIX_CONSTITUENTS: Constituent[] = [
  {
    ticker: "OZPH",
    name: "Ozon Pharmaceuticals",
    subIndustry: "Pharmaceuticals",
    subIndustryRu: "Фармацевтика",
    sharesMillions: 450.0,
    freeFloatPct: 30,
    weightPct: 31.4,
  },
  {
    ticker: "MDMG",
    name: "MD Medical Group",
    subIndustry: "HC Providers & Services",
    subIndustryRu: "Поставщики медицинских услуг",
    sharesMillions: 67.7,
    freeFloatPct: 22,
    weightPct: 22.6,
  },
  {
    ticker: "GEMC",
    name: "European Medical Center",
    subIndustry: "HC Providers & Services",
    subIndustryRu: "Поставщики медицинских услуг",
    sharesMillions: 65.6,
    freeFloatPct: 25,
    weightPct: 19.1,
  },
  {
    ticker: "PRMD",
    name: "Promomed",
    subIndustry: "Pharmaceuticals / Biotech",
    subIndustryRu: "Фармацевтика / биотехнологии",
    sharesMillions: 212.5,
    freeFloatPct: 15,
    weightPct: 15.8,
  },
  {
    ticker: "ABIO",
    name: "Artgen Biotech",
    subIndustry: "Biotechnology",
    subIndustryRu: "Биотехнологии",
    sharesMillions: 92.6,
    freeFloatPct: 20,
    weightPct: 11.1,
  },
];
