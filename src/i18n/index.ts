// src/i18n/index.ts
// Single import point for all pages and components.
// PUBLIC_LANG is statically inlined by Vite at build time — dead-code
// branches are tree-shaken, so each build ships only one language.
import { en } from "./en";
import { ru } from "./ru";

export type Lang = "en" | "ru";

export function getLang(): Lang {
  return import.meta.env.PUBLIC_LANG === "ru" ? "ru" : "en";
}

export const t = getLang() === "ru" ? ru : en;
