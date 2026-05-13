// src/content/config.ts
// Content collections schema. This gives type safety on frontmatter
// and lets us query content like a database.
import { defineCollection, z } from "astro:content";

const indices = defineCollection({
  type: "content",
  schema: z.object({
    ticker: z.string(),
    name: z.string(),
    tagline: z.string(),
    version: z.string(),
    versionDate: z.string(),
    inceptionDate: z.string(),
    baseValue: z.number().default(1000),
    weightingScheme: z.enum([
      "free-float-market-cap",
      "square-root-free-float-market-cap",
      "equal-weight",
    ]),
    rebalanceFrequency: z.enum(["quarterly", "semi-annual", "annual"]),
    currency: z.string().default("RUB"),
    order: z.number().default(99),
  }),
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tag: z.enum(["Methodology", "Weighting", "Data", "Markets", "Portfolio"]),
    readMinutes: z.number().default(5),
    draft: z.boolean().default(false),
  }),
});

export const collections = { indices, notes };
