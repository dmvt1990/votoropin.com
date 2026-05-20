// astro.config.mjs
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

const lang    = process.env.PUBLIC_LANG === "ru" ? "ru" : "en";
const siteUrl = lang === "ru" ? "https://votoropin.ru" : "https://votoropin.com";
const outDir  = process.env.ASTRO_OUT_DIR || "dist";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  outDir,
  build: {
    format: "directory",
  },
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false, // we apply our own base styles via src/styles/global.css
    }),
  ],
  vite: {
    build: {
      chunkSizeWarningLimit: 1200, // echarts is intentionally lazy-loaded
    },
  },
});
