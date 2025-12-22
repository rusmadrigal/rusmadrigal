import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import HeroPartners from "./HeroPartners";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10 pt-4">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <HeroContent />
        <HeroVisual />
      </div>

      <HeroPartners />
    </section>
  );
}
