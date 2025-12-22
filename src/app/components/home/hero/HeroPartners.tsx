type Partner = {
  name: string;
  subtitle?: string;
};

const PARTNERS: Partner[] = [
  { name: "Mail Chimp", subtitle: "News Feed" },
  { name: "Slack", subtitle: "News Feed" },
  { name: "Instagram", subtitle: "News Feed" },
  { name: "Twitter", subtitle: "News Feed" },
];

export default function HeroPartners() {
  return (
    <div className="mt-10 grid gap-3 rounded-xl bg-white p-4 shadow-sm md:grid-cols-4">
      {PARTNERS.map((partner) => (
        <div
          key={partner.name}
          className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
        >
          <div className="h-9 w-9 rounded-full bg-slate-100" />

          <div className="leading-tight">
            <div className="text-xs font-semibold">{partner.name}</div>
            {partner.subtitle && (
              <div className="text-[10px] uppercase tracking-wide text-slate-500">
                {partner.subtitle}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
