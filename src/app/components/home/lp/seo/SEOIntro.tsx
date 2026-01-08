import Link from "next/link";
import { Badge } from "./ui";

export default function SEOIntro() {
  return (
    <section className="mt-10">
      <div className="w-full">
        <div className="relative overflow-hidden rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-100 md:p-12">
          {/* Watermark icon (desktop only) */}
          <div
            className="
    pointer-events-none absolute -right-24 top-1/2 hidden
    -translate-y-1/2 lg:block
    h-64 w-64
    opacity-[0.035]
  "
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-full w-full text-slate-900"
            >
              <circle cx="6" cy="6" r="2" />
              <circle cx="18" cy="6" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="6" cy="18" r="2" />
              <circle cx="18" cy="18" r="2" />
              <path d="M8 6h8M6 8v8M18 8v8M8 18h8" />
            </svg>
          </div>

          {/* Breadcrumb */}
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
              href="#servicios"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Ver servicios
            </Link>
            <div className="text-xs text-slate-500 sm:ml-2">
              Respuesta típica:{" "}
              <span className="font-semibold text-slate-700">24–48h</span>
              <span className="mx-2 text-slate-300">•</span>
              Trabajo por{" "}
              <span className="font-semibold text-slate-700">tickets / PRs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
