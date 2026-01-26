"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

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

const CATEGORIES = [
  { key: "", label: "Todos" },
  { key: "seo", label: "SEO" },
  { key: "performance", label: "Rendimiento Web" },
  { key: "analytics", label: "Analítica" },
  { key: "ai-search", label: "IA & Búsqueda" },
];

function prettyCategory(value?: string | null) {
  const map: Record<string, string> = {
    seo: "SEO",
    performance: "Rendimiento Web",
    analytics: "Analítica",
    "ai-search": "IA & Búsqueda",
  };
  return value ? (map[value] ?? value) : "";
}

function formatDate(date?: string | null) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("es-CR", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function InsightsIndexClient({ insights }: { insights: InsightListItem[] }) {
  const [category, setCategory] = useState("");
  const [animating, setAnimating] = useState(false);

  const filtered = useMemo(() => {
    if (!category) return insights;
    return insights.filter((i) => i.category === category);
  }, [insights, category]);

  function handleFilter(key: string) {
    if (key === category) return;
    setAnimating(true);
    window.setTimeout(() => {
      setCategory(key);
      setAnimating(false);
    }, 180);
  }

  return (
    <section>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => {
          const active = c.key === category;
          return (
            <button
              key={c.key || "all"}
              type="button"
              onClick={() => handleFilter(c.key)}
              className={
                active
                  ? "rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm"
                  : "rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
              }
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Grid wrapper animado */}
      <div
        className={
          animating
            ? "opacity-0 translate-y-2 transition-all duration-200 ease-out pointer-events-none"
            : "opacity-100 translate-y-0 transition-all duration-300 ease-out"
        }
      >
        {filtered.length ? (
          <div
            className="
              grid gap-8
              [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]
            "
          >
            {filtered.map((item) => {
              const img = item.coverImage?.asset?.url ?? null;
              const cat = prettyCategory(item.category);
              const date = formatDate(item.publishedAt);

              return (
                <Link
                  key={item._id}
                  href={`/insights/${item.slug}`}
                  className="
                    group relative overflow-hidden rounded-2xl bg-white
                    ring-1 ring-slate-200/70 shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-md hover:ring-slate-300
                  "
                >
                  {/* Media */}
                  <div className="relative">
                    {img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={img}
                        alt={item.coverImage?.alt || item.title}
                        className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-52 w-full bg-gradient-to-br from-slate-100 to-slate-200" />
                    )}

                    {/* Overlay suave (más editorial) */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

                    {/* Meta pill arriba */}
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
                    {/* Título: sin underline, solo cambio de color */}
                    <h2 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-slate-700">
                      {item.title}
                    </h2>

                    {item.excerpt ? (
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-700">
                        {item.excerpt}
                      </p>
                    ) : (
                      <p className="mt-3 text-sm leading-6 text-slate-600">Leer insight →</p>
                    )}

                    <div className="mt-auto pt-5 text-sm font-medium text-slate-900">Leer →</div>
                  </div>

                  {/* Accent line sutil */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-slate-900/0 via-slate-900/15 to-slate-900/0" />
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-8 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
            No hay insights en esta categoría.
          </div>
        )}
      </div>
    </section>
  );
}
