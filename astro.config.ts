import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import expressiveCode from "astro-expressive-code";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://samrith.dev",
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
      themes: ["ayu-dark"],
      frames: {
        extractFileNameFromCode: false,
        removeCommentsWhenCopyingTerminalFrames: true,
        showCopyToClipboardButton: true,
      },
      plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
    }),
    mdx(),
    sitemap(),
    tailwind(),
    react(),
  ],
});
