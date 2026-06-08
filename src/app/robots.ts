import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://amito.dev";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/v1/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
