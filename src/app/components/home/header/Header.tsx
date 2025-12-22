import HeaderLogo from "./HeaderLogo";
import HeaderNav, { NavItem } from "./HeaderNav";
import HeaderCTA from "./HeaderCTA";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#", active: true },
  { label: "About me", href: "#" },
  { label: "Services", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Header() {
  return (
    <header className="mx-auto max-w-6xl px-6 py-5">
      <nav className="flex items-center justify-between">
        <HeaderLogo brandName="Rus Madrigal" />
        <HeaderNav items={NAV_ITEMS} />
        <HeaderCTA href="#" label="Get Started" />
      </nav>
    </header>
  );
}
