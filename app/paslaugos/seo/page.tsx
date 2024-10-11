"use client";

import React, { useEffect } from "react";
import { Navigation } from "../../components/nav";
import Footer from '../../components/Footer'; // Import the Footer component

const Brandingas = () => {
    useEffect(() => {
        // Set the document title
        document.title = "Branding'as | Brandforge.lt";
      
        // Set the meta description
        const metaDescription = document.querySelector("meta[name='description']");
      
        // Type check to ensure metaDescription is not null
        if (metaDescription instanceof HTMLMetaElement) {
          metaDescription.content = "Sužinokite, kaip sukurti galingą prekės ženklą, kuris padės jums išsiskirti."; // Your desired description
        }
      }, []);

  return (
    <div className="relative min-h-screen bg-black">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-32 lg:pt-40 relative z-10">
        
        {/* Hero Section */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Branding'as
          </h1>
          <p className="mt-4 text-zinc-400">
            Unikalūs prekės ženklo tapatumo sprendimai, įskaitant logotipus, vizitines korteles ir kūrybinius dizaino paslaugas.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Content Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-zinc-100">Kodėl Svarbus Branding'as?</h2>
          <p className="mt-4 text-zinc-400">
            Branding'as yra esminė bet kurios įmonės dalis. Jis padeda sukurti unikalų prekės ženklą, kuris atspindi jūsų vertybes ir tikslus. Geras branding'as ne tik išskiria jūsų produktus ar paslaugas, bet ir sukuria emocinį ryšį su klientais.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-zinc-100">Mūsų Paslaugos</h2>
          <ul className="list-disc list-inside mt-4 text-zinc-400">
            <li>Logotipų kūrimas</li>
            <li>Vizitinių kortelių dizainas</li>
            <li>Kūrybinis dizainas</li>
            <li>Prekės ženklo strategijos kūrimas</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-zinc-100">Mūsų Darbai</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <img src="/branding/branding1.jpg" alt="Branding Example 1" className="w-full h-auto rounded-lg" />
            <img src="/branding/branding2.jpg" alt="Branding Example 2" className="w-full h-auto rounded-lg" />
            <img src="/branding/branding3.jpg" alt="Branding Example 3" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Susisiekite su Mumis
          </h2>
          <p className="mt-4 text-zinc-400">
            Norite sužinoti daugiau apie mūsų branding'o paslaugas? Susisiekite su mumis šiandien ir aptarkime, kaip galime jums padėti.
          </p>
          <div className="mt-6">
            <a
              href="/kontaktai"
              className="w-full py-2 px-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-semibold rounded-md hover:from-orange-500 hover:to-orange-700 active:from-orange-600 active:to-orange-800 focus:outline-none focus:ring focus:ring-orange-400 transition duration-200"
            >
              Susisiekite
            </a>
          </div>
        </div>

        <Footer /> {/* Footer component */}
      </div>
    </div>
  );
};

export default Brandingas;