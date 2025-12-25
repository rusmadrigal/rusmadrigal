type FaqItem = {
  q: string;
  a: string;
};

const FAQ: FaqItem[] = [
  {
    q: "¿Qué tipo de proyectos trabajás?",
    a: "Trabajo principalmente con sitios medianos y grandes, equipos de producto o desarrollo, y proyectos donde el SEO técnico y el rendimiento son críticos: e-commerce, medios, fintech, turismo y productos digitales.",
  },
  {
    q: "¿Hacés SEO de contenidos o link building?",
    a: "Mi foco es SEO técnico, performance y analítica. Puedo colaborar a nivel estratégico con contenido, pero no vendo paquetes de links ni tácticas de bajo valor.",
  },
  {
    q: "¿Trabajás con frameworks como Next.js o sitios con JavaScript?",
    a: "Sí. Tengo experiencia con Next.js, SSR, SSG, routing, indexación de JavaScript, hidratación y problemas reales que suelen aparecer en proyectos modernos.",
  },
  {
    q: "¿Cómo medís el impacto de tu trabajo?",
    a: "Con datos. Uso GA4, Google Search Console y dashboards personalizados para medir visibilidad orgánica, indexación, rendimiento y métricas de negocio relevantes.",
  },
  {
    q: "¿Ofrecés soporte puntual o trabajo continuo?",
    a: "Ambos. Desde auditorías técnicas puntuales hasta acompañamiento mensual como SEO técnico senior para equipos internos.",
  },
  {
    q: "¿Trabajás solo o con agencias y equipos internos?",
    a: "Trabajo tanto de forma independiente como integrado a equipos internos o agencias, actuando como apoyo técnico y estratégico.",
  },
];

export default function FAQSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <header className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">Preguntas frecuentes</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Algunas respuestas rápidas sobre cómo trabajo y qué podés esperar.
        </p>
      </header>

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {FAQ.map((f, idx) => (
          <details
            key={`${f.q}-${idx}`}
            className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100"
            open={idx === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-slate-800">
              {f.q}
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="px-5 pb-4 text-sm leading-6 text-slate-600">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
