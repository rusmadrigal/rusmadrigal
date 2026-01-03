// app/insights/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/app/components/home/header/Header";
import InsightsIndexClient from "@/app/components/insights/InsightsIndexClient";

import { sanityClient } from "@/lib/sanity.client";
import { INSIGHTS_INDEX_QUERY } from "@/lib/queries/insight";

const SITE_URL = "https://rusmadrigal.com";
export const revalidate = 3600;

// ---------- Types ----------
type InsightListItem = {
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

// ---------- Helpers ----------
function absUrl(path: string) {
  return `${SITE_URL}${path}`;
}

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ---------- Metadata ----------
export const metadata: Metadata = {
  title: "Insights",
  description:
    "Análisis y notas prácticas sobre SEO técnico, rendimiento web, analítica y desarrollo.",
  alternates: { canonical: absUrl("/insights") },
};

// ---------- Page ----------
export default async function InsightsPage() {
  const insights = await sanityClient.fetch<InsightListItem[]>(INSIGHTS_INDEX_QUERY);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: absUrl("/") },
      { "@type": "ListItem", position: 2, name: "Insights", item: absUrl("/insights") },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Insights",
    url: absUrl("/insights"),
    mainEntity: insights.map((i) => ({
      "@type": "Article",
      headline: i.title,
      url: absUrl(`/insights/${i.slug}`),
      datePublished: i.publishedAt,
      image: i.coverImage?.asset?.url,
      description: i.excerpt,
    })),
  };

  return (
    <div className="min-h-screen bg-[#fbfbf6] text-slate-900">
      <Header />

      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={collectionJsonLd} />

      <main className="mx-auto max-w-7xl px-6 pb-20">
        {/* Hero */}
        <section className="py-14">
          <div className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Inicio
            </Link>{" "}
            / <span className="text-slate-700">Insights</span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
            Insights sobre SEO, rendimiento y desarrollo web
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-7 text-slate-700">
            Artículos editoriales enfocados en ejecución técnica, impacto real y toma de decisiones
            basada en datos.
          </p>
        </section>

        {/* Client grid */}
        <InsightsIndexClient insights={insights} />
      </main>
    </div>
  );
}
