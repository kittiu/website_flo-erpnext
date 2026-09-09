// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Domain TBD — replace SITE_URL before go-live (also update public/robots.txt & public/llms.txt base URLs)
const SITE_URL = "https://flo-erpnext.example.com";

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "always",
  integrations: [
    sitemap({
      // llms.txt is intentionally excluded? no — include everything; filter nothing.
    }),
  ],
  markdown: {
    shikiConfig: { theme: "github-light" },
  },
});
