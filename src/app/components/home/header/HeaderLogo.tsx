import Link from "next/link";
type HeaderLogoProps = {
  brandName: string;
  tagline?: string;
};

export default function HeaderLogo({
  brandName,
  tagline = "SEO & Web Performance",
}: HeaderLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white">
        <span className="pulse-ring absolute h-full w-full rounded-full bg-emerald-400" />
        <span className="relative h-3 w-3 rounded-full bg-emerald-500" />
      </span>

      <span className="flex flex-col leading-tight">
        <span className="text-sm font-semibold tracking-wide text-slate-900">{brandName}</span>
        <span className="text-[11px] uppercase tracking-wider text-slate-500">{tagline}</span>
      </span>
    </Link>
  );
}
