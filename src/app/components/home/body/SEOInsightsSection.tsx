import Link from "next/link";

type SEOInsight = {
  title: string;
  date: string;
  href: string;
};

const BLOG: SEOInsight[] = [
  {
    title: "JavaScript SEO: errores comunes que afectan la indexación",
    date: "Mar 2025",
    href: "#",
  },
  {
    title: "Core Web Vitals: qué métricas sí mueven ranking en 2025",
    date: "Feb 2025",
    href: "#",
  },
  {
    title: "Auditoría técnica SEO: señales claras de problemas de rastreo",
    date: "Jan 2025",
    href: "#",
  },
];

export default function SEOInsightsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <header className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          SEO Insights & Technical Analysis
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
          Análisis técnicos, auditorías reales y notas prácticas sobre SEO,
          rendimiento web y arquitectura para buscadores y agentes IA.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {BLOG.map((b) => (
          <article
            key={b.title}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            {/* Placeholder visual (luego puede ser imagen, gráfico o code preview) */}
            <div className="flex aspect-[16/10] items-center justify-center bg-slate-100 text-xs font-semibold text-slate-400">
              SEO Analysis
            </div>

            <div className="p-5">
              <h3 className="font-semibold leading-snug text-slate-900">
                {b.title}
              </h3>

              <p className="mt-2 text-xs text-slate-500">{b.date}</p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Insights técnicos basados en experiencia real, datos y casos
                aplicados a proyectos de distintos mercados.
              </p>

              <Link
                href={b.href}
                className="mt-4 inline-block text-sm font-semibold text-slate-900 transition hover:underline"
              >
                Read analysis →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
