import { Suspense } from "react";

import Header from "./components/home/header/Header";
import Hero from "./components/home/hero/Hero";
import HomeAbout from "@/app/components/home/body/HomeAbout";
import ServicesSection from "./components/home/body/ServicesSection";
import FAQSection from "./components/home/body/FAQSection";
import TestimonialsSection from "./components/home/body/Testimonials";
import SEOInsightsSection from "./components/home/body/SEOInsightsSection";
import LookerStudioTemplatesSection from "./components/home/body/LookerStudioTemplatesSection";
import SEOPlaylistSection from "./components/home/body/SEOPlaylistSection";

const asyncSectionFallback = <div className="mx-auto max-w-6xl px-6 py-14" />;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fbfbf6] text-slate-900">
      <Header />
      <Hero />
      <HomeAbout />
      <ServicesSection />
      <FAQSection />
      <TestimonialsSection />
      <Suspense fallback={asyncSectionFallback}>
        <SEOInsightsSection />
      </Suspense>
      <Suspense fallback={asyncSectionFallback}>
        <LookerStudioTemplatesSection />
      </Suspense>
      <Suspense fallback={asyncSectionFallback}>
        <SEOPlaylistSection />
      </Suspense>
    </div>
  );
}
