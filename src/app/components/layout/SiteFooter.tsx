import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0c2b32] text-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-semibold tracking-wide">Rus Madrigal</span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              SEO técnico, rendimiento web y análisis de datos para buscadores y agentes de IA.
              Enfoque práctico, sin humo.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-sm font-bold">Navegación</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {[
                { label: "Inicio", href: "/" },
                { label: "Sobre mí", href: "/about" },
                { label: "Servicios", href: "/services" },
                { label: "SEO Insights", href: "/insights" },
                { label: "Contacto", href: "/contact" },
              ].map((x) => (
                <li key={x.label}>
                  <Link href={x.href} className="hover:text-white">
                    {x.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Áreas de enfoque */}
          <div>
            <h4 className="text-sm font-bold">Áreas de enfoque</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {[
                "SEO técnico",
                "JavaScript SEO",
                "Core Web Vitals",
                "Dashboards en Looker Studio",
                "Auditorías SEO",
                "Análisis de datos",
              ].map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-bold">Contacto</h4>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>seo@rusmadrigal.com</span>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/in/rusmadrigal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Inferior */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>© 2025 Rus Madrigal. Todos los derechos reservados.</div>

          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Política de privacidad
            </Link>
            <Link href="/terms" className="hover:text-white">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
