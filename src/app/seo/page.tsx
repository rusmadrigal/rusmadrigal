// app/seo/page.tsx
import type { Metadata } from "next";

import Header from "@/app/components/home/header/Header";
import HeroSEO from "@/app/components/home/lp/seo/Hero";

import SEOIntro from "@/app/components/home/lp/seo/SEOIntro";
import SEOServices from "@/app/components/home/lp/seo/SEOServices";
import SEOMethodology from "@/app/components/home/lp/seo/SEOMethodology";
import SEOFinalCTA from "@/app/components/home/lp/seo/SEOFinalCTA";

const SITE_URL = "https://rusmadrigal.com";

export const metadata: Metadata = {
  title: "SEO en Costa Rica | Consultor SEO +15 años de experiencia",
  description:
    "Consultoría SEO técnica y de performance en Costa Rica: auditorías, Core Web Vitals, soporte a desarrollo y migraciones.",
  alternates: { canonical: `${SITE_URL}/seo` },
  openGraph: {
    type: "website",
    title: "SEO en Costa Rica | Consultor SEO +15 años de experiencia",
    description:
      "Consultoría SEO técnica y de performance en Costa Rica: auditorías, Core Web Vitals, soporte a desarrollo y migraciones.",
    url: `${SITE_URL}/seo`,
  },
};

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-[#fbfbf6] text-slate-900">
      <Header />

      {/* Hero consistente con el home */}
      <HeroSEO />

      <main className="mx-auto max-w-6xl px-6 pb-16">
        <SEOIntro />
        <SEOServices />
        <SEOMethodology />
        <SEOFinalCTA />
      </main>
    </div>
  );
}
