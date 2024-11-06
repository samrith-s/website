import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import expressiveCode from "astro-expressive-code";

import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

const SITE = "https://samrith.dev";

export default defineConfig({
  site: SITE,
  output: "server",
  adapter: vercel({
    edgeMiddleware: true,
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
  markdown: {
    remarkPlugins: [],
  },
  experimental: {
    contentIntellisense: true,
  },
  integrations: [
    expressiveCode({
      themes: ["vesper"],
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
      filter: (page) => page !== `${SITE}/404` && page !== `${SITE}/blog/dummy`,
    }),
    tailwind(),
    react(),
  ],
});
