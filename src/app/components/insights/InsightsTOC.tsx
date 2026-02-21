"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; heading: string };

function buildToc(): TocItem[] {
  const root = document.querySelector("[data-insight-content]") ?? document;

  const headings = Array.from(root.querySelectorAll<HTMLElement>("h2[id], h3[id]"));

  return headings
    .map((h) => ({
      id: h.id,
      heading: (h.textContent ?? "").trim(),
    }))
    .filter((x) => x.id && x.heading);
}

export default function InsightsTOC() {
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    // defer para evitar warning/lint de setState sincrónico dentro del effect
    const raf = requestAnimationFrame(() => {
      setToc(buildToc());
    });

    // Si el contenido puede cambiar (Sanity/PortableText, hydration, etc.)
    const root = document.querySelector("[data-insight-content]");
    if (!root) return () => cancelAnimationFrame(raf);

    const observer = new MutationObserver(() => {
      requestAnimationFrame(() => setToc(buildToc()));
    });

    observer.observe(root, { subtree: true, childList: true, characterData: true });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  if (!toc.length) return null;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">Índice de contenido</div>

      <nav className="mt-4 space-y-2">
        {toc.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className="block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-50"
            onClick={(e) => {
              e.preventDefault();

              const el = document.getElementById(t.id);
              if (!el) return;

              const OFFSET = 88; // header sticky
              const y = el.getBoundingClientRect().top + window.scrollY - OFFSET;
              window.scrollTo({ top: y, behavior: "smooth" });

              history.pushState(null, "", `#${t.id}`);
            }}
          >
            {t.heading}
          </a>
        ))}
      </nav>
    </div>
  );
}
