import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";

import { createOgImage } from "../components/OGImage";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const params = new URL(request.url).searchParams;
  const title = params.get("title") ?? undefined;
  const description = params.get("description") ?? undefined;

  try {
    const regularFont = await fetch(
      "https://samrith.dev/fonts/red-hat-text/regular.ttf"
    ).then((res) => res.arrayBuffer());

    const boldFont = await fetch(
      "https://samrith.dev/fonts/red-hat-text/bold.ttf"
    ).then((res) => res.arrayBuffer());

    const res = new ImageResponse(createOgImage(title, description), {
      fonts: [
        {
          name: "redhattext",
          data: regularFont,
          weight: 400,
          style: "normal",
        },
        {
          name: "redhattext",
          data: boldFont,
          weight: 900,
          style: "normal",
        },
      ],
      height: 640,
      width: 1024,
    });

    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
