// app/looker-studio/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/app/components/home/header/Header";

import { sanityClient } from "@/lib/sanity.client";

const SITE_URL = "https://rusmadrigal.com"; // <-- cambiar si aplica

// ---------- Types ----------
type LookerTemplateCard = {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    heroImage?: {
        asset?: { url: string };
        alt?: string;
    };
    sidebar?: {
        difficulty?: "beginner" | "intermediate" | "advanced";
        estimatedSetupTime?: string;
    };
};

// ---------- GROQ ----------
const LOOKER_TEMPLATES_LIST_QUERY = `
*[_type == "lookerTemplate"] | order(publishedAt desc){
  "slug": slug.current,
  title,
  excerpt,
  category,
  heroImage{
    asset->{ url },
    alt
  },
  sidebar{
    difficulty,
    estimatedSetupTime
  }
}
`;

// ---------- Helpers ----------
function prettyCategory(value: string) {
    const map: Record<string, string> = {
        seo: "SEO",
        performance: "Web Performance",
        analytics: "Analytics",
        content: "Content",
    };
    return map[value] ?? value;
}

function prettyDifficulty(value?: string) {
    const map: Record<string, string> = {
        beginner: "Principiante",
        intermediate: "Intermedio",
        advanced: "Avanzado",
    };
    return value ? map[value] ?? value : null;
}

// ---------- SEO ----------
export const metadata: Metadata = {
    title: "Plantillas de Looker Studio para SEO y Analytics",
    description:
        "Colección de plantillas de Looker Studio listas para copiar y usar, enfocadas en SEO, Web Performance y Analytics.",
    alternates: {
        canonical: `${SITE_URL}/looker-studio`,
    },
    openGraph: {
        type: "website",
        title: "Plantillas de Looker Studio",
        description:
            "Dashboards de Looker Studio listos para usar, pensados para equipos técnicos.",
        url: `${SITE_URL}/looker-studio`,
    },
};

// ---------- Page ----------
export default async function LookerStudioHome() {
    const templates: LookerTemplateCard[] = await sanityClient.fetch(
        LOOKER_TEMPLATES_LIST_QUERY
    );

    return (
        <div className="min-h-screen bg-[#fbfbf6] text-slate-900">
            <Header />

            <main className="mx-auto max-w-6xl px-6 pb-16">
                {/* Hero */}
                <section className="py-14">
                    <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                        Plantillas de Looker Studio
                    </h1>

                    <p className="mt-4 max-w-3xl text-lg leading-7 text-slate-700">
                        Dashboards listos para copiar y usar, diseñados para SEO, Web
                        Performance y Analytics. Pensados para analistas y equipos técnicos.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="#templates"
                            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm text-white hover:bg-slate-800"
                        >
                            Ver plantillas
                        </a>

                        <Link
                            href="/#contact"
                            className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                        >
                            Plantilla a medida
                        </Link>
                    </div>
                </section>

                {/* Filters (visual only for now) */}
                <section className="mb-8">
                    <div className="flex flex-wrap gap-2 text-sm">
                        {["SEO", "Web Performance", "Analytics", "Content"].map((x) => (
                            <span
                                key={x}
                                className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-slate-700"
                            >
                                {x}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Templates grid */}
                <section id="templates" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {templates.map((t) => (
                        <Link
                            key={t.slug}
                            href={`/looker-studio/${t.slug}`}
                            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 hover:shadow-md"
                        >
                            {/* Image */}
                            {t.heroImage?.asset?.url ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={t.heroImage.asset.url}
                                    alt={t.heroImage.alt || t.title}
                                    className="h-40 w-full object-cover"
                                />
                            ) : (
                                <div className="flex h-40 items-center justify-center bg-slate-100 text-sm text-slate-400">
                                    Looker Studio
                                </div>
                            )}

                            {/* Card body */}
                            <div className="p-5">
                                <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                                    {prettyCategory(t.category)}
                                </div>

                                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                                    {t.title}
                                </h3>

                                <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                                    {t.excerpt}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
                                    {prettyDifficulty(t.sidebar?.difficulty) ? (
                                        <span>{prettyDifficulty(t.sidebar?.difficulty)}</span>
                                    ) : null}

                                    {t.sidebar?.estimatedSetupTime ? (
                                        <span>• {t.sidebar.estimatedSetupTime}</span>
                                    ) : null}
                                </div>

                                <div className="mt-4 text-sm font-medium text-slate-700">
                                    Abrir plantilla →
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>

                {/* Empty state */}
                {!templates.length ? (
                    <div className="mt-10 rounded-2xl bg-white p-8 text-center text-slate-600 shadow-sm">
                        Aún no hay plantillas publicadas.
                    </div>
                ) : null}

                {/* How it works */}
                <section className="mt-16 rounded-2xl bg-white p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                        Cómo usar estas plantillas
                    </h2>

                    <ol className="mt-6 grid gap-4 md:grid-cols-4 text-sm text-slate-700">
                        <li>
                            <strong>1.</strong> Abre la plantilla
                        </li>
                        <li>
                            <strong>2.</strong> Haz una copia
                        </li>
                        <li>
                            <strong>3.</strong> Conecta tus datos
                        </li>
                        <li>
                            <strong>4.</strong> Ajusta filtros y métricas
                        </li>
                    </ol>
                </section>

                {/* CTA */}

            </main>
        </div>
    );
}
