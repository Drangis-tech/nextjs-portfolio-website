"use client";
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Navigation } from './components/nav';
import { HeroParallax } from './components/ui/hero-parallax';
import { TypewriterEffect } from './components/ui/typewriter-effect';
import { Timeline } from './components/ui/timeline';
import { Spotlight } from './components/ui/Spotlight';
import { HoverBorderGradient } from './components/ui/hover-border-gradient'; // Import the HoverBorderGradient component
import GridPattern from './components/grid-pattern'; // Import GridPattern component
import Footer from './components/Footer'; // Import the Footer component
import FAQ from './components/FAQ'; // Import the FAQ component
import AOS from './components/AOS'; // Import the AOS component



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
      <div className="bg-black min-h-screen relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center w-screen bg-black overflow-hidden">
          {/* Spotlight SVG */}
          <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
            <Spotlight 
              className="w-[160vw] h-[160vh] transform translate-y-[15%] translate-x-[-65%] 
                         md:w-[120vw] md:h-[120vh] md:translate-x-[-15%] md:translate-y-[5%] 
                         lg:w-[100vw] lg:h-[100vh] lg:translate-x-[0%] lg:translate-y-[0%] 
                         transition-all duration-[8s] ease-in-out motion-safe:animate-moveSpotlight"
              fill="white"
            />
          </div>

{/* Grid Pattern Overlay */}
<GridPattern
  width={40}
  height={40}
  className="absolute inset-0 z-10 opacity-10 pointer-events-none"
/>

<div className="flex flex-col items-center justify-center text-center text-white px-4 md:px-8 z-20">
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 leading-tight min-h-[100px] md:min-h-[120px]">
    <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent">Idėja</span>
    <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent">,</span>
    <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent"> Strategija</span>
    <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent">,</span>
    <span className="bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text text-transparent"> Kodas</span>
    <br className="hidden md:block" />
    <span className="block mt-1 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
      <div className="min-h-[30px]">
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
      </div>
    </span>
  </h2>
  <p className="text-lg md:text-xl text-gray-400 mb-2 md:mb-4">
    Paverčiame jūsų idėjas veikiančiais sprendimais, o svetaines – įrankiais, kurie augina jūsų verslą ir prekės ženklą.
  </p>
  <div className="mb-2 md:mb-4">
    {/* New Button */}
{/* Button with Arrow */}
<Link href="/paslaugos">
  <HoverBorderGradient
    containerClassName="rounded-full"
    as="button"
    className="flex items-center justify-center text-white dark:bg-white dark:text-black space-x-2 p-2"
    duration={0.75} // Adjust duration for hover effect
  >
    <span>Mūsų paslaugos</span>
    {/* Right-Facing Arrow Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h12m0 0l-4 4m4-4l-4-4" />
    </svg>
  </HoverBorderGradient>
</Link>
  </div>
</div>
        </div>

        {/* HeroParallax Component */}
        <section className="w-full mt-4">
          <HeroParallax products={products} />
        </section>

      {/* AOS (Text Animation) Section */}
      <section className="w-full bg-black py-8">
        <div className="max-w-5xl mx-auto py-8 px-8 md:px-6 lg:px-8">
          <AOS /> {/* Animated scrolling text */}
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
            <h1 className="text-2xl md:text-5xl font-bold text-white text-center"> {/* Adjusted font size */}
              Kaip atrodo puslapio kurimo darbo eiga?
            </h1>
          </div>

        {/* Timeline Section */}
        <section className="w-full bg-black py-8">
          <div className="px-6 pt-8 mx-auto space-y-4 max-w-7xl lg:px-8 md:space-y-6 md:pt-12 lg:pt-0">
            <div className="w-full h-px bg-zinc-800" />
          </div>

          <div className="max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
            <Timeline
              data={timelineData}
            />
          </div>
        </section>

                {/* FAQ Section */}
                <section className="w-full bg-black py-8">
          <div className="max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
            <FAQ /> {/* FAQ component inserted here */}
          </div>
        </section>

        {/* Add a gap before the footer */}

        {/* Footer Component */}
        <Footer />
      </div>
    </>
  );
}