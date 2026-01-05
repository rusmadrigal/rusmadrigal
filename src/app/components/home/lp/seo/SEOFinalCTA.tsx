// app/home/lp/seo/SEOFinalCTA.tsx
import Link from "next/link";

export default function SEOFinalCTA() {
  return (
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
  );
}
