// app/metadata.ts

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Pagerinkime Jūsų internetinį įvaizdį kartu su BrandForge!",
    template: "%s | brandforge.lt",
  },
  description: "Elektroninių puslapių, e-shopų kūrimas, marketingas, ir kt.",
  openGraph: {
    title: "Pagerinkime Jūsų internetinį įvaizdį kartu su BrandForge!",
    description: "Elektroninių puslapių, e-shopų kūrimas, marketingas, ir kt.",
    url: "https://darbo.xyz/",
    siteName: "brandforge.lt",
    images: [
      {
        url: "https://c.files.bbci.co.uk/13278/production/_112565487_floyd.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "BrandForge",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};