import Link from "next/link";

type HeaderLogoProps = {
  brandName: string;
};

export default function HeaderLogo({ brandName }: HeaderLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white">
        <span className="h-3 w-3 rounded-full bg-emerald-500" />
      </span>
      <span className="text-sm font-semibold tracking-wide">{brandName}</span>
    </Link>
  );
}
