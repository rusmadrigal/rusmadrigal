// app/home/lp/seo/SEOFinalCTA.tsx
import Link from "next/link";

export default function SEOFinalCTA() {
  return (
    <section className="mt-14 rounded-2xl bg-slate-900 p-10 text-center text-white shadow-sm">
      <h2 className="text-2xl font-semibold tracking-tight">Análisis de optimización SEO</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80">
        Problemas de optimización SEO (indexación, CWV, migraciones, tracking): análisis técnico y próximos pasos claros.
      </p>

      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <a
          href="https://wa.me/50687773420?text=Hola,%20soy%20Rus%20Madrigal.%0A%0APara%20poder%20ayudarte%20mejor,%20¿podrías%20compartirme%20la%20siguiente%20información?%0A%0ASitio%20web:%0AEmail:%0AConsulta:"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-white/90"
        >
          Contacto inicial
        </a>

        <Link
          href="/looker-studio"
          className="rounded-xl border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
        >
          Casos de estudio
        </Link>
      </div>
    </section>
  );
}
