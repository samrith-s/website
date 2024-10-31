import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";
import type { RemarkPlugin } from "@astrojs/markdown-remark";

export function remarkReadingTime() {
  const plugin: any = function plugin(tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.readingTime = readingTime.text;

    console.log("#### frontmatter -> reading time", data.astro.frontmatter);
  };

  return plugin;
}
