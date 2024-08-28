"use client";

import React, { useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Switch from "./Switch"; // Ensure this import is included

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
    alert("Jūsų užklausa buvo išsiųsta!");
  };

  return (
    <Card className="bg-transparent border border-zinc-700 shadow-none rounded-lg p-4 md:p-8 relative overflow-hidden">
      <article className="relative w-full h-full p-4 md:p-8 bg-[rgba(28, 28, 30, 0.8)] rounded-lg backdrop-blur-sm group">
        <h3 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-6 group-hover:text-white transition-colors duration-300">
          Apskaičiuokite savo svetainės kainą
        </h3>

        <div className="mb-4">
          <label htmlFor="pages" className="block text-sm font-medium text-zinc-100 mb-1">
            Puslapių skaičius:
          </label>
          <input
            type="number"
            id="pages"
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            min={1}
            className="w-full p-2 border border-zinc-700 bg-zinc-800 text-zinc-100 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="design" className="block text-sm font-medium text-zinc-100 mb-1">
            Dizaino sudėtingumas:
          </label>
          <select
            id="design"
            value={design}
            onChange={(e) => setDesign(Number(e.target.value))}
            className="w-full p-2 border border-zinc-700 bg-zinc-800 text-zinc-100 rounded-md"
          >
            <option value={500}>Paprastas</option>
            <option value={1000}>Vidutinis</option>
            <option value={1500}>Sudėtingas</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="websiteType" className="block text-sm font-medium text-zinc-100 mb-1">
            Svetainės tipas:
          </label>
          <select
            id="websiteType"
            value={websiteType}
            onChange={(e) => setWebsiteType(e.target.value)}
            className="w-full p-2 border border-zinc-700 bg-zinc-800 text-zinc-100 rounded-md"
          >
            <option value="template">Šablonas</option>
            <option value="custom">Individualus</option>
          </select>
        </div>

        <div className="mb-6 flex items-center">
          <Switch
            id="ecommerce"
            checked={ecommerce}
            onChange={setEcommerce}
          />
          <label htmlFor="ecommerce" className="ml-2 text-sm font-medium text-zinc-100">
            E-komercijos funkcionalumas
          </label>
        </div>

        <div className="mb-6 flex items-center">
          <Switch
            id="seo"
            checked={seo}
            onChange={setSeo}
          />
          <label htmlFor="seo" className="ml-2 text-sm font-medium text-zinc-100">
            SEO optimizacija
          </label>
        </div>

        <div className="mb-6 flex items-center">
          <Switch
            id="contentCreation"
            checked={contentCreation}
            onChange={setContentCreation}
          />
          <label htmlFor="contentCreation" className="ml-2 text-sm font-medium text-zinc-100">
            Turinio kūrimas
          </label>
        </div>

        <div className="mb-6 flex items-center">
          <Switch
            id="mobileResponsive"
            checked={mobileResponsive}
            onChange={setMobileResponsive}
          />
          <label htmlFor="mobileResponsive" className="ml-2 text-sm font-medium text-zinc-100">
            Mobilios versijos
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
      </article>
    </Card>
  );
};

const KainosPage: React.FC = () => {
  return (
    <div className="relative pb-16 bg-gradient-to-tl from-black via-zinc-900 to-black">
      <Navigation />
      <div className="relative px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* Hero Section */}
        <div className="max-w-2xl mx-auto text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Kainos
          </h2>
          <p className="mt-4 text-zinc-400">
            Sužinokite apytikslę savo svetainės kūrimo kainą naudodamiesi mūsų kainų skaičiuokle.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800 my-8" />
        <PricingCalculator />
      </div>
    </div>
  );
};

export default KainosPage;