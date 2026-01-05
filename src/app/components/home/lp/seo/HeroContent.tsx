"use client";

import { useState } from "react";
import HeroTitle from "./HeroTitle";
import HeroActions from "./HeroActions";
import HeroVideoModal from "./HeroVideoModal";

export default function HeroContent() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <div>
      <HeroTitle lines={["Hola! soy Rus", "Consultor SEO"]} />

      <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
        Consultor SEO senior en Costa Rica con más de 15 años de experiencia. Estrategias técnicas, SEO on-page y crecimiento orgánico real para negocios y marcas.
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
