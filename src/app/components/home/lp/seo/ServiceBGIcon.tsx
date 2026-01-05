type Props = {
  type: "gear" | "chart" | "puzzle" | "arrows" | "nodes" | "map";
};

const posByType: Record<Props["type"], string> = {
  gear: "-right-10 -top-10 rotate-[8deg]",
  chart: "-right-12 -top-12 rotate-[6deg]",
  puzzle: "-right-12 -top-12 rotate-[10deg]",
  arrows: "-right-12 -top-12 rotate-[8deg]",
  nodes: "-right-12 -top-12 rotate-[6deg]",
  map: "-right-12 -top-12 rotate-[8deg]",
};

export default function ServiceBGIcon({ type }: Props) {
  return (
    <div
      className={[
        "pointer-events-none absolute",
        posByType[type],
        // tamaño grande = watermark, no “ícono”
        "h-44 w-44",
        // más sutil + suavizado
        "opacity-[0.035] blur-[0.3px]",
        // solo desktop (recomendado)
        "hidden lg:block",
      ].join(" ")}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full text-slate-900"
      >
        {type === "gear" && (
          <>
            <circle cx="12" cy="12" r="3.2" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06-1.8 1.8-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21h-2v-.1a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06-1.8-1.8.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3v-2h.1a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06 1.8-1.8.06.06a1.65 1.65 0 0 0 1.82.33A1.65 1.65 0 0 0 11 3.1V3h2v.1a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06 1.8 1.8-.06.06a1.65 1.65 0 0 0-.33 1.82A1.65 1.65 0 0 0 20.9 11H21v2h-.1a1.65 1.65 0 0 0-1.51 1z" />
          </>
        )}

        {type === "chart" && (
          <>
            <path d="M4 4v16h16" />
            <path d="M7.5 13.5l3-3 2.5 2.5 4-5" />
          </>
        )}

        {type === "puzzle" && (
          <>
            <path d="M14 7a2 2 0 1 0-4 0v1H8a2 2 0 0 0-2 2v2h1a2 2 0 1 1 0 4H6v2a2 2 0 0 0 2 2h2v-1a2 2 0 1 1 4 0v1h2a2 2 0 0 0 2-2v-2h-1a2 2 0 1 1 0-4h1v-2a2 2 0 0 0-2-2h-2V7z" />
          </>
        )}

        {type === "arrows" && (
          <>
            <path d="M17 2l4 4-4 4" />
            <path d="M3 12V10a4 4 0 0 1 4-4h14" />
            <path d="M7 22l-4-4 4-4" />
            <path d="M21 12v2a4 4 0 0 1-4 4H3" />
          </>
        )}

        {type === "nodes" && (
          <>
            <circle cx="6" cy="6" r="2" />
            <circle cx="18" cy="6" r="2" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="18" r="2" />
            <path d="M8 6h8" />
            <path d="M6 8v8" />
            <path d="M18 8v8" />
            <path d="M8 18h8" />
          </>
        )}

        {type === "map" && (
          <>
            <path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" />
            <path d="M9 3v15" />
            <path d="M15 6v15" />
          </>
        )}
      </svg>
    </div>
  );
}
