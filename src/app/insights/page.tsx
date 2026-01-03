// app/insights/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity.client";
import { INSIGHTS_INDEX_QUERY } from "@/lib/queries/insight";

export const revalidate = 3600;

type Insight = {
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

export const metadata: Metadata = {
  title: "Insights",
  description: "Technical SEO, Web Performance, Analytics and engineering insights.",
  alternates: { canonical: "/insights" },
};

function formatDate(iso?: string | null) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default async function InsightsPage() {
  const insights = await sanityClient.fetch<Insight[]>(INSIGHTS_INDEX_QUERY);

  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Insights</h1>
        <p className="mt-2 text-sm text-slate-600">
          Technical SEO, performance, analytics, and engineering notes.
        </p>
      </header>

      {insights?.length ? (
        <section className="grid gap-6 sm:grid-cols-2">
          {insights.map((item) => {
            const img = item.coverImage?.asset?.url ?? null;

            return (
              <article
                key={item._id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                {img ? (
                  <Link href={`/insights/${item.slug}`} className="block">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={item.coverImage?.alt || item.title}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                  </Link>
                ) : null}

                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                    {item.category ? (
                      <span className="rounded-full bg-slate-100 px-2 py-1 font-medium text-slate-700">
                        {item.category}
                      </span>
                    ) : null}
                    {item.publishedAt ? <span>{formatDate(item.publishedAt)}</span> : null}
                  </div>

                  <h2 className="text-lg font-semibold leading-snug">
                    <Link href={`/insights/${item.slug}`} className="hover:underline">
                      {item.title}
                    </Link>
                  </h2>

                  {item.excerpt ? (
                    <p className="mt-2 line-clamp-3 text-sm text-slate-600">{item.excerpt}</p>
                  ) : null}

                  <div className="mt-4">
                    <Link
                      href={`/insights/${item.slug}`}
                      className="text-sm font-medium text-slate-900 underline underline-offset-4"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-sm text-slate-700">
          No insights published yet.
        </div>
      )}
    </main>
  );
}
