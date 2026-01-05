import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/app/components/home/header/Header";
import PortableTextRenderer from "@/app/components/insights/PortableTextRenderer";
import CopyLinkButton from "@/app/components/insights/CopyLinkButton";
import CTASEOSection from "@/app/components/insights/CTASEOSection";

import { sanityClient } from "@/lib/sanity.client";
import {
  LOOKER_TEMPLATE_BY_SLUG_QUERY,
  RELATED_LOOKER_TEMPLATES_QUERY,
} from "@/lib/queries/lookerTemplate";
import { extractToc, type TocItem } from "@/lib/insights/extractToc";

import type { PortableTextBlock } from "@portabletext/types";

const SITE_URL = "https://rusmadrigal.com"; // <-- cambiar

type TemplateSEO = {
  metaTitle?: string;
  metaDescription?: string;
  canonicalPath?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  ogImage?: { asset?: { url: string }; alt?: string };
};

type TemplateSidebar = {
  difficulty?: "beginner" | "intermediate" | "advanced";
  estimatedSetupTime?: string;
  includes?: string[];
  requirements?: string[];
  dataSources?: string[];
  connectors?: string[];
};

type LookerTemplate = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  templateUrl: string;
  demoUrl?: string;
  heroImage?: { asset?: { url: string }; alt?: string; caption?: string };
  sidebar?: TemplateSidebar;
  seo?: TemplateSEO;
  content: PortableTextBlock[];
};

type RelatedTemplate = {
  slug: string;
  title: string;
  category: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

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
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
  };
  return value ? map[value] ?? value : "—";
}

function absUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const doc: LookerTemplate | null = await sanityClient.fetch(
    LOOKER_TEMPLATE_BY_SLUG_QUERY,
    { slug }
  );

  if (!doc) return { title: "Template not found" };

  const seoTitle = doc.seo?.metaTitle?.trim() || doc.title;
  const seoDesc = doc.seo?.metaDescription?.trim() || doc.excerpt;

  const canonicalPath =
    doc.seo?.canonicalPath?.trim() || `/looker-templates/${doc.slug}`;
  const canonical = absUrl(canonicalPath);

  const ogImg =
    doc.seo?.ogImage?.asset?.url || doc.heroImage?.asset?.url || undefined;

  const robots = {
    index: !(doc.seo?.noIndex ?? false),
    follow: !(doc.seo?.noFollow ?? false),
  };

  return {
    title: seoTitle,
    description: seoDesc,
    alternates: { canonical },
    robots,
    openGraph: {
      type: "website",
      url: canonical,
      title: seoTitle,
      description: seoDesc,
      images: ogImg
        ? [
            {
              url: ogImg,
              alt: doc.seo?.ogImage?.alt || doc.heroImage?.alt || seoTitle,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDesc,
      images: ogImg ? [ogImg] : undefined,
    },
  };
}

export default async function LookerTemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const template: LookerTemplate | null = await sanityClient.fetch(
    LOOKER_TEMPLATE_BY_SLUG_QUERY,
    { slug }
  );

  if (!template) notFound();

  const related: RelatedTemplate[] = await sanityClient.fetch(
    RELATED_LOOKER_TEMPLATES_QUERY,
    { slug }
  );

  const toc: TocItem[] = extractToc(template.content);

  const canonicalPath =
    template.seo?.canonicalPath?.trim() || `/looker-templates/${template.slug}`;
  const canonical = absUrl(canonicalPath);

  // JSON-LD: Looker template as CreativeWork (más correcto que Article)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: template.seo?.metaTitle?.trim() || template.title,
    description: template.seo?.metaDescription?.trim() || template.excerpt,
    datePublished: template.publishedAt,
    url: canonical,
    image: template.seo?.ogImage?.asset?.url || template.heroImage?.asset?.url || undefined,
    isBasedOn: template.templateUrl, // referencia al template link
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
      { "@type": "ListItem", position: 2, name: "Looker Templates", item: absUrl("/#templates") },
      {
        "@type": "ListItem",
        position: 3,
        name: prettyCategory(template.category),
        item: canonical,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#fbfbf6] text-slate-900">
      <Header />

      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <main className="mx-auto max-w-6xl px-6 pb-16">
        {/* Hero */}
        <section className="py-10">
          {/* Breadcrumb */}
          <div className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>
            <span className="mx-1">/</span>
            <Link href="/#templates" className="hover:text-slate-700">
              Looker Templates
            </Link>
            <span className="mx-1">/</span>
            <span className="text-slate-700">{prettyCategory(template.category)}</span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            {template.title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-7 text-slate-700">
            {template.excerpt}
          </p>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700">
              {prettyCategory(template.category)}
            </span>

            <span>•</span>
            <span>{formatDate(template.publishedAt)}</span>

            <span>•</span>
            <span>{prettyDifficulty(template.sidebar?.difficulty)}</span>

            {template.sidebar?.estimatedSetupTime ? (
              <>
                <span>•</span>
                <span>{template.sidebar.estimatedSetupTime}</span>
              </>
            ) : null}
          </div>

          {/* Primary actions */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <a
              href={template.templateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
            >
              Open template →
            </a>

            {template.demoUrl ? (
              <a
                href={template.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                View demo
              </a>
            ) : null}

            {/* Copia el canonical (no el templateUrl) */}
            <CopyLinkButton className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" />
          </div>

          {/* Hero image */}
          {template.heroImage?.asset?.url ? (
            <figure className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={template.heroImage.asset.url}
                alt={template.heroImage.alt || template.title}
                className="h-auto w-full object-cover"
              />
              {template.heroImage.caption ? (
                <figcaption className="px-5 py-3 text-sm text-slate-500">
                  {template.heroImage.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </section>

        {/* Body grid */}
        <section className="grid gap-10 lg:grid-cols-12">
          {/* Content */}
          <article className="lg:col-span-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <div className="prose prose-slate max-w-none">
                <PortableTextRenderer value={template.content} />
              </div>

              {/* Related templates */}
              {related.length ? (
                <section className="mt-10">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                    More templates
                  </h3>

                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/looker-templates/${r.slug}`}
                        className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 hover:shadow-md"
                      >
                        <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                          {prettyCategory(r.category)}
                        </div>
                        <div className="mt-3 text-base font-semibold text-slate-900 group-hover:underline">
                          {r.title}
                        </div>
                        <div className="mt-3 text-sm text-slate-600">Open →</div>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* TOC */}
              {toc.length ? (
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold text-slate-900">On this page</div>
                  <nav className="mt-4 space-y-2">
                    {toc.map((t) => (
                      <a
                        key={t.id}
                        href={`#${t.id}`}
                        className="block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-50"
                      >
                        {t.heading}
                      </a>
                    ))}
                  </nav>
                </div>
              ) : null}

              {/* Template details */}
              <div className="rounded-2xl bg-white p-6 shadow-sm space-y-5">
                {template.sidebar?.includes?.length ? (
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Includes</div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {template.sidebar.includes.map((x, i) => (
                        <li key={`${x}-${i}`} className="leading-6">• {x}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {template.sidebar?.requirements?.length ? (
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Requirements</div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {template.sidebar.requirements.map((x, i) => (
                        <li key={`${x}-${i}`} className="leading-6">• {x}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {template.sidebar?.dataSources?.length ? (
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Data sources</div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {template.sidebar.dataSources.map((x, i) => (
                        <li key={`${x}-${i}`} className="leading-6">• {x}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              {/* CTA */}
              <CTASEOSection />
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
