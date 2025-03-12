// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  devToolbar: {
    enabled: false,
  },
  site: "https://inixio-dev.github.io",
  base: "lodeinixio",
});
