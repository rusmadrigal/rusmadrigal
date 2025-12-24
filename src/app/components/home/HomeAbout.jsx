import Link from "next/link";
import Image from "next/image";

export default function HomeAbout() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid items-center gap-10 md:grid-cols-2">
                {/* Imagen */}
                <div className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
                    <div className="aspect-[16/10]">
                        <Image
                            src="/images/home/seotech.webp"
                            alt="SEO técnico y rendimiento web"
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:translate-y-[-2px]"
                            priority
                        />
                    </div>

                    {/* Overlay sutil para “premium feel” */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-transparent to-white/10" />
                    </div>
                </div>

                {/* Contenido */}
                <div>
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
                        SEO Técnico & Web Performance
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                        Trabajo en SEO desde 2009. En los últimos 15 años me he enfocado en SEO técnico y web
                        performance, participando en proyectos de turismo, deportes, finanzas, e-commerce,
                        automotriz y otras industrias.
                    </p>

                    {/* Métricas */}
                    <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                        <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                            <p className="text-xl font-bold text-slate-900">15+</p>
                            <p className="mt-1 text-slate-500">Años de experiencia</p>
                        </div>

                        <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                            <p className="text-xl font-bold text-slate-900">20+</p>
                            <p className="mt-1 text-slate-500">Mercados</p>
                        </div>

                        <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                            <p className="text-xl font-bold text-slate-900">+50</p>
                            <p className="mt-1 text-slate-500">Proyectos realizados</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link
                        href="/recursos"
                        className="mt-8 inline-flex items-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-all duration-200 ease-out hover:bg-slate-800 hover:translate-y-[-1px] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
                    >
                        Ver recursos y análisis
                        <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
