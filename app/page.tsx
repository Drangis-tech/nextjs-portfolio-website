"use client";
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Navigation } from './components/nav';
import { HeroParallax } from './components/ui/hero-parallax';
import { TypewriterEffect } from './components/ui/typewriter-effect';
import { Timeline } from './components/ui/timeline'; // Import your Timeline component

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
    {
      title: 'Idėjų generavimas',
      content: 'Idėjų brainstorminimas ir tyrimai',
    },
    {
      title: 'Planavimas',
      content: 'Projektų planavimas ir valdymas',
    },
    {
      title: 'Dizainas',
      content: 'Vartotojo patirties ir sąsajos dizainas',
    },
    {
      title: 'Kodas',
      content: 'Kūrimas ir įgyvendinimas',
    },
    {
      title: 'Testavimas',
      content: 'Kokybės užtikrinimas ir testavimas',
    },
    {
      title: 'Diegimas ir priežiūra',
      content: 'Pristatymas ir nuolatinė pagalba',
    },
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 leading-tight">
              <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent">Idėja</span>
              <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent">,</span>
              <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent"> Strategija</span>
              <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent">,</span>
              <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent"> Kodas</span>
              <br className="hidden md:block" />
              <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <TypewriterEffect
                  words={[
                    { text: 'Tai' },
                    { text: 'viskas' },
                    { text: 'ko' },
                    { text: 'reikia' },
                    { text: 'Jūsų' },
                    { text: 'verslui.' }
                  ]}
                  className="text-white text-4xl md:text-5xl lg:text-6xl"
                  cursorClassName="bg-blue-500"
                />
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-4 md:mb-6">
              Paverčiame jūsų idėjas veikiančiais sprendimais, o svetaines – įrankiais, kurie augina jūsų verslą ir prekės ženklą.
            </p>
            <div className="mb-4 md:mb-6">
              <Link href="/paslaugos" className="px-8 py-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition inline-flex items-center">
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
          <div className="px-6 pt-8 mx-auto space-y-4 max-w-7xl lg:px-8 md:space-y-6 md:pt-12 lg:pt-16">
            <div className="w-full h-px bg-zinc-800" />
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
    </>
  );
}