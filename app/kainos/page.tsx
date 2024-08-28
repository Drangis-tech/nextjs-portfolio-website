import React, { useState } from "react";
import { Navigation } from "../components/nav";
import GradientButton from "../components/GradientButton";
import styles from './kainos.module.css'; // Import your custom CSS module

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
    <div className="bg-[rgba(28, 28, 30, 0.8)] p-6 md:p-8 rounded-lg shadow-lg border border-zinc-700">
      <h3 className="text-3xl font-bold text-zinc-100 mb-6">Apskaičiuokite savo svetainės kainą</h3>

      {/* Other form elements */}

      <div className="mb-6">
        <label className={styles.checkboxContainer}>
          E-komercijos funkcionalumas
          <input
            type="checkbox"
            id="ecommerce"
            checked={ecommerce}
            onChange={(e) => setEcommerce(e.target.checked)}
          />
          <span className={styles.checkmark}></span>
        </label>
      </div>

      <div className="mb-6">
        <label className={styles.checkboxContainer}>
          SEO optimizacija
          <input
            type="checkbox"
            id="seo"
            checked={seo}
            onChange={(e) => setSeo(e.target.checked)}
          />
          <span className={styles.checkmark}></span>
        </label>
      </div>

      <div className="mb-6">
        <label className={styles.checkboxContainer}>
          Turinio kūrimas
          <input
            type="checkbox"
            id="contentCreation"
            checked={contentCreation}
            onChange={(e) => setContentCreation(e.target.checked)}
          />
          <span className={styles.checkmark}></span>
        </label>
      </div>

      <div className="mb-6">
        <label className={styles.checkboxContainer}>
          Mobilios versijos
          <input
            type="checkbox"
            id="mobileResponsive"
            checked={mobileResponsive}
            onChange={(e) => setMobileResponsive(e.target.checked)}
          />
          <span className={styles.checkmark}></span>
        </label>
      </div>

      {/* Other form elements */}

      <GradientButton onClick={handleSubmit}>Siųsti užklausą</GradientButton>
    </div>
  );
};

const KainosPage: React.FC = () => {
  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-32 lg:pt-40">
        {/* Hero Section */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl mb-4">
            Kainos
          </h2>
          <p className="text-base text-zinc-400 mb-8">
            Sužinokite apytikslę savo svetainės kūrimo kainą naudodamiesi mūsų kainų skaičiuokle.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800 mb-16" />
        <PricingCalculator />
      </div>
    </div>
  );
};

export default KainosPage;