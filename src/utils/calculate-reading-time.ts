import { fromMarkdown } from "mdast-util-from-markdown";
import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

export function calculateReadingTime(text: string): string | undefined {
  if (!text || !text.length) {
    return undefined;
  }

  try {
    const { minutes } = getReadingTime(toString(fromMarkdown(text)));

    if (minutes && minutes > 0) {
      const isPlural = minutes > 1;
      return `${Math.ceil(minutes)} ${isPlural ? "min" : "min"} read`;
    }
    return undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
