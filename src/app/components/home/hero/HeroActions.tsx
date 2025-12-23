type HeroActionsProps = {
  secondaryLabel?: string;

  onSecondaryClick?: () => void;
};

export default function HeroActions({
  secondaryLabel = "Ver curso de SEO técnico (playlist)",

  onSecondaryClick,
}: HeroActionsProps) {
  return (
    <div className="mt-10 flex items-start gap-6">
      {/* Flecha centrada respecto al botón */}
      <div className="hidden md:flex h-14 w-8 items-center justify-center">
        <span className="text-3xl leading-none text-slate-400">→</span>
      </div>

      {/* CTA + texto */}
      <div className="flex flex-col">
        <button
          type="button"
          onClick={onSecondaryClick}
          className="group inline-flex items-center gap-4"
        >
          <span className="play-pulse inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-slate-900 shadow-lg transition-transform group-hover:scale-105">
            ▶
          </span>

          <span className="text-sm font-semibold uppercase tracking-wide text-slate-800">
            {secondaryLabel}
          </span>
        </button>

        <span className="mt-1 pl-[72px] text-xs text-slate-500">

        </span>
      </div>
    </div>
  );
}
