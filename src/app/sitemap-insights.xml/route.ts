// app/sitemap-insights.xml/route.ts
import { sanityClient } from "@/lib/sanity.client";

export const revalidate = 86400; // 24h

function siteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://www.rusmadrigal.com"
  ).replace(/\/$/, "");
}

function xmlEscape(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

type InsightSitemapRow = {
  slug: string;
  canonicalPath?: string | null;
  updatedAt?: string | null;
  publishedAt?: string | null;
  noIndex?: boolean | null;
};

const INSIGHTS_SITEMAP_QUERY = `
*[
  _type == "insight" &&
  defined(slug.current) &&
  !(seo.noIndex == true)
] | order(coalesce(_updatedAt, publishedAt) desc) {
  "slug": slug.current,
  "canonicalPath": seo.canonicalPath,
  "updatedAt": _updatedAt,
  "publishedAt": publishedAt
}
`;

export async function GET() {
  const base = siteUrl();

  const rows: InsightSitemapRow[] = await sanityClient.fetch(INSIGHTS_SITEMAP_QUERY);

  const urlset = rows
    .map((r) => {
      const path = (r.canonicalPath && r.canonicalPath.trim()) || `/insights/${r.slug}`;
      const loc =
        path.startsWith("http://") || path.startsWith("https://")
          ? path
          : `${base}${path.startsWith("/") ? "" : "/"}${path}`;

      const lastmod = r.updatedAt || r.publishedAt || new Date().toISOString();

      return `
  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${xmlEscape(lastmod)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
