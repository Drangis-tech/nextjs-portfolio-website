"use client";

import React, { useState } from 'react';
import { Navigation } from '../components/nav'; // Adjust the path as needed
import GradientButton from '../components/GradientButton'; // Adjust the path as needed

const KainosPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'; // Prevent scrolling when menu is open
  };

  return (
    <div className="relative pb-16 bg-gradient-to-b from-black via-zinc-900 to-black">
      <Navigation isOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
      <div
        className={`fixed inset-0 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      ></div>
      <div className="relative px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Kainos</h2>
          <p className="mt-4 text-zinc-400">
            Sužinokite apytikslę savo svetainės kūrimo kainą naudodamiesi mūsų kainų skaičiuokle.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        {/* Your PricingCalculator component */}
      </div>
    </div>
  );
};

export default KainosPage;