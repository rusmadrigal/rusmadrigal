import Link from "next/link";

export default function CTASEOSection() {
  return (
    <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
      <div className="text-sm font-semibold">¿Necesitás apoyo en SEO?</div>

      <p className="mt-2 text-sm text-white/80">
        Ayudo a equipos a resolver problemas reales de SEO técnico, Core Web Vitals y medición.
      </p>

      <Link
        href="/#contact"
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
      >
        Hablemos
      </Link>
    </div>
  );
}
