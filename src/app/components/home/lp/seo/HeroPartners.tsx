import Image from "next/image";

type Partner = {
  name: string;
  logo: string;
};

const PARTNERS: Partner[] = [
  { name: "Publicis Groupe", logo: "/images/home/partners/logo1.webp" },
  { name: "SBR", logo: "/images/home/partners/logo2.webp" },
  { name: "TripAdvisor", logo: "/images/home/partners/logo3.webp" },
  { name: "Connect", logo: "/images/home/partners/logo4.webp" },
];

export default function HeroPartners() {
  return (
    <div className="mt-12 grid items-center gap-6 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-[280px_1fr]">
      {/* Leyenda */}
      <div className="flex items-center">
        <p className="text-sm font-medium leading-relaxed text-slate-600">
          Empresas en las que he trabajado
        </p>
      </div>

      {/* Logos */}
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {PARTNERS.map((partner) => (
          <div
            key={partner.name}
            className="
    flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4
    transition-all duration-200 ease-out
    hover:-translate-y-1 hover:shadow-md
  "
          >
            {/* Círculo más grande */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 ring-1 ring-slate-100">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="48px"
                className="object-contain p-2"
                priority={false}
              />
            </div>

            <span className="text-sm font-semibold text-slate-800">{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
