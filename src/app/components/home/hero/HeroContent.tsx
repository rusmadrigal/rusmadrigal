import HeroTitle from "./HeroTitle";
import HeroActions from "./HeroActions";

export default function HeroContent() {
  return (
    <div>
      <HeroTitle lines={["Get Your", "Business To The", "Top Of The", "Search Engines"]} />

      <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
        Nulla porttitor accumsan tincidunt. Pellentesque adipiscing elit. Integer eget felis
        porttitor volutpat.
      </p>

      <HeroActions primary={{ label: "Contact Me", href: "#" }} secondaryLabel="Watch The Video" />
    </div>
  );
}
