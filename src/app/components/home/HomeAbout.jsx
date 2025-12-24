import Link from "next/link";
import Image from "next/image";

export default function HomeAbout() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Imagen */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
          <div className="aspect-[16/10]">
            <Image
              src="/images/home/seotech.webp"
              alt="SEO técnico y rendimiento web"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Contenido */}
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
            SEO Técnico & Web Performance
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Trabajo con sitios reales, equipos reales y problemas reales: rastreo, indexación,
            JavaScript SEO, arquitectura web y Core Web Vitals. Sin humo. Sin recetas mágicas.
          </p>

          {/* Métricas */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-xl font-bold text-slate-900">10+</p>
              <p className="text-slate-500">Años de experiencia</p>
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900">20+</p>
              <p className="text-slate-500">Mercados</p>
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900">CWV</p>
              <p className="text-slate-500">Optimización real</p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/sobre-mi"
            className="mt-8 inline-flex rounded-md bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white hover:bg-slate-800"
          >
            Ver cómo trabajo
          </Link>
        </div>
      </div>
    </section>
  );
}
