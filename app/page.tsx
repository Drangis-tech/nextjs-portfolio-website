// app/page.tsx
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Particles from "./components/particles";

const navigation = [
  { name: "Atlikti Darbai", href: "/projects" },
  { name: "Apie Mus", href: "/apie-mus" },
  { name: "Kontaktai", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-col items-center justify-center z-10">
        <div className="relative flex items-center">
          {/* Adjust the logo size to match the text */}
          <Image
            src="/logo.png"
            alt="WebForge Logo"
            width={90}  // Adjust the width to match the height of the text
            height={90}  // Adjust the height to match the height of the text
            className="mr-4 animate-fade-in"
          />
          <h1 className="py-3.5 px-0.5 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
            WebForge
          </h1>
        </div>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500">
          Mes padedame verslams augti naudojant inovatyvius IT sprendimus.
        </h2>
      </div>
    </div>
  );
}