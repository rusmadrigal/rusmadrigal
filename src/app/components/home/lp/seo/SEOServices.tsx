import Link from "next/link";
import { SERVICES } from "./data";

export default function SEOServices() {
  return (
    <section id="servicios" className="mt-14 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Servicios
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Servicios modulares. Se pueden ejecutar como proyecto puntual o acompañamiento continuo.
          </p>
        </div>

        {/* CTA principal */}
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
        >
          Consultar disponibilidad
        </Link>
      </div>

      {/* Cards */}
      <div className="mt-8 grid gap-4">
        {SERVICES.map((s) => (
          <article
            key={s.id}
            className="
              group rounded-2xl bg-white p-8 ring-1 ring-slate-100
              transition
              duration-200
              ease-out
              hover:-translate-y-[2px]
              hover:shadow-md
              hover:ring-slate-200
              motion-reduce:transform-none
              motion-reduce:transition-none
            "
          >
            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* Izquierda */}
              <div className="lg:col-span-7">
                <h3 className="text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {s.description}
                </p>

                <div className="mt-4 inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-100">
                  Entregable: backlog priorizado + criterios de QA
                </div>
              </div>

              {/* Derecha */}
              <div className="lg:col-span-5">
                <div
                  className="
                    rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100
                    transition-colors duration-200
                    group-hover:bg-slate-100/70
                  "
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Incluye
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA final */}
      <div className="mt-10 rounded-2xl bg-slate-900 p-8 text-white shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold">
              ¿Querés que lo revisemos rápido?
            </div>
            <p className="mt-1 max-w-2xl text-sm text-white/80">
              Me pasás el sitio y el objetivo. Te digo qué es prioritario y cómo lo ejecutaríamos.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
          >
            Agendar llamada
          </Link>
        </div>
      </div>
    </section>
  );
}
