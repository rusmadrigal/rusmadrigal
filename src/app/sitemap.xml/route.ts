// app/sitemap.xml/route.ts
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

export async function GET() {
  const base = siteUrl();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${xmlEscape(`${base}/sitemap-pages.xml`)}</loc></sitemap>
  <sitemap><loc>${xmlEscape(`${base}/sitemap-insights.xml`)}</loc></sitemap>
  <sitemap><loc>${xmlEscape(`${base}/sitemap-looker-templates.xml`)}</loc></sitemap>
</sitemapindex>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
