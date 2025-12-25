import Link from "next/link";
import { ExternalLink, BarChart3 } from "lucide-react";

type LookerTemplate = {
  title: string;
  description: string;
  href: string;
  tag?: string;
};

const TEMPLATES: LookerTemplate[] = [
  {
    title: "SEO Performance Dashboard",
    description:
      "Plantilla de Looker Studio para monitorear tráfico orgánico, clics, impresiones, CTR y posiciones promedio desde Google Search Console.",
    href: "#",
    tag: "SEO",
  },
  {
    title: "Core Web Vitals Report",
    description:
      "Dashboard técnico para analizar LCP, CLS, INP y distribución por URLs y dispositivos usando datos de CrUX.",
    href: "#",
    tag: "Web Performance",
  },
  {
    title: "Content & Landing Pages Analysis",
    description:
      "Plantilla enfocada en evaluar rendimiento de contenidos, landings y clusters SEO con métricas accionables.",
    href: "#",
    tag: "Content",
  },
];

export default function LookerStudioTemplatesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <header className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Plantillas de Looker Studio
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
          Plantillas profesionales de Looker Studio para análisis SEO, rendimiento
          web y reporting técnico. Listas para duplicar y usar.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {TEMPLATES.map((t) => (
          <article
            key={t.title}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            {/* Preview visual */}
            <div className="flex aspect-[16/10] items-center justify-center bg-slate-100 text-slate-400">
              <BarChart3 className="h-10 w-10" />
            </div>

            <div className="p-5">
              {t.tag && (
                <span className="inline-block rounded-full bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-600">
                  {t.tag}
                </span>
              )}

              <h3 className="mt-3 font-semibold leading-snug text-slate-900">
                {t.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {t.description}
              </p>

              <Link
                href={t.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:underline"
              >
                Ver plantilla
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
