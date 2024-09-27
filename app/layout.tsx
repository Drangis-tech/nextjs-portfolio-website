"use client";

import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Analytics } from "./components/analytics";
import Script from "next/script"; // Import Script from next/script
import Footer from "./components/Footer"; // Import the Footer component
import GridPattern from "./components/grid-pattern"; // Import GridPattern component

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
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body className={`bg-black min-h-screen flex flex-col relative`}>
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <GridPattern
            width={40}
            height={40}
            className="opacity-30" // Set GridPattern to cover the entire background
            strokeDasharray="2,2"
          />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 relative z-10">{children}</main>

        {/* Footer */}
        <div className="relative z-20">
          <Footer /> {/* Footer will now be unaffected by the grid */}
        </div>

        {/* Add Cookiebot Script */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="7e5eff01-744b-463a-aab1-730e4c3f94bd"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="afterInteractive" // Ensures the script loads after the page becomes interactive
        />
      </body>
    </html>
  );
}