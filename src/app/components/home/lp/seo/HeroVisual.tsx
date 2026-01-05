import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative flex items-end justify-center md:justify-end">
      {/* glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[150px] w-[520px] -translate-y-1/2 rounded-full bg-amber-200/70 blur-3xl" />

      {/* imagen */}
      <div className="relative h-[520px] w-[460px] md:h-[560px] md:w-[500px]">
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
