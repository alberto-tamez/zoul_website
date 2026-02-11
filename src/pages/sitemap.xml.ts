import type { APIRoute } from "astro";

const routes = ["/", "/contact", "/careers", "/privacy-policy", "/terms-of-service"];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString();
  const urls = routes
    .map(
      (route) => `<url><loc>https://zoul.capital${route}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq></url>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
