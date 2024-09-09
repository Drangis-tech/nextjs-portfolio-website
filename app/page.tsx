"use client";

import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Navigation } from './components/nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SvgBackground from './components/svgBackground'; // Import the background component

export default function Home() {
  useEffect(() => {
    document.title = "Jūsų geriausias IT partneris | Brandforge.lt";
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Brandforge.lt - Jūsų geriausias IT partneris. Paverčiame jūsų idėjas veikiančiais sprendimais ir svetaines į įrankius, kurie augina jūsų verslą ir prekės ženklą." />
        <meta name="keywords" content="IT partneris, svetainių kūrimas, prekės ženklo kūrimas, reklamos valdymas, internetinių puslapių palaikymas, optimizavimas" />
        <meta property="og:title" content="Jūsų geriausias IT partneris | Brandforge.lt" />
        <meta property="og:description" content="Paverčiame jūsų idėjas veikiančiais sprendimais, o svetaines – įrankiais, kurie augina jūsų verslą ir prekės ženklą." />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://brandforge.lt" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jūsų geriausias IT partneris | Brandforge.lt" />
        <meta name="twitter:description" content="Paverčiame jūsų idėjas veikiančiais sprendimais, o svetaines – įrankiais, kurie augina jūsų verslą ir prekės ženklą." />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
      </Head>

      {/* Background Design */}
      <div className="relative min-h-screen flex flex-col items-center justify-center w-screen overflow-hidden">
        <SvgBackground className="absolute inset-0 w-full h-full opacity-70 z-0 pointer-events-none" /> {/* Updated Background */}
        
        {/* Navigation Bar */}
        <header className="absolute top-0 left-0 w-full z-30">
          <Navigation />
        </header>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-center text-white px-4 md:px-8 flex-1 z-20 mt-32 md:mt-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent">Idėja</span>
            <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent">,</span>
            <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent"> Strategija</span>
            <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent">,</span>
            <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent"> Kodas</span>
            <br className="hidden md:block" />
            <span className="block mt-4">Tai viskas ko reikia Jūsų verslui.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8">
            Paverčiame jūsų idėjas veikiančiais sprendimais, o svetaines – įrankiais, kurie augina jūsų verslą ir prekės ženklą.
          </p>
          <div className="mb-6 md:mb-8">
            <Link href="/paslaugos">
              <a className="px-8 py-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition inline-flex items-center">
                Mūsų paslaugas
                <span className="ml-2">→</span>
              </a>
            </Link>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full flex flex-col md:flex-row justify-center px-4 md:px-8 gap-4 md:gap-8 mt-8 md:mt-12 mb-8 z-20">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8 md:justify-center">
            {/* Transparent cards with hover effects and arrow icon */}
            <div className="relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 overflow-hidden" style={{ height: '250px', width: '300px' }}>
              <div className="relative z-20 p-4">
                <h3 className="text-lg font-semibold">Internetinių Puslapių kūrimas</h3>
                <p className="text-sm text-gray-500 mt-4">WebSocket edge infrastructure and reliable connection engine.</p>
              </div>
              <Link href="/internetiniu-puslapiu-kurimas">
                <a className="absolute bottom-4 right-4 text-black bg-white rounded-full p-3 hover:bg-gray-100 transition">
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </Link>
            </div>

            <div className="relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 overflow-hidden" style={{ height: '250px', width: '300px' }}>
              <div className="relative z-20 p-4">
                <h3 className="text-lg font-semibold">Internetinių puslapių palaikymas, bei optimizavimas</h3>
                <p className="text-sm text-gray-500 mt-4">Scale to millions. No complex configuration required.</p>
              </div>
              <Link href="/puslapiu-optimizavimas">
                <a className="absolute bottom-4 right-4 text-black bg-white rounded-full p-3 hover:bg-gray-100 transition">
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </Link>
            </div>

            <div className="relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 overflow-hidden" style={{ height: '250px', width: '300px' }}>
              <div className="relative z-20 p-4">
                <h3 className="text-lg font-semibold">Prekės ženklo identiteto kūrimas</h3>
                <p className="text-sm text-gray-500 mt-4">Built to handle any traffic on your collaborative experiences.</p>
              </div>
              <Link href="/prekės-zenklo-kurimas">
                <a className="absolute bottom-4 right-4 text-black bg-white rounded-full p-3 hover:bg-gray-100 transition">
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </Link>
            </div>

            <div className="relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 overflow-hidden" style={{ height: '250px', width: '300px' }}>
              <div className="relative z-20 p-4">
                <h3 className="text-lg font-semibold">Reklamos valdymas</h3>
                <p className="text-sm text-gray-500 mt-4">Spend your time building, not maintaining infrastructure.</p>
              </div>
              <Link href="/reklamos-valdymas">
                <a className="absolute bottom-4 right-4 text-black bg-white rounded-full p-3 hover:bg-gray-100 transition">
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