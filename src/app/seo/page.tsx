// app/seo/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Header from "@/app/components/home/header/Header";
import Hero from "@/app/components/home/hero/Hero";

const SITE_URL = "https://rusmadrigal.com"; // <-- Cambiar

export const metadata: Metadata = {
  title: "SEO técnico y performance | Consultoría",
  description:
    "Consultoría de SEO técnico y performance: auditoría, Core Web Vitals, soporte a desarrollo, migraciones SEO-safe y medición (GA4 + GSC). Enfoque ejecutable y medible.",
  alternates: { canonical: `${SITE_URL}/seo` },
  openGraph: {
    type: "website",
    title: "SEO técnico y performance | Consultoría",
    description:
      "Auditorías profundas, Core Web Vitals y soporte técnico para equipos de desarrollo. Enfoque serio, ejecutable y medible.",
    url: `${SITE_URL}/seo`,
  },
};

type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    id: "auditoria",
    title: "Auditoría de SEO Técnico",
    description:
      "Diagnóstico profundo de rastreo, indexación, arquitectura, canónicos, hreflang, status codes y renderizado (incl. JS SEO).",
    bullets: ["Backlog priorizado por impacto/esfuerzo", "Riesgos críticos y quick wins", "Criterios de QA para dev"],
  },
  {
    id: "cwv",
    title: "Core Web Vitals y Performance",
    description:
      "Mejoras reales en LCP/INP/CLS: carga crítica, imágenes, JS, fuentes y third-party, con impacto en SEO y conversión.",
    bullets: ["Análisis CrUX + datos de campo (si existen)", "Plan de fixes por prioridad", "Validación antes/después"],
  },
  {
    id: "dev",
    title: "Soporte técnico a Desarrollo",
    description:
      "Acompañamiento a equipos dev para implementar fixes sin romper SEO: SSR/Next.js, routing, sitemaps, robots, canonicals y schema.",
    bullets: ["Soporte en PRs/tickets", "QA técnico pre/post release", "Checklists y guías de implementación"],
  },
  {
    id: "migraciones",
    title: "Migraciones y Rediseños SEO-safe",
    description:
      "Plan de migración, mapeo de URLs, redirecciones, QA técnico y monitoreo post-launch para minimizar caída orgánica.",
    bullets: ["Inventario + mapeo de URLs", "Redirecciones y validación", "Monitoreo post-launch + fixes"],
  },
  {
    id: "analitica",
    title: "Analítica para SEO (GA4 + GSC)",
    description:
      "Medición clara: eventos clave, segmentación y dashboards accionables. Menos métricas de vanidad, más decisiones.",
    bullets: ["Eventos y conversiones útiles", "Segmentación por landings/mercados", "Dashboards accionables"],
  },
  {
    id: "roadmap",
    title: "Roadmap y Estrategia Técnica",
    description:
      "Priorización trimestral, KPIs realistas y coordinación con stakeholders. Estrategia ejecutable, no teórica.",
    bullets: ["Roadmap por trimestre/sprint", "Priorización impacto/esfuerzo", "Alineación con objetivos de negocio"],
  },
];

function Divider() {
  return <div className="h-px w-full bg-slate-200/70" />;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-[#fbfbf6] text-slate-900">
      <Header />

      {/* Reutilizamos el hero del home para coherencia visual */}
      <Hero />

      <main className="mx-auto max-w-6xl px-6 pb-16">
        {/* Intro “consultoría” (sobria) */}
        <section className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-white p-9 shadow-sm ring-1 ring-slate-100">
              <div className="text-sm text-slate-500">
                <Link href="/" className="hover:text-slate-700">
                  Home
                </Link>
                <span className="mx-1">/</span>
                <span className="text-slate-700">SEO</span>
              </div>

              <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Consultoría de SEO técnico y performance
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
                Trabajo con equipos para resolver problemas técnicos que frenan el crecimiento orgánico:
                rastreo, indexación, renderizado, Core Web Vitals y medición. El resultado es un plan
                ejecutable: backlog priorizado, criterios de QA y seguimiento de impacto.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <Badge>SEO técnico</Badge>
                <Badge>Core Web Vitals</Badge>
                <Badge>Next.js / SSR</Badge>
                <Badge>Migraciones</Badge>
                <Badge>GA4 + GSC</Badge>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Agendar llamada
                </Link>
                <a
                  href="#servicios"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Ver servicios
                </a>
              </div>
            </div>
          </div>

          {/* Perfil (serio, compacto, tipo consultora) */}
          <aside className="lg:col-span-4">
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-slate-100">
                  {/* Cambiá la ruta por tu headshot real */}
                  <Image
                    src="/images/rus.jpg"
                    alt="Foto de Rus Madrigal"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>

                <div>
                  <div className="text-sm font-semibold text-slate-900">Rus Madrigal</div>
                  <div className="text-sm text-slate-600">SEO técnico · Performance · Analytics</div>
                </div>
              </div>

              <div className="mt-5 space-y-2 text-sm text-slate-700">
                <div>• Enfoque en implementación y QA</div>
                <div>• Experiencia con sitios SSR/JS</div>
                <div>• Priorización por impacto/ esfuerzo</div>
              </div>

              <Divider />

              <div className="mt-5 text-sm text-slate-600">
                Entregable estándar: backlog priorizado + recomendaciones implementables + criterios de validación.
              </div>

              <div className="mt-6">
                <Link
                  href="/looker-studio"
                  className="inline-flex w-full justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Ver plantillas de Looker Studio
                </Link>
              </div>
            </div>
          </aside>
        </section>

        {/* Servicios (lista editorial: más consultora, menos “cards”) */}
        <section id="servicios" className="mt-14 scroll-mt-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Servicios</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                Servicios modulares. Se pueden ejecutar como proyecto puntual o acompañamiento continuo.
              </p>
            </div>

            <Link
              href="/#contact"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Consultar
            </Link>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
            {SERVICES.map((s, idx) => (
              <div key={s.id} className="p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-3xl">
                    <div className="text-lg font-semibold text-slate-900">{s.title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{s.description}</p>

                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {s.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="shrink-0">
                    <Link
                      href="/#contact"
                      className="inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      Consultar →
                    </Link>
                  </div>
                </div>

                {idx < SERVICES.length - 1 ? <div className="mt-7 h-px w-full bg-slate-100" /> : null}
              </div>
            ))}
          </div>
        </section>

        {/* Enfoque / metodología (sobrio) */}
        <section className="mt-14 rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Metodología</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Un proceso corto y controlado para convertir hallazgos en ejecución y resultados medibles.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              { t: "Diagnóstico", d: "Auditoría técnica y lectura de señales (crawling, indexación, CWV, datos)." },
              { t: "Plan", d: "Priorización por impacto/esfuerzo, con dependencias claras y criterios de éxito." },
              { t: "Ejecución", d: "Implementación con devs (PRs/tickets) o ejecución directa según alcance." },
              { t: "Validación", d: "QA técnico + monitoreo post-cambio para confirmar impacto y evitar regresiones." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
                <div className="text-sm font-semibold text-slate-900">{x.t}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final (formal, breve) */}
        <section className="mt-14 rounded-2xl bg-slate-900 p-10 text-center text-white shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight">Hablemos de tu caso</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80">
            Si tenés señales de problemas técnicos (indexación, CWV, migración, tracking), lo revisamos y
            definimos próximos pasos con claridad.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/#contact"
              className="rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              Agendar llamada
            </Link>

            <Link
              href="/looker-studio"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Ver plantillas
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
