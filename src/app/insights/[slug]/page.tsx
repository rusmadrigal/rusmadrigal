import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/app/components/home/header/Header";
import CopyLinkButton from "@/app/components/insights/CopyLinkButton";
import PortableTextRenderer from "@/app/components/insights/PortableTextRenderer";

import { sanityClient } from "@/lib/sanity.client";
import { INSIGHT_BY_SLUG_QUERY } from "@/lib/queries/insight";
import { extractToc, type TocItem } from "@/lib/insights/extractToc";

import type { PortableTextBlock } from "@portabletext/types";

const SITE_URL = "https://rusmadrigal.com";

// ---------- Types ----------
type InsightSEO = {
  metaTitle?: string;
  metaDescription?: string;
  canonicalPath?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  ogImage?: {
    asset?: { url: string };
    alt?: string;
  };
};

type Insight = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  author: { name: string; role?: string };
  coverImage?: {
    asset?: { url: string };
    alt?: string;
    caption?: string;
  };
  seo?: InsightSEO;
  content: PortableTextBlock[];
};

type RelatedInsight = {
  slug: string;
  title: string;
  category: string;
};

// ---------- Queries ----------
const RELATED_INSIGHTS_QUERY = `
*[_type == "insight" && slug.current != $slug] | order(publishedAt desc)[0...3]{
  "slug": slug.current,
  title,
  category
}
`;

// ---------- Helpers ----------
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
    "ai-search": "AI & Search",
  };
  return map[value] ?? value;
}

type PTBlockWithChildren = PortableTextBlock & {
  children?: Array<{ text?: string }>;
};

function estimateReadingTime(content: PortableTextBlock[], title: string, excerpt: string) {
  const blocksText = content
    .map((b) => {
      const block = b as PTBlockWithChildren;
      return (block.children ?? []).map((c) => c.text ?? "").join(" ");
    })
    .join(" ");

  const text = `${title} ${excerpt} ${blocksText}`;
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

function absUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

// ---------- SEO ----------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article: Insight | null = await sanityClient.fetch(INSIGHT_BY_SLUG_QUERY, { slug });
  if (!article) return { title: "Insight not found" };

  const seoTitle = article.seo?.metaTitle?.trim() || article.title;
  const seoDesc = article.seo?.metaDescription?.trim() || article.excerpt;

  const canonicalPath = article.seo?.canonicalPath?.trim() || `/insights/${article.slug}`;
  const canonical = absUrl(canonicalPath);

  const ogImg = article.seo?.ogImage?.asset?.url || article.coverImage?.asset?.url || undefined;

  const robots = {
    index: !(article.seo?.noIndex ?? false),
    follow: !(article.seo?.noFollow ?? false),
  };

  return {
    title: seoTitle,
    description: seoDesc,
    alternates: { canonical },
    robots,
    openGraph: {
      type: "article",
      url: canonical,
      title: seoTitle,
      description: seoDesc,
      images: ogImg
        ? [{ url: ogImg, alt: article.seo?.ogImage?.alt || article.coverImage?.alt || seoTitle }]
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

// ---------- JSON-LD ----------
function JsonLd({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

// ---------- Page ----------
export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const article: Insight | null = await sanityClient.fetch(INSIGHT_BY_SLUG_QUERY, { slug });
  if (!article) notFound();

  const related: RelatedInsight[] = await sanityClient.fetch(RELATED_INSIGHTS_QUERY, { slug });

  const readingTime = estimateReadingTime(article.content, article.title, article.excerpt);
  const toc: TocItem[] = extractToc(article.content);

  const canonicalPath = article.seo?.canonicalPath?.trim() || `/insights/${article.slug}`;
  const canonical = absUrl(canonicalPath);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.seo?.metaTitle?.trim() || article.title,
    description: article.seo?.metaDescription?.trim() || article.excerpt,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    mainEntityOfPage: canonical,
    image: article.seo?.ogImage?.asset?.url || article.coverImage?.asset?.url || undefined,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
      { "@type": "ListItem", position: 2, name: "Insights", item: absUrl("/#insights") },
      { "@type": "ListItem", position: 3, name: prettyCategory(article.category), item: canonical },
    ],
  };

  return (
    <div className="min-h-screen bg-[#fbfbf6] text-slate-900">
      <Header />

      {/* JSON-LD */}
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <main className="mx-auto max-w-6xl px-6 pb-16">
        {/* Article Hero */}
        <section className="py-10">
          {/* Breadcrumb */}
          <div className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>
            <span className="mx-1">/</span>
            <Link href="/#insights" className="hover:text-slate-700">
              Insights
            </Link>
            <span className="mx-1">/</span>
            <span className="text-slate-700">{prettyCategory(article.category)}</span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            {article.title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-7 text-slate-700">{article.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700">
              {prettyCategory(article.category)}
            </span>
            <span>•</span>
            <span>{formatDate(article.publishedAt)}</span>
            <span>•</span>
            <span>{readingTime}</span>
          </div>

          {article.coverImage?.asset?.url ? (
            <figure className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
              <img
                src={article.coverImage.asset.url}
                alt={article.coverImage.alt || article.title}
                className="h-auto w-full object-cover"
              />
              {article.coverImage.caption ? (
                <figcaption className="px-5 py-3 text-sm text-slate-500">
                  {article.coverImage.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </section>

        {/* Body grid */}
        <section className="grid gap-10 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <div className="text-sm font-semibold text-slate-900">{article.author.name}</div>
                  {article.author.role ? (
                    <div className="text-sm text-slate-600">{article.author.role}</div>
                  ) : null}
                </div>

                <div className="flex items-center gap-2">
                  <CopyLinkButton className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50" />
                  <Link
                    className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
                    href="/#contact"
                  >
                    Contact.
                  </Link>
                </div>
              </div>

              <div className="prose prose-slate mt-8 max-w-none">
                <PortableTextRenderer value={article.content} />
              </div>

              <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-900">About the author</div>
                {article.author.role ? (
                  <div className="mt-1 text-sm text-slate-600">{article.author.role}</div>
                ) : null}
                <p className="mt-4 leading-7 text-slate-700">
                  I help teams ship technical SEO and web performance improvements that scale.
                  Focused on clean implementation, measurable impact, and collaboration with
                  engineering.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
                    href="/#services"
                  >
                    See services
                  </Link>
                  <Link
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    href="/#insights"
                  >
                    More insights
                  </Link>
                </div>
              </section>
            </div>

            {related.length ? (
              <section className="mt-10">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  Related insights
                </h3>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/insights/${r.slug}`}
                      className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 hover:shadow-md"
                    >
                      <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                        {prettyCategory(r.category)}
                      </div>
                      <div className="mt-3 text-base font-semibold text-slate-900 group-hover:underline">
                        {r.title}
                      </div>
                      <div className="mt-3 text-sm text-slate-600">Read →</div>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
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

              <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
                <div className="text-sm font-semibold">Need help with SEO + performance?</div>
                <p className="mt-2 text-sm text-white/80">
                  I work with teams to improve technical SEO, CWV, and measurement with clean,
                  scalable implementation.
                </p>
                <Link
                  href="/#contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  Contact me
                </Link>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">What you’ll get</div>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
                  <li className="mt-2">Template-level prioritization</li>
                  <li className="mt-2">Clear engineering tickets</li>
                  <li className="mt-2">Measurement plan (GA4 / GSC / CWV)</li>
                </ul>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
