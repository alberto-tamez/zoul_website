import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/api/", "/admin/", "/*.json$"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/private/", "/api/", "/admin/"],
      },
    ],
    sitemap: "https://zoul.capital/sitemap.xml",
    host: "https://zoul.capital",
  }
}

