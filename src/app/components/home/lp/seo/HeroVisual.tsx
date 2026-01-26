import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative flex items-end justify-center md:justify-end">
      {/* glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[150px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/70 blur-3xl md:left-auto md:right-0 md:w-[520px] md:translate-x-0" />

      {/* imagen */}
      <div className="relative h-[520px] w-full max-w-[460px] md:h-[560px] md:max-w-[500px]">
        <Image
          src="/images/home/rus-home.webp"
          alt="SEO Técnico"
          fill
          priority
          className="object-contain object-bottom"
        />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fbfbf6] to-transparent" />
      </div>
    </div>
  );
}
