import Link from "next/link";

export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

type HeaderNavProps = {
  items: NavItem[];
};

export default function HeaderNav({ items }: HeaderNavProps) {
  return (
    <div className="hidden items-center gap-7 text-sm md:flex">
      {items.map((item) => (
        <Link
          key={`${item.label}-${item.href}`}
          href={item.href}
          className={item.active ? "text-amber-700" : "hover:text-slate-700"}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
