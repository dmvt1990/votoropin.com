// src/data/rdix-constituents.ts
// Constituents of RDIX as of the latest annual reconstitution (backtest-derived).
// EN + RU names/sub-industry; RU shown on the Russian site.

import type { Constituent } from "./rhix-constituents";

export const RDIX_AS_OF = "2026-06-25";

export const RDIX_CONSTITUENTS: Constituent[] = [
  { ticker: "NLMK", name: "NLMK", nameRu: "НЛМК", subIndustry: "Materials", subIndustryRu: "Металлургия", sharesMillions: 0, freeFloatPct: 0, weightPct: 10.00 },
  { ticker: "PHOR", name: "PhosAgro", nameRu: "ФосАгро", subIndustry: "Materials", subIndustryRu: "Химия и удобрения", sharesMillions: 0, freeFloatPct: 0, weightPct: 8.46 },
  { ticker: "MOEX", name: "Moscow Exchange", nameRu: "Московская биржа", subIndustry: "Financials", subIndustryRu: "Финансы", sharesMillions: 0, freeFloatPct: 0, weightPct: 8.00 },
  { ticker: "IRAO", name: "Inter RAO", nameRu: "Интер РАО", subIndustry: "Utilities", subIndustryRu: "Электроэнергетика", sharesMillions: 0, freeFloatPct: 0, weightPct: 7.88 },
  { ticker: "NMTP", name: "Novorossiysk Sea Port", nameRu: "НМТП", subIndustry: "Transport", subIndustryRu: "Транспорт", sharesMillions: 0, freeFloatPct: 0, weightPct: 7.83 },
  { ticker: "CHMF", name: "Severstal", nameRu: "Северсталь", subIndustry: "Materials", subIndustryRu: "Металлургия", sharesMillions: 0, freeFloatPct: 0, weightPct: 7.37 },
  { ticker: "MAGN", name: "MMK", nameRu: "ММК", subIndustry: "Materials", subIndustryRu: "Металлургия", sharesMillions: 0, freeFloatPct: 0, weightPct: 7.27 },
  { ticker: "ROSN", name: "Rosneft", nameRu: "Роснефть", subIndustry: "Energy", subIndustryRu: "Нефть и газ", sharesMillions: 0, freeFloatPct: 0, weightPct: 6.57 },
  { ticker: "SNGSP", name: "Surgutneftegas (pref)", nameRu: "Сургутнефтегаз (прив.)", subIndustry: "Energy", subIndustryRu: "Нефть и газ", sharesMillions: 0, freeFloatPct: 0, weightPct: 6.46 },
  { ticker: "FLOT", name: "Sovcomflot", nameRu: "Совкомфлот", subIndustry: "Transport", subIndustryRu: "Транспорт", sharesMillions: 0, freeFloatPct: 0, weightPct: 4.72 },
  { ticker: "MRKC", name: "Rosseti Centre", nameRu: "Россети Центр", subIndustry: "Utilities", subIndustryRu: "Электроэнергетика", sharesMillions: 0, freeFloatPct: 0, weightPct: 4.40 },
  { ticker: "MGNT", name: "Magnit", nameRu: "Магнит", subIndustry: "Consumer Staples", subIndustryRu: "Потребительский сектор", sharesMillions: 0, freeFloatPct: 0, weightPct: 4.19 },
  { ticker: "RTKM", name: "Rostelecom", nameRu: "Ростелеком", subIndustry: "Telecom", subIndustryRu: "Телекоммуникации", sharesMillions: 0, freeFloatPct: 0, weightPct: 3.59 },
  { ticker: "SBER", name: "Sberbank", nameRu: "Сбербанк", subIndustry: "Financials", subIndustryRu: "Финансы", sharesMillions: 0, freeFloatPct: 0, weightPct: 3.52 },
  { ticker: "SIBN", name: "Gazprom Neft", nameRu: "Газпром нефть", subIndustry: "Energy", subIndustryRu: "Нефть и газ", sharesMillions: 0, freeFloatPct: 0, weightPct: 2.99 },
  { ticker: "TRMK", name: "TMK", nameRu: "ТМК", subIndustry: "Materials", subIndustryRu: "Металлургия", sharesMillions: 0, freeFloatPct: 0, weightPct: 1.91 },
  { ticker: "HYDR", name: "RusHydro", nameRu: "РусГидро", subIndustry: "Utilities", subIndustryRu: "Электроэнергетика", sharesMillions: 0, freeFloatPct: 0, weightPct: 1.84 },
  { ticker: "ALRS", name: "Alrosa", nameRu: "Алроса", subIndustry: "Materials", subIndustryRu: "Металлы и добыча", sharesMillions: 0, freeFloatPct: 0, weightPct: 1.51 },
  { ticker: "LSRG", name: "LSR Group", nameRu: "Группа ЛСР", subIndustry: "Real Estate", subIndustryRu: "Строительство", sharesMillions: 0, freeFloatPct: 0, weightPct: 1.48 },
];

// Realized dividend yield by year (backtest; full years only, 2018 & 2026 partial excluded).
export const RDIX_DIV_YIELD: { year: string; gross: number; net: number }[] = [
  { year: "2019", gross: 9.2, net: 7.8 },
  { year: "2020", gross: 7.1, net: 6.0 },
  { year: "2021", gross: 6.2, net: 5.3 },
  { year: "2022", gross: 12.1, net: 10.3 },
  { year: "2023", gross: 6.0, net: 5.1 },
  { year: "2024", gross: 8.0, net: 6.8 },
  { year: "2025", gross: 7.5, net: 6.3 },
];
export const RDIX_DIV_YIELD_AVG = { gross: 8.0, net: 6.8 };
