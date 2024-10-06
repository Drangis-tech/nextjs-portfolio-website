"use client";

import "../global.css"; // Ensure this imports your CSS with the necessary styles
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Analytics } from "./components/analytics";

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
        {/* Main Content Area */}
        <main className="flex-1 relative z-10 pb-16"> {/* Add bottom padding to ensure footer visibility */}
          {children}
        </main>
      </body>
    </html>
  );
}