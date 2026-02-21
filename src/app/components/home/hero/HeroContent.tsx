"use client";

import { useState } from "react";
import HeroTitle from "./HeroTitle";
import HeroActions from "./HeroActions";
import HeroVideoModal from "./HeroVideoModal";

export default function HeroContent() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <div>
      <HeroTitle lines={["AI-Driven SEO", "& Web Performance"]} />

      <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
        Estrategia SEO técnica e IA aplicada para visibilidad y crecimiento orgánico sostenible.
      </p>

      {/* Hero actions */}
      <HeroActions onSecondaryClick={() => setOpenVideo(true)} />

      {/* Modal */}
      <HeroVideoModal
        open={openVideo}
        onClose={() => setOpenVideo(false)}
        title="Curso de SEO Técnico"
        youtubeId="v-fcnYgebb0"
      />
    </div>
  );
}
