import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

import SiteFooter from "./components/layout/SiteFooter";
import GlobalScripts from "./components/analytics/GlobalScripts";

const SITE_URL = "https://www.rusmadrigal.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Consultor SEO Costa Rica | +15 años de experiencia",
    template: "%s | Rus Madrigal",
  },

  description:
    "Consultor SEO internacional en SEO técnico, web performance e IA. Comparto insights, recursos y servicios profesionales basados en experiencia real.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Rus Madrigal",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Global scripts (GTM, etc.) */}
        <GlobalScripts />

        {children}

        <SiteFooter />

        {/* Sonner Toaster */}
        <Toaster position="top-center" richColors closeButton expand duration={2500} />
      </body>
    </html>
  );
}
