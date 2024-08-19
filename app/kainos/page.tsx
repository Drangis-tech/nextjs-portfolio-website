"use client";

import React from "react";
import { Navigation } from "../components/nav";
import PricingCalculator from "./PricingCalculator"; // Adjust the path if necessary

const KainosPage: React.FC = () => {
  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
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