"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import { Navigation } from './components/nav';
import { Card } from './components/card';

export default function Home() {
  useEffect(() => {
    // Load the particle animation script for the background
    const script = document.createElement("script");
    script.src = "/canvasAnimation.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    document.title = "Jūsų geriausias IT partneris | Brandforge.lt";
  }, []);

  return (
    <>
      {/* Background Particle Effect */}
      <div className="relative min-h-screen flex flex-col items-center justify-center w-screen overflow-hidden bg-black">
        {/* Canvas for particle effect */}
        <canvas id="bgCanvas" className="absolute inset-0 w-full h-full pointer-events-none z-0"></canvas>

        {/* Navigation Bar */}
        <header className="absolute top-0 left-0 w-full z-30">
          <Navigation />
        </header>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-center text-white px-4 md:px-8 flex-1 z-20 mt-32 md:mt-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Idėja, Strategija, Kodas = Jūsų verslo augimas
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8">
            Paverčiame jūsų idėjas veikiančiais sprendimais, o svetaines – įrankiais, kurie augina jūsų verslą ir prekės ženklą.
          </p>
          <div className="mb-6 md:mb-8">
            <Link href="/sign-up">
              <a className="px-8 py-4 text-black bg-white rounded-lg hover:bg-gray-200 transition inline-flex items-center">
                Skaityti daugiau
                <span className="ml-2">→</span>
              </a>
            </Link>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full flex flex-col md:flex-row justify-center px-4 md:px-8 gap-4 md:gap-8 mt-8 md:mt-12 mb-8 z-20">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8 md:justify-center">
            {/* Transparent cards with hover effects */}
            <Card className="h-[250px] w-[300px] bg-[rgba(28,28,30,0.6)] hover:bg-[rgba(44,44,46,0.8)] p-6">
              <article className="relative w-full h-full p-6 bg-transparent flex flex-col justify-between">
                <div className="text-4xl text-zinc-100">
                  {/* Include icons if needed */}
                </div>
                <div>
                  <h3 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl">
                    Collaboration infrastructure
                  </h3>
                  <p className="mt-2 leading-6 text-zinc-400 group-hover:text-zinc-300">
                    WebSocket edge infrastructure and reliable connection engine.
                  </p>
                </div>
              </article>
            </Card>
            <Card className="h-[250px] w-[300px] bg-[rgba(28,28,30,0.6)] hover:bg-[rgba(44,44,46,0.8)] p-6">
              <article className="relative w-full h-full p-6 bg-transparent flex flex-col justify-between">
                <div className="text-4xl text-zinc-100">
                  {/* Include icons if needed */}
                </div>
                <div>
                  <h3 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl">
                    Zero configuration
                  </h3>
                  <p className="mt-2 leading-6 text-zinc-400 group-hover:text-zinc-300">
                    Scale to millions. No complex configuration required.
                  </p>
                </div>
              </article>
            </Card>
            <Card className="h-[250px] w-[300px] bg-[rgba(28,28,30,0.6)] hover:bg-[rgba(44,44,46,0.8)] p-6">
              <article className="relative w-full h-full p-6 bg-transparent flex flex-col justify-between">
                <div className="text-4xl text-zinc-100">
                  {/* Include icons if needed */}
                </div>
                <div>
                  <h3 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl">
                    Effortless scaling
                  </h3>
                  <p className="mt-2 leading-6 text-zinc-400 group-hover:text-zinc-300">
                    Built to handle any traffic on your collaborative experiences.
                  </p>
                </div>
              </article>
            </Card>
            <Card className="h-[250px] w-[300px] bg-[rgba(28,28,30,0.6)] hover:bg-[rgba(44,44,46,0.8)] p-6">
              <article className="relative w-full h-full p-6 bg-transparent flex flex-col justify-between">
                <div className="text-4xl text-zinc-100">
                  {/* Include icons if needed */}
                </div>
                <div>
                  <h3 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl">
                    No maintenance required
                  </h3>
                  <p className="mt-2 leading-6 text-zinc-400 group-hover:text-zinc-300">
                    Spend your time building, not maintaining infrastructure.
                  </p>
                </div>
              </article>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}