import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { request } from "@/lib/datocms";
import { Header } from "@/components/Header";
import { LAYOUT_QUERY } from "@/queries/layout-query";
import { LayoutQuery } from "@/types/generated";

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

export async function generateMetadata(): Promise<Metadata> {
  const data = await getRootLayoutData();
  const title = data._site.globalSeo?.fallbackSeo?.title || "";
  const description = data._site.globalSeo?.fallbackSeo?.description || "";
  const image = data._site.globalSeo?.fallbackSeo?.image?.url || "";
  const favicon = data._site.favicon?.url || "";

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || ""),
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    openGraph: {
      images: image,
    },
    description: description,
    icons: {
      icon: favicon,
    },
    authors: [{ name: "Thomas", url: "https://thmsmtylr.com" }],
    creator: "Thomas Taylor",
  };
}

async function getRootLayoutData(): Promise<LayoutQuery> {
  const data = await request({ query: LAYOUT_QUERY });
  return { ...(data as LayoutQuery) };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getRootLayoutData();
  const title = data._site.globalSeo?.fallbackSeo?.title || "";
  const mainMenu = data?.mainMenu;

  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${sans.variable} scroll-smooth bg-frosting-cream font-serif text-jurassic-park antialiased`}
      >
        <Header title={title} mainMenu={mainMenu} />
        {children}
      </body>
    </html>
  );
}
