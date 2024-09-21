"use client";
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Navigation } from './components/nav';
import { HeroParallax } from './components/ui/hero-parallax';
import { TypewriterEffect } from './components/ui/typewriter-effect';
import { Timeline } from './components/ui/timeline';

export default function Home() {
  useEffect(() => {
    document.title = "Jūsų geriausias IT partneris | Brandforge.lt";
  }, []);

  const products = [
    { title: 'Arenaproperties.com', link: '/atlikti-darbai', thumbnail: '/projektai/arenaproperties_com.jpg' },
    { title: 'Baytekinternational.com', link: '/atlikti-darbai', thumbnail: '/projektai/baytekinternational_com.jpg' },
    { title: 'Lowvac.au', link: '/atlikti-darbai', thumbnail: '/projektai/lowvac_au.jpg' },
    { title: 'Cincinnatidogtrainers.com', link: '/atlikti-darbai', thumbnail: '/projektai/cincinnatidogtrainers_com.jpg' },
    { title: 'Stogrida.com', link: '/atlikti-darbai', thumbnail: '/projektai/stogrida_com.jpg' },
    { title: 'Miracleexperience.co.tz', link: '/atlikti-darbai', thumbnail: '/projektai/miracleexperience_co_tz.jpg' },
    { title: 'Entsav.co.uk', link: '/atlikti-darbai', thumbnail: '/projektai/entsav_co_uk.jpg' },
    { title: 'Estlighting.com.au', link: '/atlikti-darbai', thumbnail: '/projektai/estlighting_com_au.jpg' },
    { title: 'Scanstrut.com', link: '/atlikti-darbai', thumbnail: '/projektai/scanstrut_com.jpg' },
  ];

  const timelineData = [
    { title: 'Idėjų generavimas', content: 'Idėjų brainstorminimas ir tyrimai' },
    { title: 'Planavimas', content: 'Projektų planavimas ir valdymas' },
    { title: 'Dizainas', content: 'Vartotojo patirties ir sąsajos dizainas' },
    { title: 'Kodas', content: 'Kūrimas ir įgyvendinimas' },
    { title: 'Testavimas', content: 'Kokybės užtikrinimas ir testavimas' },
    { title: 'Diegimas ir priežiūra', content: 'Pristatymas ir nuolatinė pagalba' },
  ];

  return (
    <>
      <Head>
        <meta name="description" content="Brandforge.lt - Jūsų geriausias IT partneris. Paverčiame jūsų idėjas veikiančiais sprendimais ir svetaines į įrankius, kurie augina jūsų verslą ir prekės ženklą." />
        <meta name="keywords" content="IT partneris, svetainių kūrimas, prekės ženklo kūrimas, reklamos valdymas, internetinių puslapių palaikymas, optimizavimas" />
        <meta property="og:title" content="Jūsų geriausias IT partneris | Brandforge.lt" />
        <meta property="og:description" content="Paverčiame jūsų idėjas veikiančiais sprendimais, o svetaines – įrankiais, kurie augina jūsų verslą ir prekės ženklą." />
        <meta property="og:image" content="/projektai/scanstrut_com.jpg" />
        <meta property="og:url" content="https://brandforge.lt" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jūsų geriausias IT partneris | Brandforge.lt" />
        <meta name="twitter:description" content="Paverčiame jūsų idėjas veikiančiais sprendimais, o svetaines – įrankiais, kurie augina jūsų verslą ir prekės ženklą." />
        <meta name="twitter:image" content="/projektai/scanstrut_com.jpg" />
      </Head>

      {/* Navigation above hero */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Navigation />
      </header>

      {/* Main Page Container with Global Background */}
      <div className="bg-black min-h-screen relative">
        {/* Gradient Transition */}
        <div className="absolute inset-0 bg-gradient-transition pointer-events-none"></div>
        
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center w-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 overflow-hidden">
          <div className="flex flex-col items-center justify-center text-center text-white px-4 md:px-8 z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-4 leading-tight">
              <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent">Idėja</span>
              <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent">,</span>
              <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent"> Strategija</span>
              <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent">,</span>
              <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent"> Kodas</span>
              <br className="hidden md:block" />
              <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <TypewriterEffect
                  words={[
                    { text: 'Tai' },
                    { text: 'viskas' },
                    { text: 'ko' },
                    { text: 'reikia' },
                    { text: 'Jūsų' },
                    { text: 'verslui.' }
                  ]}
                  className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                  cursorClassName="bg-blue-500"
                />
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-4 md:mb-6">
              Paverčiame jūsų idėjas veikiančiais sprendimais, o svetaines – įrankiais, kurie augina jūsų verslą ir prekės ženklą.
            </p>
            <div className="mb-4 md:mb-6">
              <Link href="/paslaugos" className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition inline-flex items-center">
                Mūsų paslaugas
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* HeroParallax Component */}
        <section className="w-full mt-4">
          <HeroParallax products={products} />
        </section>

        {/* Timeline Section */}
        <section className="w-full bg-black py-8">
          <div className="px-4 md:px-6 lg:px-8 mx-auto max-w-7xl">
            <div className="w-full h-px bg-zinc-800 mb-6" />
          </div>

          <div className="max-w-7xl mx-auto py-6 px-4 md:px-6 lg:px-8">
            <Timeline
              data={[
                { title: '1. Idėjų generavimas', content: 'Idėjų brainstorminimas ir tyrimai' },
                { title: '2. Planavimas', content: 'Projektų planavimas ir valdymas' },
                { title: '3. Dizainas', content: 'Vartotojo patirties ir sąsajos dizainas' },
                { title: '4. Programavimas', content: 'Kūrimas ir įgyvendinimas' },
                { title: '5. Testavimas', content: 'Kokybės užtikrinimas ir testavimas' },
                { title: '6. Paleidimas ir priežiūra', content: 'Pristatymas ir nuolatinė pagalba' },
              ]}
            />
          </div>
        </section>
      </div>

      <style jsx global>{`
        /* Global Styles */
        body {
          margin: 0;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          background-color: #000;
          color: #fff;
        }

        /* Gradient Transition */
        .bg-gradient-transition {
          background: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%);
          z-index: 0;
        }

        /* Hero Section Styles */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to top left, rgba(0,0,0,0), rgba(0,0,0,1));
        }

        /* Timeline Styles */
        .timeline-item {
          padding: 1rem;
          border-left: 2px solid #f7a71b;
          position: relative;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -6px;
          top: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #f7a71b;
          box-shadow: 0 0 0 3px #000;
        }

        .timeline-item:nth-child(odd) {
          background: rgba(255, 255, 255, 0.02);
        }

        .timeline-item:nth-child(even) {
          background: rgba(255, 255, 255, 0.05);
        }

        .timeline-item h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin: 0 0 0.5rem;
        }

        .timeline-item p {
          margin: 0;
        }

        /* Font Loading */
        @font-face {
          font-family: 'Helvetica Neue';
          src: url('/fonts/HelveticaNeue.woff2') format('woff2');
          font-display: swap;
        }
      `}</style>
    </>
  );
}