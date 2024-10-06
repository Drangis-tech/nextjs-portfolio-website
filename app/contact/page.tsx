"use client";

import React, { useEffect } from "react";
import { Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import GridPattern from '../components/grid-pattern'; // Import the GridPattern component
import Footer from '../components/Footer'; // Import the Footer component

const socials = [
  {
    icon: <Mail size={20} />,
    href: "mailto:info@pavadinimas.lt",
    label: "Elektroninis paštas",
    handle: "info@brandforge.lt",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/company/brandforge-lt/",
    label: "LinkedIn",
    handle: "@Brandforge",
  },
  {
    icon: <Phone size={20} />,
    href: "tel:+37066953689",
    label: "Tel. Numeris",
    handle: "+370 669 53 689",
  },
];

export default function Contact() {
  useEffect(() => {
    // Set the document title
    document.title = "Kontaktai | Brandforge";
  }, []);

  return (
    <div className="relative min-h-screen bg-black"> {/* Set the background to black */}
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0">
        <GridPattern
          width={40}
          height={40}
          className="w-full h-full opacity-15 pointer-events-none"
          strokeDasharray="0"
        />
      </div>

      {/* Fading Effect at the Edges */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Fade */}
        <div className="absolute top-0 left-0 right-0 h-1/6 bg-gradient-to-b from-black to-transparent" />
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-1/6 bg-gradient-to-t from-black to-transparent" />
        {/* Left Fade */}
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent" />
        {/* Right Fade */}
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent" />
      </div>

      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto relative z-10">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s, index) => (
            <Card key={index}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* Add Footer with margin above */}
      <div className="mb-40"> {/* Adjust margin as needed */}
        <Footer />
      </div>
    </div>
  );
}