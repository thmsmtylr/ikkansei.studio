import localFont from "next/font/local";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const sans = localFont({
  src: "../public/modern-era-regular.ttf",
  display: "swap",
  variable: "--font-modern-era",
});

const serif = localFont({
  src: "../public/DomaineDisp-Regular.otf",
  display: "swap",
  variable: "--font-domaine-display",
});

export const metadata: Metadata = {
  title: "Ikkansei",
  description:
    "We specialize in delivering lasting value in the form of brands, websites, and products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} relative overflow-hidden scroll-smooth bg-frosting-cream font-sans text-jurassic-park antialiased dark:bg-eerie-black dark:text-frosting-cream`}
      >
        <Header title={metadata.title} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
