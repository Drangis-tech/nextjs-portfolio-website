"use client"; // Ensure this is at the top of the file

import React, { useState } from "react";
import { Navigation } from "./components/nav";
import { Card } from "./components/card";

const PricingCalculator: React.FC = () => {
  const [pages, setPages] = useState<number>(1);
  const [design, setDesign] = useState<number>(500);
  const [ecommerce, setEcommerce] = useState<boolean>(false);
  const [websiteType, setWebsiteType] = useState<string>("template");
  const [seo, setSeo] = useState<boolean>(false);
  const [contentCreation, setContentCreation] = useState<boolean>(false);
  const [mobileResponsive, setMobileResponsive] = useState<boolean>(false);
  const [comments, setComments] = useState<string>("");

  const calculatePrice = () => {
    let basePrice = pages * 100 + design;
    if (ecommerce) basePrice += 2000;
    if (websiteType === "custom") basePrice += 1500;
    if (seo) basePrice += 500;
    if (contentCreation) basePrice += 300;
    if (mobileResponsive) basePrice += 400;
    return basePrice;
  };

  const handleSubmit = () => {
    // Handle form submission here (e.g., send data to a server or an API)
    alert("Jūsų užklausa buvo išsiųsta!");
  };

  return (
    <Card className="bg-transparent border border-gray-700 shadow-none rounded-lg p-4 md:p-8">
      <article className="relative w-full h-full p-4 md:p-8 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-sm">
        <h3 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl mb-6">
          Apskaičiuokite savo svetainės kainą
        </h3>

        <div className="mb-4">
          <label htmlFor="pages" className="block text-sm font-medium text-gray-100 mb-1">
            Puslapių skaičius:
          </label>
          <input
            type="number"
            id="pages"
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            min={1}
            className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="design" className="block text-sm font-medium text-gray-100 mb-1">
            Dizaino sudėtingumas:
          </label>
          <select
            id="design"
            value={design}
            onChange={(e) => setDesign(Number(e.target.value))}
            className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded-md"
          >
            <option value={500}>Paprastas</option>
            <option value={1000}>Vidutinis</option>
            <option value={1500}>Sudėtingas</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="websiteType" className="block text-sm font-medium text-gray-100 mb-1">
            Svetainės tipas:
          </label>
          <select
            id="websiteType"
            value={websiteType}
            onChange={(e) => setWebsiteType(e.target.value)}
            className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded-md"
          >
            <option value="template">Šablonas</option>
            <option value="custom">Individualus</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-100 mb-1">
            <input
              type="checkbox"
              id="ecommerce"
              checked={ecommerce}
              onChange={(e) => setEcommerce(e.target.checked)}
              className="mr-2"
            />
            E-komercijos funkcionalumas
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-100 mb-1">
            <input
              type="checkbox"
              id="seo"
              checked={seo}
              onChange={(e) => setSeo(e.target.checked)}
              className="mr-2"
            />
            SEO optimizacija
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-100 mb-1">
            <input
              type="checkbox"
              id="contentCreation"
              checked={contentCreation}
              onChange={(e) => setContentCreation(e.target.checked)}
              className="mr-2"
            />
            Turinio kūrimas
          </label>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-100 mb-1">
            <input
              type="checkbox"
              id="mobileResponsive"
              checked={mobileResponsive}
              onChange={(e) => setMobileResponsive(e.target.checked)}
              className="mr-2"
            />
            Mobilios versijos
          </label>
        </div>

        <div className="mb-6">
          <label htmlFor="comments" className="block text-sm font-medium text-gray-100 mb-1">
            Papildomi komentarai:
          </label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded-md"
            rows={4}
          />
        </div>

        <div className="text-xl font-bold text-gray-100 mb-6">
          Apskaičiuota kaina: €{calculatePrice()}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Siųsti užklausą
        </button>
      </article>
    </Card>
  );
};

const KainosPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center bg-no-repeat">
      <Navigation />
      <div className="absolute inset-0 bg-gradient-to-tl from-black via-gray-900 to-black opacity-70"></div>
      <div className="relative px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Kainos</h2>
          <p className="mt-4 text-gray-300">
            Sužinokite apytikslę savo svetainės kūrimo kainą naudodamiesi mūsų kainų skaičiuokle.
          </p>
        </div>
        <div className="w-full h-px bg-gray-800" />
        <PricingCalculator />
      </div>
    </div>
  );
};

export default KainosPage;