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
      // <html> carries `light` or `dark`, so key the themes off that.
      themeCssSelector: (theme) => `.${theme.type}`,
      // Everforest keeps syntax in the same sage/earth family as the palette.
      themes: ["everforest-dark", "everforest-light"],
      styleOverrides: {
        // Surfaces come from the site's own tokens so code blocks sit inside
        // the design instead of importing a second palette.
        borderColor: "var(--line)",
        borderWidth: "1px",
        borderRadius: "0.9rem",
        codeBackground: "var(--paper-raised)",
        codeFontFamily: "var(--font-mono)",
        codeFontSize: "0.85rem",
        codeLineHeight: "1.7",
        codePaddingBlock: "1rem",
        codePaddingInline: "1.15rem",
        uiFontFamily: "var(--font-mono)",
        uiFontSize: "0.75rem",
        frames: {
          editorTabBarBackground:
            "color-mix(in oklab, var(--ink) 4%, transparent)",
          editorActiveTabBackground: "var(--paper-raised)",
          editorActiveTabIndicatorTopColor: "var(--clay)",
          editorActiveTabIndicatorBottomColor: "transparent",
          editorActiveTabBorderColor: "var(--line)",
          editorTabBarBorderBottomColor: "var(--line)",
          terminalBackground: "var(--paper-raised)",
          terminalTitlebarBackground:
            "color-mix(in oklab, var(--ink) 4%, transparent)",
          terminalTitlebarBorderBottomColor: "var(--line)",
          shadowColor: "transparent",
        },
        // Everforest's own marker colours are blue/green/red, which fight the
        // warm palette. Re-tint them to clay / sage / rust.
        textMarkers: {
          markBackground: "color-mix(in oklab, var(--clay) 11%, transparent)",
          markBorderColor: "color-mix(in oklab, var(--clay) 45%, transparent)",
          insBackground: "color-mix(in oklab, var(--sage) 14%, transparent)",
          insBorderColor: "color-mix(in oklab, var(--sage) 50%, transparent)",
          delBackground: "color-mix(in oklab, var(--rust) 11%, transparent)",
          delBorderColor: "color-mix(in oklab, var(--rust) 45%, transparent)",
        },
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
