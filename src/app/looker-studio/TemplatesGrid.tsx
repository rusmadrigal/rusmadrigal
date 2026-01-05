"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

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
  return value ? (map[value] ?? value) : null;
}

const FILTERS: Array<{
  label: string;
  value: "all" | "seo" | "performance" | "analytics" | "content";
}> = [
  { label: "Todas", value: "all" },
  { label: "SEO", value: "seo" },
  { label: "Web Performance", value: "performance" },
  { label: "Analytics", value: "analytics" },
  { label: "Content", value: "content" },
];

export default function TemplatesGrid({ templates }: { templates: LookerTemplateCard[] }) {
  const [active, setActive] = useState<(typeof FILTERS)[number]["value"]>("all");

  const filtered = useMemo(() => {
    if (active === "all") return templates;
    return templates.filter((t) => t.category === active);
  }, [active, templates]);

  return (
    <>
      {/* Filtros */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-2 text-sm">
          {FILTERS.map((f) => {
            const isActive = active === f.value;
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setActive(f.value)}
                className={[
                  "rounded-full px-4 py-1.5 transition",
                  isActive
                    ? "bg-slate-900 text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                ].join(" ")}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section id="templates" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
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

            <div className="p-5">
              <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                {prettyCategory(t.category)}
              </div>

              {/* SIN underline */}
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{t.title}</h3>

              <p className="mt-2 line-clamp-2 text-sm text-slate-600">{t.excerpt}</p>

              <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
                {prettyDifficulty(t.sidebar?.difficulty) ? (
                  <span>{prettyDifficulty(t.sidebar?.difficulty)}</span>
                ) : null}

                {t.sidebar?.estimatedSetupTime ? (
                  <span>• {t.sidebar.estimatedSetupTime}</span>
                ) : null}
              </div>

              {/* Botón visual */}
              <div className="mt-4">
                <span className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white group-hover:bg-slate-800">
                  Abrir plantilla
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Empty state */}
      {!filtered.length ? (
        <div className="mt-10 rounded-2xl bg-white p-8 text-center text-slate-600 shadow-sm">
          No hay plantillas para este filtro.
        </div>
      ) : null}
    </>
  );
}
