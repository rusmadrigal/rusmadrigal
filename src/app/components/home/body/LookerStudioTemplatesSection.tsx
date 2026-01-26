import Link from "next/link";
import { ExternalLink, BarChart3 } from "lucide-react";

import { sanityClient } from "@/lib/sanity.client";

type LookerTemplate = {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  heroImage?: {
    asset?: { url: string };
    alt?: string;
  };
};

const LOOKER_TEMPLATES_HOME_QUERY = `
*[_type == "lookerTemplate"] | order(publishedAt desc)[0...3]{
  title,
  excerpt,
  "slug": slug.current,
  category,
  heroImage{
    asset->{ url },
    alt
  }
}
`;

function prettyCategory(value: string) {
  const map: Record<string, string> = {
    seo: "SEO",
    performance: "Web Performance",
    analytics: "Analytics",
    content: "Content",
  };
  return map[value] ?? value;
}

export default async function LookerStudioTemplatesSection() {
  const templates: LookerTemplate[] = await sanityClient.fetch(LOOKER_TEMPLATES_HOME_QUERY);

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <header className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Plantillas de Looker Studio
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
          Plantillas profesionales de Looker Studio para análisis SEO, rendimiento web y reporting
          técnico. Listas para duplicar y usar.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {templates.map((t) => (
          <article
            key={t.slug}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            {/* Preview visual (imagen real si existe) */}
            {t.heroImage?.asset?.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={t.heroImage.asset.url}
                alt={t.heroImage.alt || t.title}
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex aspect-[16/10] items-center justify-center bg-slate-100 text-slate-400">
                <BarChart3 className="h-10 w-10" />
              </div>
            )}

            <div className="p-5">
              <span className="inline-block rounded-full bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-600">
                {prettyCategory(t.category)}
              </span>

              <h3 className="mt-3 font-semibold leading-snug text-slate-900">{t.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">{t.excerpt}</p>

              <Link
                href={`/looker-studio/${t.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:no-underline"
              >
                Ver plantilla
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* CTA a la página hub */}
      <div className="mt-14 text-center">
        <Link
          href="/looker-studio"
          className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          Ver todas las plantillas
        </Link>
      </div>
    </section>
  );
}
