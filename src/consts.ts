export const SITE_TITLE = "Samrith Shankar";
export const SITE_SUBLINE = "Tinkering with AI and dev tooling.";
export const SITE_DESCRIPTION =
  "Samrith Shankar is a prominent fullstack developer and engineering leader. He is the creator of the MCP framework Hyperterse. He also provides advice and mentorship to startups.";

export enum Modes {
  LIGHT = "light",
  DARK = "dark",
}

export const SOCIALS = [
  {
    label: "Twitter",
    href: "https://x.com/samrithshankar",
    handle: "@samrithshankar",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/samrith",
    handle: "in/samrith",
  },
  {
    label: "GitHub",
    href: "https://github.com/samrith-s",
    handle: "samrith-s",
  },
] as const;

export const NOW = {
  label: "Currently",
  text: "Building Mitra",
  href: "https://mitra.run",
} as const;
