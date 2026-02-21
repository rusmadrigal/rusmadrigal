import Link from "next/link";

type RelatedInsight = {
  slug: string;
  title: string;
  category: string;
  coverImage?: {
    asset?: { url: string };
    alt?: string;
  };
};

function prettyCategory(value: string) {
  const map: Record<string, string> = {
    seo: "SEO",
    performance: "Web Performance",
    analytics: "Analytics",
    "ai-search": "AI & Search",
  };
  return map[value] ?? value;
}

export default function RelatedInsights({ items }: { items: RelatedInsight[] }) {
  if (!items?.length) return null;

  return (
    <section className="mt-10">
      <div className="flex items-end justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">Más insights SEO</h3>
        <Link href="/#insights" className="text-sm text-slate-600 hover:text-slate-900">
          Ver todos →
        </Link>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {items.map((r) => {
          const img = r.coverImage?.asset?.url;
          const alt = r.coverImage?.alt || r.title;

          return (
            <Link
              key={r.slug}
              href={`/insights/${r.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Media */}
              {img ? (
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={alt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                  <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs text-slate-800 ring-1 ring-black/5">
                    {prettyCategory(r.category)}
                  </div>
                </div>
              ) : (
                <div className="p-5 pb-0">
                  <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                    {prettyCategory(r.category)}
                  </div>
                </div>
              )}

              {/* Body */}
              <div className="p-5">
                <div className="text-base font-semibold text-slate-900 group-hover:underline">
                  {r.title}
                </div>
                <div className="mt-3 text-sm text-slate-600">Leer →</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
