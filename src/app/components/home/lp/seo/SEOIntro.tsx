// app/home/lp/seo/SEOIntro.tsx
import Link from "next/link";
import { Badge } from "./ui";

export default function SEOIntro() {
  return (
    <section className="mt-10">
      {/* OJO: sin max-w-4xl para que respete el ancho del main (max-w-6xl) */}
      <div className="w-full">
        <div className="relative overflow-hidden rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-100 md:p-12">
          {/* Soft background accents */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-slate-100/70 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-slate-100/60 blur-3xl" />

          <nav aria-label="Breadcrumb" className="relative text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>
            <span className="mx-1">/</span>
            <span className="text-slate-700">SEO</span>
          </nav>

          <h1 className="relative mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Consultoría de SEO técnico y performance
          </h1>

          {/* Limitamos solo el ancho del párrafo para legibilidad, pero la caja ocupa todo */}
          <p className="relative mt-4 max-w-4xl text-base leading-7 text-slate-700">
            Trabajo con equipos para resolver problemas técnicos que frenan el crecimiento orgánico:
            rastreo, indexación, renderizado, Core Web Vitals y medición. El resultado es un plan
            ejecutable: backlog priorizado, criterios de QA y seguimiento de impacto.
          </p>

          <div className="relative mt-7 flex flex-wrap gap-2">
            <Badge>SEO técnico</Badge>
            <Badge>Core Web Vitals</Badge>
            <Badge>Next.js / SSR</Badge>
            <Badge>Migraciones</Badge>
            <Badge>GA4 + GSC</Badge>
          </div>

          <div className="relative mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Agendar llamada
            </Link>

            <Link
              href="#servicios"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Ver servicios
            </Link>

            <div className="text-xs text-slate-500 sm:ml-2">
              Respuesta típica: <span className="font-semibold text-slate-700">24–48h</span>
              <span className="mx-2 text-slate-300">•</span>
              Trabajo por <span className="font-semibold text-slate-700">tickets / PRs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
