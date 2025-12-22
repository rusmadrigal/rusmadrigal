import Link from "next/link";

type HeaderCTAProps = {
  label: string;
  href: string;
};

export default function HeaderCTA({ label, href }: HeaderCTAProps) {
  return (
    <Link
      href={href}
      className="rounded-md bg-emerald-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm hover:bg-emerald-700"
    >
      {label}
    </Link>
  );
}
