import { SearchCheck, Gauge, Code2, Shuffle, BarChart3, Map } from "lucide-react";

type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    title: "Auditoría de SEO Técnico",
    desc: "Diagnóstico profundo de rastreo, indexación, arquitectura, canónicos, hreflang, status codes y renderizado (incl. JS SEO). Entregable: backlog priorizado por impacto/esfuerzo.",
    icon: <SearchCheck className="h-5 w-5" />,
  },
  {
    title: "Core Web Vitals y Performance",
    desc: "Mejoras reales en LCP/INP/CLS: carga crítica, imágenes, JS, fuentes y third-party. Performance con impacto en SEO y conversión.",
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    title: "Soporte técnico a Desarrollo",
    desc: "Acompañamiento a equipos dev para implementar fixes sin romper SEO: SSR/Next.js, routing, sitemaps, robots, canonicals y schema.",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "Migraciones y Rediseños SEO-safe",
    desc: "Plan de migración, mapeo de URLs, redirecciones, QA técnico y monitoreo post-launch para minimizar caída orgánica.",
    icon: <Shuffle className="h-5 w-5" />,
  },
  {
    title: "Analítica para SEO (GA4 + GSC)",
    desc: "Medición clara: eventos clave, segmentación y dashboards accionables. Menos métricas de vanidad, más decisiones.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Roadmap y Estrategia Técnica",
    desc: "Priorización trimestral, KPIs realistas y coordinación con stakeholders. Estrategia ejecutable, no teórica.",
    icon: <Map className="h-5 w-5" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <header className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Servicios de SEO Técnico y Rendimiento Web
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Mejoro rastreo, indexación y performance con medición clara y un roadmap ejecutable. Sin
          humo.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-md"
          >
            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-800">
              {service.icon}
            </div>

            <h3 className="mt-4 font-semibold tracking-tight">{service.title}</h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">{service.desc}</p>

            <div className="mt-5">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition group-hover:gap-3">
                Ver detalles <span aria-hidden>→</span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
