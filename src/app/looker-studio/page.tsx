// app/looker-studio/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/app/components/home/header/Header";
import { sanityClient } from "@/lib/sanity.client";

import TemplatesGrid from "./TemplatesGrid";

const SITE_URL = "https://rusmadrigal.com"; // <-- cambiar si aplica

type LookerTemplateCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  heroImage?: { asset?: { url: string }; alt?: string };
  sidebar?: {
    difficulty?: "beginner" | "intermediate" | "advanced";
    estimatedSetupTime?: string;
  };
};

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
    description: "Dashboards listos para usar, pensados para equipos técnicos.",
    url: `${SITE_URL}/looker-studio`,
  },
};

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
            Dashboards listos para copiar y usar, diseñados para SEO, Web Performance y Analytics.
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

        {/* Grid + filtros (client) */}
        <TemplatesGrid templates={templates} />

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

        {/* Empty state global (si no hay nada) */}
        {!templates.length ? (
          <div className="mt-10 rounded-2xl bg-white p-8 text-center text-slate-600 shadow-sm">
            Aún no hay plantillas publicadas.
          </div>
        ) : null}
      </main>
    </div>
  );
}
