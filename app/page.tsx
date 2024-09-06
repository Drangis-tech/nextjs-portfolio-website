"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import { Navigation } from './components/nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
        <div className="relative flex flex-col items-center justify-center text-center text-white px-4 md:px-8" style={{ height: '50vh' }}>
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Idėja, Strategija, Kodas
              <br className="hidden md:block" />
              <span className="block mt-4">Tai viskas ko reikia Jūsų verslui.</span>
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
        </div>

        {/* Cards Section */}
        <div className="w-full flex flex-col md:flex-row justify-center px-4 md:px-8 gap-4 md:gap-8 mt-8 md:mt-0 mb-8 z-20" style={{ height: '50vh' }}>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8 md:justify-center overflow-auto">
            {/* Transparent cards with hover effects and arrow icon */}
            <div className="relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 overflow-hidden" style={{ height: '250px', width: '300px' }}>
              <div className="relative z-20 p-4">
                <h3 className="text-lg font-semibold">Internetinių Puslapių kūrimas</h3>
                {/* Gap between title and description */}
                <p className="text-sm text-gray-500 mt-4">WebSocket edge infrastructure and reliable connection engine.</p>
              </div>
              <Link href="/internetiniu-puslapiu-kurimas">
                <a className="absolute bottom-4 right-4 text-black bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition" style={{ borderRadius: '50%' }}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </Link>
            </div>

            <div className="relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 overflow-hidden" style={{ height: '250px', width: '300px' }}>
              <div className="relative z-20 p-4">
                <h3 className="text-lg font-semibold">Internetinių puslapių palaikymas, bei optimizavimas</h3>
                {/* Gap between title and description */}
                <p className="text-sm text-gray-500 mt-4">Scale to millions. No complex configuration required.</p>
              </div>
              <Link href="/puslapiu-optimizavimas">
                <a className="absolute bottom-4 right-4 text-black bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition" style={{ borderRadius: '50%' }}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </Link>
            </div>

            <div className="relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 overflow-hidden" style={{ height: '250px', width: '300px' }}>
              <div className="relative z-20 p-4">
                <h3 className="text-lg font-semibold">Prekės ženklo identiteto kūrimas</h3>
                {/* Gap between title and description */}
                <p className="text-sm text-gray-500 mt-4">Built to handle any traffic on your collaborative experiences.</p>
              </div>
              <Link href="/prekės-zenklo-kurimas">
                <a className="absolute bottom-4 right-4 text-black bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition" style={{ borderRadius: '50%' }}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </Link>
            </div>

            <div className="relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 overflow-hidden" style={{ height: '250px', width: '300px' }}>
              <div className="relative z-20 p-4">
                <h3 className="text-lg font-semibold">Reklamos valdymas</h3>
                {/* Gap between title and description */}
                <p className="text-sm text-gray-500 mt-4">Spend your time building, not maintaining infrastructure.</p>
              </div>
              <Link href="/reklamos-valdymas">
                <a className="absolute bottom-4 right-4 text-black bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition" style={{ borderRadius: '50%' }}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}