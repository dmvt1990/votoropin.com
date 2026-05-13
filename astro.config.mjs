// astro.config.mjs
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://votoropin.com",
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
