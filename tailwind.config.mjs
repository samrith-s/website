/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    {
      pattern:
        /(bg|text|from|to|via|shadow|border)-(summer|monsoon|winter)(\/\d{2,3})*/,
    },
    {
      pattern: /(bg|text|from|to|via|shadow|border)-season(\/\d{2,3})*/,
    },
    {
      pattern: /(bg|text|from|to|via)-season-bg(\/\d{2,3})*/,
    },
    {
      pattern: /(bg|text|from|to|via)-season-text(\/\d{2,3})*/,
    },
  ],
  theme: {
    extend: {
      colors: {
        season: "rgba(var(--season-primary), <alpha-value>)",
        "season-bg": "rgba(var(--season-bg), <alpha-value>)",
        "season-text": "rgba(var(--season-text), <alpha-value>)",
        summer: "rgba(var(--season-summer-primary), <alpha-value>)",
        monsoon: "rgba(var(--season-monsoon-primary), <alpha-value>)",
        winter: "rgba(var(--season-winter-primary), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
