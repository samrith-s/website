import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import tailwind from "@tailwindcss/vite";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";

const SITE = "https://samrith.dev";

export default defineConfig({
  adapter: vercel({
    edgeMiddleware: true,
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    expressiveCode({
      themeCssSelector: (theme) => `.${theme.type}`,
      themes: ["vesper", "one-light"],
      styleOverrides: {
        borderWidth: "0.1px",
      },
      frames: {
        extractFileNameFromCode: false,
        removeCommentsWhenCopyingTerminalFrames: true,
        showCopyToClipboardButton: true,
      },
      plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
    }),
    mdx({
      extendMarkdownConfig: true,
    }),
    sitemap({
      changefreq: "daily",
      filter: (page) =>
        page !== `${SITE}/404` && page !== `${SITE}/blog/dummy/`,
    }),
    react(),
  ],
  output: "static",
  site: SITE,
  vite: {
    plugins: [tailwind()],
  },
});
