export default function SEOMethodology() {
  const steps = [
    {
      t: "Diagnóstico",
      d: "Auditoría técnica y lectura de señales (crawling, indexación, CWV, datos).",
      icon: (
        <path d="M21 21l-6-6M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
      ),
    },
    {
      t: "Plan",
      d: "Priorización por impacto/esfuerzo, con dependencias claras y criterios de éxito.",
      icon: (
        <>
          <path d="M3 3h18v4H3z" />
          <path d="M7 10h10M7 14h10M7 18h6" />
        </>
      ),
    },
    {
      t: "Ejecución",
      d: "Implementación con devs (PRs/tickets) o ejecución directa según alcance.",
      icon: (
        <>
          <path d="M14 7l-4 10" />
          <path d="M10 7l4 10" />
          <path d="M3 12h4M17 12h4" />
        </>
      ),
    },
    {
      t: "Validación",
      d: "QA técnico + monitoreo post-cambio para confirmar impacto y evitar regresiones.",
      icon: (
        <>
          <path d="M9 12l2 2 4-4" />
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
        </>
      ),
    },
  ];

  return (
    <section
      id="metodologia"
      className="mt-14 scroll-mt-24 rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-100"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        Metodología
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
        Un proceso corto y controlado para convertir hallazgos en ejecución y resultados medibles.
      </p>

      <div className="relative mt-10 grid gap-6 md:grid-cols-4">
        {steps.map((x, i) => (
          <div
            key={x.t}
            className="
              group relative rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100
              transform-gpu
              transition-[transform,box-shadow,border-color]
              duration-300 ease-out
              motion-safe:hover:-translate-y-[2px]
              hover:shadow-md
              hover:ring-slate-200
            "
          >
            {/* Número */}
            <div className="mb-4 text-xs font-semibold tracking-wide text-slate-500">
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* Icono */}
            <div
              className="
                mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg
                bg-white ring-1 ring-slate-200
                transform-gpu
                transition-[transform,opacity]
                duration-300 ease-out
                motion-safe:group-hover:-translate-y-[1px]
                motion-safe:group-hover:opacity-90
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-slate-700"
                aria-hidden="true"
              >
                {x.icon}
              </svg>
            </div>

            <div className="text-sm font-semibold text-slate-900">{x.t}</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{x.d}</p>

            {/* Flecha de flujo (desktop only) */}
            {i < steps.length - 1 && (
              <div
                className="
                  pointer-events-none absolute right-[-18px] top-1/2 hidden
                  -translate-y-1/2 md:block
                  transform-gpu
                  transition-transform duration-300 ease-out
                  motion-safe:group-hover:translate-x-[2px]
                "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-300"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
