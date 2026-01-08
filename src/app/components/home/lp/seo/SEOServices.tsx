import Link from "next/link";
import { SERVICES } from "./data";
import ServiceBGIcon from "./ServiceBGIcon";

export default function SEOServices() {
  return (
    <section id="servicios" className="mt-14 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Servicios</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Servicios modulares. Se pueden ejecutar como proyecto puntual o acompañamiento continuo.
          </p>
        </div>

        <Link
          href="https://wa.me/50687773420?text=Hola,%20soy%20Rus%20Madrigal.%0A%0APara%20poder%20ayudarte%20mejor,%20¿podrías%20compartirme%20la%20siguiente%20información?%0A%0ASitio%20web:%0AEmail:%0AConsulta:"
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
              group rounded-2xl bg-white p-8 ring-1 ring-slate-100 shadow-sm
              transform-gpu
              transition-[transform,box-shadow,border-color] duration-300 ease-out
              motion-safe:hover:-translate-y-[2px]
              hover:shadow-md hover:ring-slate-200
            "
          >
            <div className="grid gap-6 lg:grid-cols-12">
              {/* Izquierda */}
              <div className="lg:col-span-7">
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.description}</p>

                <div className="mt-5 border-l-2 border-slate-200 pl-4 text-sm text-slate-700">
                  <span className="font-semibold">Entregable:</span> backlog priorizado + criterios
                  de validación.
                </div>
              </div>

              {/* Derecha */}
              <div
                className="
                  relative lg:col-span-5 overflow-hidden
                  rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100
                  transform-gpu
                  transition-[transform,background-color] duration-300 ease-out
                  motion-safe:group-hover:-translate-y-[1px]
                  group-hover:bg-slate-100/70
                "
              >
                {/* SVG watermark (solo ajusta opacidad en hover) */}
                <div className="transition-opacity duration-300 group-hover:opacity-[0.06]">
                  <ServiceBGIcon type={s.icon} />
                </div>

                <div className="relative z-10">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Incluye
                  </div>

                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
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
    </section>
  );
}
