/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_LANG: "en" | "ru";
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}