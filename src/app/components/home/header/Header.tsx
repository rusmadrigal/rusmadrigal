"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderLogo from "./HeaderLogo";
import HeaderNav, { NavItem } from "./HeaderNav";
import HeaderCTA from "./HeaderCTA";
import { Menu, X } from "lucide-react";

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "/seo" },
  { label: "Insights", href: "/insights" },
  { label: "Recursos", href: "/looker-studio" },
];

// Normaliza para evitar problemas por trailing slash
function normalizePath(path: string) {
  if (!path) return "/";
  const clean = path.split("?")[0].split("#")[0];
  if (clean === "/") return "/";
  return clean.endsWith("/") ? clean.slice(0, -1) : clean;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItemsWithActive = useMemo(() => {
    const current = normalizePath(pathname || "/");

    return NAV_ITEMS.map((item) => {
      const href = normalizePath(item.href);

      // Activo exacto o por sección (ej: /insights/slug activa /insights)
      const isActive =
        href === "/" ? current === "/" : current === href || current.startsWith(`${href}/`);

      return { ...item, active: isActive };
    });
  }, [pathname]);

  // Evita scroll del body cuando el drawer está abierto
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header className="mx-auto max-w-6xl px-6 py-5">
      {/* Top bar */}
      <nav className="flex items-center justify-between">
        <HeaderLogo brandName="Rus Madrigal" tagline="SEO & Web Performance" />

        {/* Desktop nav */}
        <HeaderNav items={navItemsWithActive} />

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <HeaderCTA
            href="https://wa.me/50687773420?text=Hola,%20soy%20Rus%20Madrigal.%0A%0APara%20poder%20ayudarte%20mejor,%20%C2%BFpodr%C3%ADas%20compartirme%20la%20siguiente%20informaci%C3%B3n?%0A%0ASitio%20web:%0AEmail:%0AConsulta:"
            label="Contáctame"
          />
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
          aria-label="Abrir menú"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile overlay + drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl ring-1 ring-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-900">Rus Madrigal</span>
                <span className="text-xs text-slate-500">SEO & Web Performance</span>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:bg-slate-50"
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-5 py-4">
              <div className="flex flex-col gap-2">
                {navItemsWithActive.map((item) => (
                  <Link
                    key={`${item.label}-${item.href}`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                      item.active
                        ? "bg-amber-50 text-amber-800 ring-1 ring-amber-100"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        item.active ? "bg-amber-500" : "bg-slate-200"
                      }`}
                    />
                  </Link>
                ))}

                <div className="mt-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                  <p className="text-xs text-slate-600">¿Listo para mejorar tu performance SEO?</p>
                  <div className="mt-3">
                    <HeaderCTA
                      href="https://wa.me/50687773420?text=Hola,%20soy%20Rus%20Madrigal.%0A%0APara%20poder%20ayudarte%20mejor,%20%C2%BFpodr%C3%ADas%20compartirme%20la%20siguiente%20informaci%C3%B3n?%0A%0ASitio%20web:%0AEmail:%0AConsulta:"
                      label="Contáctame"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 px-5 py-4">
              <p className="text-xs text-slate-500">Respondo en WhatsApp lo antes posible.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
