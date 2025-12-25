import Image from "next/image";
import { Quote } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  highlight?: boolean;
  image?: string; // opcional: foto del cliente (si la tenés)
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rodrigo De Bedout",
    role: "Web Design & Development",
    text: "Encontrar SEO realmente buenos en Centroamérica es como buscar una aguja en un pajar. Si te cruzás con Rus, encontraste una aguja de oro. ¡Cuidalo!",
    highlight: true,
  },
  {
    name: "Faith Anne Mulvihill",
    role: "Licensed Real Estate Broker (Chicago)",
    text: "Rus es un profesional polifacético con excelentes habilidades de atención al cliente. Responde siempre con una actitud profesional, positiva y genuinamente atenta en cada proyecto.",
  },
  {
    name: "Irene Hidalgo",
    role: "Entrepreneur",
    text: "He tenido la oportunidad de trabajar con Rus en temas de SEO y puedo asegurar que es excelente. He aprendido mucho de él y es, sin duda, uno de los mejores SEOs que he conocido en Costa Rica.",
  },
  {
    name: "Ken Armour",
    role: "Construction/Development at KBA Company",
    text: "He trabajado con Rus durante aproximadamente 6 años. Es una persona extremadamente conocedora, enérgica, organizada y detallista. Su apoyo ha ayudado a que mi empresa mejore y obtenga mejores resultados. Sin duda, seguiré utilizando sus servicios.",
  },
];

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase()).join("");
}

function Avatar({ name, image }: { name: string; image?: string }) {
  if (image) {
    return (
      <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
      {getInitials(name)}
    </div>
  );
}

export default function TestimonialsSection() {
  const featured = TESTIMONIALS.find((t) => t.highlight) ?? TESTIMONIALS[0];
  const rest = TESTIMONIALS.filter((t) => t !== featured);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* Columna izquierda: intro + imagen */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Testimonios de clientes
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            Opiniones reales de personas con las que he trabajado en SEO, rendimiento web y soporte técnico.
          </p>

          {/* Imagen (placeholder listo para reemplazar) */}
          <div className="mt-8 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200">
            <div className="relative aspect-[16/10]">
              {/* Cambiá esta ruta cuando tengas la imagen final */}
              <Image
                src="/images/home/testimonials.webp"
                alt="Clientes y proyectos de SEO"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Columna derecha: cards */}
        <div className="grid gap-5">
          {/* Card destacada */}
          <article className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <div className="absolute right-5 top-5 text-slate-200">
              <Quote className="h-8 w-8" />
            </div>

            <p className="text-sm leading-6 text-slate-700">{featured.text}</p>

            <div className="mt-5 flex items-center gap-3">
              <Avatar name={featured.name} image={featured.image} />
              <div className="leading-tight">
                <div className="text-sm font-semibold text-slate-900">{featured.name}</div>
                <div className="text-xs text-slate-500">{featured.role}</div>
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
                <div className="flex items-start justify-between gap-4">
                  <div className="text-slate-200">
                    <Quote className="h-6 w-6" />
                  </div>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-600">{t.text}</p>

                <div className="mt-4 flex items-center gap-3">
                  <Avatar name={t.name} image={t.image} />
                  <div className="leading-tight">
                    <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
