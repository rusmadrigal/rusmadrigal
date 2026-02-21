import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity.client";

/* ========= Types ========= */
type InsightHomeItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  category?: string | null;
  publishedAt?: string | null;
  coverImage?: {
    asset?: { url?: string | null } | null;
    alt?: string | null;
  } | null;
};

/* ========= Query ========= */
const INSIGHTS_HOME_QUERY = `
*[_type == "insight"] | order(publishedAt desc, _createdAt desc)[0...3]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  coverImage{
    asset->{ url },
    alt
  }
}
`;

/* ========= Helpers ========= */
function formatDate(date?: string | null) {
  if (!date) return null;
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return null;

  return d.toLocaleDateString("es-CR", {
    year: "numeric",
    month: "short",
  });
}

function prettyCategory(value?: string | null) {
  if (!value) return null;
  const map: Record<string, string> = {
    seo: "SEO",
    performance: "Rendimiento Web",
    analytics: "Analítica",
    "ai-search": "IA & Búsqueda",
  };
  return map[value] ?? value;
}

/* ========= Component ========= */
export default async function SEOInsightsSection() {
  const insights = await sanityClient.fetch<InsightHomeItem[]>(INSIGHTS_HOME_QUERY);
  if (!insights?.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <header className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Insights de SEO y análisis técnico
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
          Auditorías reales, patrones de fallos comunes y mejoras aplicables sobre SEO técnico,
          rendimiento web y arquitectura para buscadores y agentes de IA.
        </p>
      </header>

      {/* Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {insights.map((item, index) => {
          const href = `/insights/${item.slug}`;
          const img = item.coverImage?.asset?.url ?? null;
          const alt = item.coverImage?.alt || item.title;
          const date = formatDate(item.publishedAt);
          const cat = prettyCategory(item.category);

          return (
            <Link
              key={item._id}
              href={href}
              aria-label={`Leer: ${item.title}`}
              className="
                group block overflow-hidden rounded-2xl bg-white
                ring-1 ring-slate-200/70 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md hover:ring-slate-300
              "
            >
              {/* Media */}
              <div className="relative h-52 w-full">
                {img ? (
                  <Image
                    src={img}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    priority={index === 0}
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200" />
                )}

                {/* Overlay editorial */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* Badges */}
                <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
                  {cat ? (
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
                      {cat}
                    </span>
                  ) : null}

                  {date ? (
                    <span className="rounded-full bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      {date}
                    </span>
                  ) : null}
                </div>
              </div>

              {/* Body */}
              <div className="flex min-h-[190px] flex-col p-6">
                {/* Title */}
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-slate-700">
                  {item.title}
                </h3>

                {/* Excerpt */}
                {item.excerpt ? (
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {item.excerpt}
                  </p>
                ) : (
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Leer el análisis completo →
                  </p>
                )}

                {/* CTA */}
                <div className="mt-auto pt-5 text-sm font-medium text-slate-900">
                  Leer análisis →
                </div>
              </div>

              {/* Accent line */}
              <div className="pointer-events-none h-1 bg-gradient-to-r from-slate-900/0 via-slate-900/15 to-slate-900/0" />
            </Link>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="mt-14 text-center">
        <Link
          href="/insights"
          className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Ver todos los insights →
        </Link>
      </div>
    </section>
  );
}
