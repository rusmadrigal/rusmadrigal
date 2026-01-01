// app/insights/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/app/components/home/header/Header";
import CopyLinkButton from "@/app/components/insights/CopyLinkButton";

// ---------- Types ----------
type InsightSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  quote?: { text: string; author?: string };
};

type InsightArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string; // ISO
  coverImage?: { src: string; alt: string; caption?: string };
  author: { name: string; role: string };
  sections: InsightSection[];
  related: Array<{ slug: string; title: string; category: string }>;
};

// ---------- Mock data (replace later with Sanity) ----------
const MOCK: Record<string, InsightArticle> = {
  "core-web-vitals-playbook": {
    slug: "core-web-vitals-playbook",
    title: "Core Web Vitals Playbook for Real-World SEO Wins",
    excerpt:
      "A practical, engineering-friendly approach to improving LCP, INP and CLS without turning your roadmap into chaos.",
    category: "Web Performance",
    publishedAt: "2025-12-15T00:00:00.000Z",
    coverImage: {
      src: "/images/home/seotech.webp",
      alt: "SEO técnico y rendimiento web",
      caption: "From lab metrics to field impact: how to prioritize fixes.",
    },
    author: {
      name: "Rus Madrigal",
      role: "Technical SEO & Web Performance",
    },
    sections: [
      {
        id: "tldr",
        heading: "TL;DR",
        paragraphs: [
          "Start with field data, segment by template, and fix the biggest bottlenecks first.",
          "Ship a small set of repeatable patterns (image strategy, critical CSS, JS budget) and apply them at scale.",
        ],
        bullets: [
          "Use CrUX / RUM to find template-level issues",
          "Prioritize LCP element + TTFB + render-blocking CSS",
          "Treat INP as a JS + UX problem (not just “optimize React”)",
        ],
      },
      {
        id: "why-this-matters",
        heading: "Why this matters",
        paragraphs: [
          "CWV is not a magic ranking switch, but it correlates with better UX and conversion. When you reduce friction, you usually win across SEO + paid + retention.",
          "The key is to avoid one-off fixes. You want systemic improvements that apply to entire templates.",
        ],
      },
      {
        id: "prioritization",
        heading: "Prioritization that engineering will accept",
        paragraphs: [
          "Bring issues as trade-offs, not as “SEO requests”. Show impact, scope, and risk. Pair it with a safe rollout strategy and ownership.",
        ],
        bullets: [
          "Start with templates that represent the most traffic and revenue",
          "Fix the LCP element first (hero image, headline, above-the-fold layout)",
          "Ship small releases: measure → iterate → expand",
        ],
        quote: {
          text: "If it can’t be rolled out to 80% of pages, it’s probably not the right first fix.",
        },
      },
      {
        id: "implementation",
        heading: "Implementation checklist",
        paragraphs: [
          "This is the baseline checklist I use to move CWV without breaking the site.",
        ],
        bullets: [
          "Images: responsive sizes, modern formats, preload the LCP image",
          "CSS: reduce render blocking, avoid huge bundles, critical CSS where needed",
          "JS: reduce long tasks, defer non-critical scripts, audit third parties",
          "Fonts: preload, use display swap, avoid multiple weights",
        ],
      },
    ],
    related: [
      {
        slug: "javascript-seo-troubleshooting",
        title: "JavaScript SEO: Troubleshooting Indexing & Rendering",
        category: "Technical SEO",
      },
      {
        slug: "log-file-analysis-starter",
        title: "Log File Analysis Starter Guide (Real Bots, Real Data)",
        category: "Analytics",
      },
      {
        slug: "schema-markup-for-service-pages",
        title: "Schema Markup for Service Pages (Without Overdoing It)",
        category: "Structured Data",
      },
    ],
  },
};

// ---------- Helpers ----------
function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
}

function estimateReadingTime(article: InsightArticle) {
  const words =
    article.title.split(/\s+/).length +
    article.excerpt.split(/\s+/).length +
    article.sections
      .flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])])
      .join(" ")
      .split(/\s+/)
      .filter(Boolean).length;

  const wpm = 220;
  const minutes = Math.max(1, Math.round(words / wpm));
  return `${minutes} min read`;
}

// ---------- SEO (Next 15+ params can be Promise) ----------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = MOCK[slug];
  if (!article) return { title: "Insight not found" };

  return {
    title: `${article.title} | Insights`,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `/insights/${article.slug}`,
    },
  };
}

// ---------- Page (Next 15+ params can be Promise) ----------
export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = MOCK[slug];
  if (!article) notFound();

  const readingTime = estimateReadingTime(article);
  const toc = article.sections.map((s) => ({ id: s.id, heading: s.heading }));

  return (
    <div className="min-h-screen bg-[#fbfbf6] text-slate-900">
      <Header />

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
            <span className="text-slate-700">{article.category}</span>
          </div>

          {/* Title + deck */}
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            {article.title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-7 text-slate-700">
            {article.excerpt}
          </p>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-slate-700">
              {article.category}
            </span>
            <span>•</span>
            <span>{formatDate(article.publishedAt)}</span>
            <span>•</span>
            <span>{readingTime}</span>
          </div>

          {/* Cover */}
          {article.coverImage?.src ? (
            <figure className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.coverImage.src}
                alt={article.coverImage.alt}
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
          {/* Content */}
          <article className="lg:col-span-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              {/* Author mini row */}
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <div className="text-sm font-semibold text-slate-900">{article.author.name}</div>
                  <div className="text-sm text-slate-600">{article.author.role}</div>
                </div>

                <div className="flex items-center gap-2">
                <CopyLinkButton
  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
/>
                  <Link
                    className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
                    href="/#contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Sections */}
              <div className="prose prose-slate mt-8 max-w-none">
                {article.sections.map((s) => (
                  <section key={s.id} id={s.id} className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      {s.heading}
                    </h2>

                    {s.paragraphs.map((p, idx) => (
                      <p key={idx} className="mt-4 leading-7 text-slate-700">
                        {p}
                      </p>
                    ))}

                    {s.bullets?.length ? (
                      <ul className="mt-4 list-disc pl-6 text-slate-700">
                        {s.bullets.map((b, idx) => (
                          <li key={idx} className="mt-2">
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {s.quote?.text ? (
                      <blockquote className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
                        <p className="leading-7">“{s.quote.text}”</p>
                        {s.quote.author ? (
                          <footer className="mt-3 text-sm text-slate-600">
                            — {s.quote.author}
                          </footer>
                        ) : null}
                      </blockquote>
                    ) : null}

                    <div className="mt-10 border-b border-slate-100" />
                  </section>
                ))}

                {/* Closing author card */}
                <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="text-sm font-semibold text-slate-900">About the author</div>
                  <div className="mt-1 text-sm text-slate-600">{article.author.role}</div>
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
            </div>

            {/* Related insights */}
            <section className="mt-10">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Related insights
              </h3>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {article.related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/insights/${r.slug}`}
                    className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 hover:shadow-md"
                  >
                    <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                      {r.category}
                    </div>
                    <div className="mt-3 text-base font-semibold text-slate-900 group-hover:underline">
                      {r.title}
                    </div>
                    <div className="mt-3 text-sm text-slate-600">Read →</div>
                  </Link>
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* TOC */}
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

              {/* CTA */}
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

              {/* Utility card */}
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
