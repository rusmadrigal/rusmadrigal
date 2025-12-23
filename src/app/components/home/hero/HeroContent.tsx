"use client";

import { useState } from "react";
import HeroTitle from "./HeroTitle";
import HeroActions from "./HeroActions";
import HeroVideoModal from "./HeroVideoModal";

export default function HeroContent() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <div>
      <HeroTitle lines={["SEO Técnico", "y Rendimiento Web"]} />

      <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
        Notas y recursos sobre rastreo, indexación, JavaScript SEO y Core Web Vitals. Enfoque
        práctico, sin humo, con decisiones técnicas reales.
      </p>

      {/* 👉 AQUÍ está la clave */}
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
