import { defineConfig } from "oxlint";
import astro from "ultracite/oxlint/astro";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";

export default defineConfig({
  extends: [core, astro, react],
  ignorePatterns: core.ignorePatterns,
  rules: {
    // This repo names components PascalCase (matching the .astro components)
    // and declares them as function declarations. Purely stylistic.
    "unicorn/filename-case": "off",
    "func-style": "off",
    "react/function-component-definition": "off",
    // Noisy on the Tailwind safelist regexes and prop-order-significant objects.
    "sort-keys": "off",
    "prefer-named-capture-group": "off",
    "require-unicode-regexp": "off",
    // This repo declares object shapes as `type`, not `interface`.
    "typescript/consistent-type-definitions": ["error", "type"],
  },
});
