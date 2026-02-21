import Link from "next/link";

export default function CTASEOSection() {
  return (
    <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
      <div className="text-sm font-semibold">¿Necesitás apoyo en SEO?</div>

      <p className="mt-2 text-sm text-white/80">
        Ayudo a personas y equipos a mejorar su SEO con estrategias claras, basadas en técnica,
        rendimiento web y datos.
      </p>

      <a
        href="https://wa.me/50687773420?text=Hola,%20soy%20Rus%20Madrigal.%0A%0APara%20poder%20ayudarte%20mejor,%20%C2%BFpodr%C3%ADas%20compartirme%20la%20siguiente%20informaci%C3%B3n?%0A%0ASitio%20web:%0AEmail:%0AConsulta:"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
      >
        Hablemos
      </a>
    </div>
  );
}
