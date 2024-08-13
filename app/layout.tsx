// app/layout.tsx
"use client";  // Keep the use client directive

import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Analytics } from "./components/analytics";
import Image from "next/image";
import { useEffect, useState } from "react";

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