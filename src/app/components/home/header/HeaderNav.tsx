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
      {items.map((item) => {
        const isActive = item.active;

        return (
          <Link
            key={`${item.label}-${item.href}`}
            href={item.href}
            className={`group relative pb-1 font-medium transition-colors ${
              isActive ? "text-amber-700" : "text-slate-700 hover:text-slate-900"
            }`}
          >
            {item.label}

            {/* underline */}
            <span
              className={`absolute left-1/2 -bottom-0.5 h-[2px] w-0 -translate-x-1/2 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-full ${
                isActive ? "w-full" : ""
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
}
