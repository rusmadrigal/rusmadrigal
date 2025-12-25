import Image from "next/image";
import { Quote, Linkedin } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  highlight?: boolean;
  image?: string; // (no se usa en cards, lo dejamos por si luego querés)
  linkedinUrl?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rodrigo De Bedout",
    role: "Web Design & Development",
    text: "Encontrar SEO realmente buenos en Centroamérica es como buscar una aguja en un pajar. Si te cruzás con Rus, encontraste una aguja de oro. ¡Cuidalo!",
    highlight: true,
    linkedinUrl:
      "https://www.linkedin.com/in/rusmadrigal/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    name: "Faith Anne Mulvihill",
    role: "Licensed Real Estate Broker (Chicago)",
    text: "Rus es un profesional polifacético con excelentes habilidades de atención al cliente. Responde siempre con una actitud profesional, positiva y genuinamente atenta en cada proyecto.",
    linkedinUrl:
      "https://www.linkedin.com/in/rusmadrigal/details/recommendations/?detailScreenTabIndex=0",
  },

  {
    name: "Ken Armour",
    role: "Construction/Development at KBA Company",
    text: "He trabajado con Rus durante aproximadamente 6 años. Es una persona extremadamente conocedora, enérgica, organizada y detallista. Su apoyo ha ayudado a que mi empresa mejore y obtenga mejores resultados. Sin duda, seguiré utilizando sus servicios.",
    linkedinUrl:
      "https://www.linkedin.com/in/rusmadrigal/details/recommendations/?detailScreenTabIndex=0",
  },
];

function LinkedInButton({ url, label = "Ver en LinkedIn" }: { url?: string; label?: string }) {
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        inline-flex items-center justify-center gap-2 rounded-full
        border border-slate-200 bg-slate-100 px-3 py-2
        text-xs font-semibold text-slate-600
        transition-all
        hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40
      "
    >
      <Linkedin className="h-4 w-4" />
      {label}
    </a>
  );
}

export default function TestimonialsSection() {
  const featured = TESTIMONIALS.find((t) => t.highlight) ?? TESTIMONIALS[0];
  const rest = TESTIMONIALS.filter((t) => t !== featured);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        {/* Columna izquierda */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Testimonios de clientes
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            Opiniones reales de personas con las que trabajé en SEO, rendimiento web y soporte
            técnico. Podés validar cada recomendación en LinkedIn.
          </p>

          {/* Imagen con estilo tipo LinkedIn */}
          <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
            {/* “Chrome” superior estilo tarjeta */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <Linkedin className="h-4 w-4" />
                Recomendaciones
              </div>
            </div>

            <div className="group relative">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/home/reviews.webp"
                  alt="Clientes y proyectos de SEO"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  priority={false}
                />
              </div>

              {/* Borde interno sutil (look “card”) */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-200/60" />
            </div>
          </div>

          {/* CTA general */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://www.linkedin.com/in/rusmadrigal/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>

            <p className="text-xs leading-5 text-slate-500">
              * Algunas recomendaciones pueden requerir iniciar sesión.
            </p>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="grid gap-5">
          {/* Destacada */}
          <article className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <div className="absolute right-5 top-5 text-slate-200">
              <Quote className="h-8 w-8" />
            </div>

            <p className="pr-10 text-sm leading-6 text-slate-700">{featured.text}</p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Header sin avatar */}
              <div className="min-w-0">
                <div className="text-sm font-semibold text-slate-900">{featured.name}</div>
                <div className="mt-0.5 text-xs text-slate-500">{featured.role}</div>
              </div>

              <div className="shrink-0">
                <LinkedInButton url={featured.linkedinUrl} />
              </div>
            </div>
          </article>

          {/* Resto */}
          <div className="grid gap-5 md:grid-cols-2">
            {rest.map((t) => (
              <article
                key={t.name}
                className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-slate-200">
                    <Quote className="h-6 w-6" />
                  </div>

                  {/* Botón compacto (evita que se “apriete”) */}
                  <div className="shrink-0">
                    <LinkedInButton url={t.linkedinUrl} label="Validar" />
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">{t.text}</p>

                {/* Separador + nombre/rol (sin avatar) */}
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{t.role}</div>
                </div>
              </article>
            ))}
          </div>

          {/* Nota */}
          <p className="text-xs leading-5 text-slate-500">
            * Si querés, puedo cambiar el link “Validar” para que vaya directo a cada recomendación
            específica.
          </p>
        </div>
      </div>
    </section>
  );
}
