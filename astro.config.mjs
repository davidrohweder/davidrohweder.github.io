// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Custom domain (CNAME -> davidrohweder.com). Served from the site root,
// so no `base` path is needed. `site` powers canonical URLs + sitemap.
export default defineConfig({
  site: "https://davidrohweder.com",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
});
