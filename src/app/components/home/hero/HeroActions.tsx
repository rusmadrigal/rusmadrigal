import Link from "next/link";

type HeroActionsProps = {
  primary: { label: string; href: string };
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
};

export default function HeroActions({
  primary,
  secondaryLabel = "Watch The Video",
  onSecondaryClick,
}: HeroActionsProps) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-4">
      <Link
        href={primary.href}
        className="rounded-md bg-slate-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-slate-800"
      >
        {primary.label}
      </Link>

      <button
        type="button"
        onClick={onSecondaryClick}
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-800"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-300 text-slate-900 shadow-sm">
          ▶
        </span>
        {secondaryLabel}
      </button>
    </div>
  );
}
