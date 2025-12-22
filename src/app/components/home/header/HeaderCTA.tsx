import Link from "next/link";

type HeaderCTAProps = {
  label: string;
  href: string;
};

export default function HeaderCTA({ label, href }: HeaderCTAProps) {
  return (
    <Link
      href={href}
      className="
        group inline-flex items-center justify-center gap-1.5
        rounded-md bg-emerald-600 px-4 py-2
        text-xs font-semibold uppercase tracking-wide text-white
        shadow-sm
        transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:bg-emerald-700
        hover:shadow-[0_8px_20px_rgba(16,185,129,0.35)]
        active:translate-y-0 active:shadow-sm
      "
    >
      <span>{label}</span>

      <span
        aria-hidden
        className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}
