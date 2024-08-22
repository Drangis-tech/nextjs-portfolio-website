// PricingCalculator.tsx
"use client";

import React, { useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import GradientButton from "../components/GradientButton"; // Import GradientButton

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
    <Card className="bg-transparent border border-zinc-700 shadow-none rounded-lg p-4 md:p-8">
      {/* Debugging Style Added */}
      <article
        className="relative w-full h-full p-4 md:p-8 bg-[rgba(28, 28, 30, 0.8)] rounded-lg backdrop-blur-sm"
        style={{ border: '2px solid red', backgroundColor: 'rgba(255, 0, 0, 0.1)' }}
      >
        <h3 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-6">
          Apskaičiuokite savo svetainės kainą
        </h3>

        {/* The rest of your form and content here */}
        {/* ... */}

        <div className="text-xl font-bold text-zinc-100 mb-6">
          Apskaičiuota kaina: €{calculatePrice()}
        </div>

        <GradientButton onClick={handleSubmit}>
          Siųsti užklausą
        </GradientButton>
      </article>
    </Card>
  );
};

const KainosPage: React.FC = () => {
  return (
    <div className="relative pb-16 bg-gradient-to-b from-black via-zinc-900 to-black">
      <Navigation />
      <div className="relative px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Kainos</h2>
          <p className="mt-4 text-zinc-400">
            Sužinokite apytikslę savo svetainės kūrimo kainą naudodamiesi mūsų kainų skaičiuokle.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <PricingCalculator />
      </div>
    </div>
  );
};

export default KainosPage;