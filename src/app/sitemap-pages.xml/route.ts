// app/sitemap-pages.xml/route.ts
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

function isoDate(d = new Date()) {
  return d.toISOString();
}

export async function GET() {
  const base = siteUrl();

  // Ajustá esta lista a tu routing real.
  // Nota: si "/" ya es tu home, probablemente NO necesitás "/home".
  const pages = [
    "/", // home real
    "/seo",
    "/insights", // listado (si existe como page)
    "/looker-templates", // listado (si existe como page)
    // "/looker-studio", // solo si existe esa ruta
  ];

  const now = isoDate();

  const urlset = pages
    .map((path) => {
      const loc = `${base}${path === "/" ? "" : path}`;
      return `
  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${xmlEscape(now)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.8"}</priority>
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
