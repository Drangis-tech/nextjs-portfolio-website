// app/layout.tsx
"use client";  // Add this directive at the top

import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import Image from "next/image";  // Import Image component from Next.js
import { useEffect, useState } from "react";  // Import useEffect and useState

export const metadata: Metadata = {
  title: {
    default: "Pagerinkime Jūsų internetinį įvaizdį kartu su WebForge!",
    template: "%s | webforge.lt",
  },
  description: "Elektroninių puslapių, e-shopų kūrimas, marketingas, ir kt.",
  openGraph: {
    title: "Pagerinkime Jūsų internetinį įvaizdį kartu su WebForge!",
    description: "Elektroninių puslapių, e-shopų kūrimas, marketingas, ir kt.",
    url: "https://darbo.xyz/",
    siteName: "webforge.lt",
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
    title: "WebForge",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate the animation delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // Adjust the time according to your animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {!showContent ? (
          <div className="flex items-center justify-center h-screen">
            {/* Logo and Animated WebForge Text */}
            <div className="text-center animate-fade-in">
              <Image
                src="/logo.png"
                alt="WebForge Logo"
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <h1 className="text-4xl text-white animate-bounce">WebForge</h1>
            </div>
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}