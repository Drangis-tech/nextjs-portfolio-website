"use client";

// /app/kainos/page.tsx

import React, { useState, useEffect } from 'react';
import Head from 'next/head'; // Import the Head component from next/head
import { Navigation } from '../components/nav';
import { Card } from '../components/card';
import Switch from './Switch'; // Ensure this import is included
import IOSSlider from './IOSSlider'; // Import the IOSSlider component
import EmailInput from './EmailInput'; // Import the EmailInput component
import SubHandler from './SubHandler'; // Import the SubHandler component
import GridPattern from '../components/grid-pattern'; // Import the GridPattern component
import Footer from '../components/Footer'; // Import the Footer component

const PricingCalculator: React.FC = () => {
  const [pages, setPages] = useState<number>(1);
  const [design, setDesign] = useState<string>('Paprastas');
  const [ecommerce, setEcommerce] = useState<boolean>(false);
  const [seo, setSeo] = useState<boolean>(false);
  const [contentCreation, setContentCreation] = useState<boolean>(false);
  const [mobileResponsive, setMobileResponsive] = useState<boolean>(false);
  const [comments, setComments] = useState<string>('');
  const [name, setName] = useState<string>(''); // New state for name/company
  const [email, setEmail] = useState<string>('');
  const [formData, setFormData] = useState<any>(null); // State to store form data

  const calculatePrice = () => {
    let basePrice = pages * 50 + (design === 'Paprastas' ? 450 : design === 'Vidutinis' ? 650 : 950);
    if (ecommerce) basePrice += 1000;
    if (seo) basePrice += 300;
    if (contentCreation) basePrice += 150;
    return basePrice;
  };

  const handleSubmit = () => {
    const data = {
      pages,
      design,
      ecommerce: ecommerce ? '+' : '',
      seo: seo ? '+' : '',
      contentCreation: contentCreation ? '+' : '',
      mobileResponsive: mobileResponsive ? '+' : '',
      comments,
      name, // Include name in formData
      email,
      price: calculatePrice(),
    };
    setFormData(data);
  };

  return (
    <Card className="bg-transparent border border-zinc-700 shadow-none rounded-lg p-4 md:p-8 relative overflow-hidden">
      <article className="relative w-full h-full p-4 md:p-8 bg-[rgba(28, 28, 30, 0.8)] rounded-lg backdrop-blur-sm group">
        <h3 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl mb-2 group-hover:text-white transition-colors duration-300">
          Apskaičiuokite savo svetainės preliminarią kainą:
        </h3>
        <p className="text-sm text-zinc-400 mb-6">
          (Tai yra preliminari kaina, jinai gali būti arba didesnė, arba mažesnė, dėl tikslios kainos su Jumis susisieks mūsų komanda, kai išsiųsite šią užklausą)
        </p>

        {/* Name/Company Input Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-zinc-100 mb-1">
            Vardas / Įmonė:
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-zinc-700 bg-zinc-800 text-zinc-100 rounded-md"
            type="text"
            placeholder="Įveskite savo vardą arba įmonės pavadinimą"
          />
        </div>

        {/* Email Input Field */}
        <div className="mb-4">
          <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-4">
          <label htmlFor="pages" className="block text-sm font-medium text-zinc-100 mb-1">
            Puslapių skaičius:
          </label>
          <IOSSlider
            value={pages}
            onChange={(event, newValue) => setPages(newValue as number)}
            aria-label="pages slider"
            valueLabelDisplay="auto"
            min={1}
            max={20} // Adjust max as needed
          />
        </div>

        <div className="mb-4">
          <label htmlFor="design" className="block text-sm font-medium text-zinc-100 mb-1">
            Dizaino sudėtingumas:
          </label>
          <select
            id="design"
            value={design}
            onChange={(e) => setDesign(e.target.value)}
            className="w-full p-2 border border-zinc-700 bg-zinc-800 text-zinc-100 rounded-md"
          >
            <option value="Paprastas">Paprastas</option>
            <option value="Vidutinis">Vidutinis</option>
            <option value="Sudėtingas">Sudėtingas</option>
          </select>
        </div>

        <div className="mb-6 flex items-center">
          <Switch id="ecommerce" checked={ecommerce} onChange={setEcommerce} />
          <label htmlFor="ecommerce" className="ml-2 text-sm font-medium text-zinc-100">
            E-komercijos funkcionalumas
          </label>
        </div>

        <div className="mb-6 flex items-center">
          <Switch id="seo" checked={seo} onChange={setSeo} />
          <label htmlFor="seo" className="ml-2 text-sm font-medium text-zinc-100">
            SEO optimizacija
          </label>
        </div>

        <div className="mb-6 flex items-center">
          <Switch id="contentCreation" checked={contentCreation} onChange={setContentCreation} />
          <label htmlFor="contentCreation" className="ml-2 text-sm font-medium text-zinc-100">
            Turinio kūrimas
          </label>
        </div>

        <div className="mb-6">
          <label htmlFor="comments" className="block text-sm font-medium text-zinc-100 mb-1">
            Papildomi komentarai:
          </label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="w-full p-2 border border-zinc-700 bg-zinc-800 text-zinc-100 rounded-md"
            rows={4}
          />
        </div>

        <div className="text-xl font-bold text-zinc-100 mb-6">
          Apskaičiuota kaina: €{calculatePrice()}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2 px-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-semibold rounded-md hover:from-orange-500 hover:to-orange-700 active:from-orange-600 active:to-orange-800 focus:outline-none focus:ring focus:ring-orange-400 transition duration-200"
        >
          Siųsti užklausą
        </button>

        {/* Render SubHandler component */}
        {formData && <SubHandler formData={formData} />}
      </article>
    </Card>
  );
};

const KainosPage: React.FC = () => {
  useEffect(() => {
    // Set the document title
    document.title = "Kainos | Brandforge.lt";
  }, []);
  
  return (
    <div className="relative min-h-screen bg-black"> {/* Set the background to black */}
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0">
        <GridPattern
          width={40}
          height={40}
          className="w-full h-full opacity-10 pointer-events-none"
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

      <Head>
        <title>Kainos - Apskaičiuokite</title>
      </Head>
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-32 lg:pt-40">
        {/* Hero Section */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Kainos
          </h2>
          <p className="mt-4 text-zinc-400 text-base">
            Sužinokite apytikslę savo svetainės kainą pagal norimus parametrus.
          </p>
        </div>

        {/* Pricing Calculator Component */}
{/* Adjust margin below the Pricing Calculator */}
<div className="mb-26"> {/* This increases the space below the calculator */}
  <PricingCalculator />
</div>

      {/* Add Footer with margin above */}
      <div className="mb-30"> {/* Adjust margin as needed */}
        <Footer />
      </div>
    </div>
    </div>
  );
};

export default KainosPage;