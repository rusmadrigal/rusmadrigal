export default function SEOAlertsSignupSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Alertas SEO y Dashboards
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
          Actualizaciones puntuales sobre SEO técnico, cambios reales en Google, dashboards de
          Looker Studio y recursos prácticos.
          <strong className="font-semibold text-slate-700"> Sin spam. Sin humo.</strong>
        </p>

        <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
            className="
              h-11 w-full rounded-md border border-slate-200 bg-white px-4
              text-sm text-slate-900 outline-none
              focus:border-slate-400 focus:ring-1 focus:ring-slate-300
            "
          />

          <button
            type="button"
            className="
              h-11 rounded-md bg-slate-900 px-6
              text-xs font-semibold uppercase tracking-wide text-white
              transition hover:bg-slate-800
            "
          >
            Recibir alertas
          </button>
        </form>

        <p className="mt-4 text-xs text-slate-500">
          Frecuencia baja (1–2 emails al mes). Cancelás cuando quieras.
        </p>
      </div>
    </section>
  );
}
