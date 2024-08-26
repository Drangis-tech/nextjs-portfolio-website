"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Navigation } from './components/nav';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    const preventDefault = (e: Event) => e.preventDefault();
    document.body.addEventListener('touchmove', preventDefault, { passive: false });

    const script = document.createElement("script");
    script.src = "/canvasAnimation.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.classList.remove('no-scroll');
      document.body.removeEventListener('touchmove', preventDefault);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black">
      <canvas id="bgCanvas" className="absolute top-0 left-0 w-full h-full" />
      <canvas id="terCanvas" className="absolute top-0 left-0 w-full h-full" />

      {/* Wrapper for consistent alignment */}
      <div className="absolute top-0 left-0 w-full flex justify-center z-40">
        <Navigation />
      </div>

      <div className="hidden w-screen h-px md:block animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="flex flex-col items-center justify-center z-10">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="WebForge Logo"
            width={80}
            height={80}
            className="mb-4 animate-fade-in"
          />
          <h1
            className="text-4xl text-transparent bg-white bg-clip-text duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap"
            style={{ lineHeight: "1.2em", paddingBottom: "0.2em" }}
          >
            BrandForge
          </h1>
        </div>
      </div>

      <div className="hidden w-screen h-px md:block animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 shine-effect">
          Mes padedame verslams augti naudojant inovatyvius IT sprendimus.
        </h2>
      </div>
    </div>
  );
}