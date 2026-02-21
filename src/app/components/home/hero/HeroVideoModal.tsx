"use client";

import { useEffect } from "react";

type HeroVideoModalProps = {
  open: boolean;
  onClose: () => void;
  youtubeId: string; // ejemplo: "dQw4w9WgXcQ"
  title?: string;
};

export default function HeroVideoModal({
  open,
  onClose,
  youtubeId,
  title = "Video",
}: HeroVideoModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={onClose} // click fuera
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()} // evita cerrar al click adentro
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-slate-900 hover:bg-black/20"
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div className="aspect-video bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/v-fcnYgebb0?list=PLAK1ErK60OT96gpW2abMbXaD2GwPsZNWU&autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
