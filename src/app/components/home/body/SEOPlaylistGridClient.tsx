"use client";

import { useEffect, useMemo, useState } from "react";
import { Play, X } from "lucide-react";

type VideoUI = {
  videoId: string;
  title: string;
  thumbnailUrl: string;
  publishedLabel: string;
  url: string;
};

export default function SEOPlaylistGridClient({ videos }: { videos: VideoUI[] }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");

  const activeEmbedUrl = useMemo(() => {
    if (!activeId) return "";
    // autoplay al abrir, modestbranding, etc.
    return `https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0&modestbranding=1`;
  }, [activeId]);

  function openVideo(v: VideoUI) {
    setActiveId(v.videoId);
    setActiveTitle(v.title);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    // importante: limpiar ID para detener el video
    setTimeout(() => {
      setActiveId(null);
      setActiveTitle("");
    }, 150);
  }

  // ESC para cerrar
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", onKeyDown);
    // bloquear scroll
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((v) => (
          <button
            key={v.videoId}
            type="button"
            onClick={() => openVideo(v)}
            className="
              group text-left
              overflow-hidden rounded-2xl bg-white
              shadow-sm ring-1 ring-slate-100
              transition hover:-translate-y-0.5 hover:shadow-md
              focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40
            "
            aria-label={`Reproducir: ${v.title}`}
          >
            <div className="relative">
              <div className="aspect-video bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.thumbnailUrl}
                  alt={v.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Overlay elegante */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-70 transition group-hover:opacity-90" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="
                    inline-flex items-center gap-2 rounded-full
                    bg-white/90 px-3 py-2 text-xs font-semibold text-slate-900
                    shadow-sm ring-1 ring-black/5
                    transition
                    group-hover:bg-white
                  "
                >
                  <Play className="h-4 w-4" />
                  Reproducir
                </span>
              </div>
            </div>

            <div className="p-4">
              <div className="line-clamp-2 text-sm font-semibold text-slate-900">{v.title}</div>
              <div className="mt-2 text-xs text-slate-500">{v.publishedLabel}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Reproductor de video"
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
            aria-label="Cerrar"
          />

          {/* Panel */}
          <div
            className="
              relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-white
              shadow-2xl ring-1 ring-black/10
            "
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-4">
              <div className="min-w-0">
                <div className="text-sm font-semibold text-slate-900 line-clamp-2">
                  {activeTitle}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Presioná <span className="font-semibold">ESC</span> para cerrar
                </div>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="
                  inline-flex h-9 w-9 items-center justify-center rounded-full
                  border border-slate-200 bg-white text-slate-700
                  transition hover:bg-slate-50
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40
                "
                aria-label="Cerrar video"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Video */}
            <div className="bg-black">
              <div className="aspect-video">
                {activeId ? (
                  <iframe
                    className="h-full w-full"
                    src={activeEmbedUrl}
                    title={activeTitle || "YouTube video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : null}
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-slate-500">Tip: clic afuera para cerrar.</div>

              {activeId ? (
                <a
                  href={`https://www.youtube.com/watch?v=${activeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center rounded-full
                    bg-slate-900 px-4 py-2 text-xs font-semibold text-white
                    transition hover:bg-slate-800
                  "
                >
                  Abrir en YouTube
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
