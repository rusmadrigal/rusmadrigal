export default function HeroVisual() {
  return (
    <div className="relative">
      {/* glow de fondo */}
      <div className="absolute right-0 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 rounded-full bg-amber-200/70 blur-3xl" />

      {/* tarjeta */}
      <div className="relative mx-auto h-[320px] w-[320px] overflow-hidden rounded-2xl bg-white shadow-[0_25px_60px_rgba(15,23,42,0.15)] md:ml-auto">
        {/* fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />

        {/* base */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-amber-100" />

        {/* silueta cuerpo */}
        <div className="absolute left-1/2 top-1/2 h-56 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-amber-500/80" />

        {/* cabeza */}
        <div className="absolute left-1/2 top-[42%] h-12 w-12 -translate-x-1/2 rounded-full bg-slate-200" />
      </div>
    </div>
  );
}
