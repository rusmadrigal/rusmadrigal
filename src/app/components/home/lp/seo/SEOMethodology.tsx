// app/home/lp/seo/SEOMethodology.tsx

export default function SEOMethodology() {
  const steps = [
    {
      t: "Diagnóstico",
      d: "Auditoría técnica y lectura de señales (crawling, indexación, CWV, datos).",
    },
    {
      t: "Plan",
      d: "Priorización por impacto/esfuerzo, con dependencias claras y criterios de éxito.",
    },
    {
      t: "Ejecución",
      d: "Implementación con devs (PRs/tickets) o ejecución directa según alcance.",
    },
    {
      t: "Validación",
      d: "QA técnico + monitoreo post-cambio para confirmar impacto y evitar regresiones.",
    },
  ];

  return (
    <section
      id="metodologia"
      className="mt-14 scroll-mt-24 rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-100"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Metodología</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
        Un proceso corto y controlado para convertir hallazgos en ejecución y resultados medibles.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {steps.map((x) => (
          <div key={x.t} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
            <div className="text-sm font-semibold text-slate-900">{x.t}</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{x.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
