import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import { SITE_TITLE, SITE_DESCRIPTION } from "@/consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    description: SITE_DESCRIPTION,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
    site: context.site,
    title: SITE_TITLE,
  });
}
