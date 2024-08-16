import React, { useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const PricingCalculator: React.FC = () => {
  const [pages, setPages] = useState<number>(1);
  const [design, setDesign] = useState<number>(500);
  const [ecommerce, setEcommerce] = useState<boolean>(false);

  const calculatePrice = () => {
    const ecommerceCost = ecommerce ? 2000 : 0;
    return pages * 100 + design + ecommerceCost;
  };

  return (
    <Card className="card">
      <article className="relative w-full h-full p-4 md:p-8 group bg-[rgba(28, 28, 30, 0.8)] hover:bg-[rgba(44, 44, 46, 0.8)]">
        <h3 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-6">Apskaičiuokite savo svetainės kainą</h3>

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

        <div className="mb-6">
          <label className="block text-sm font-medium text-zinc-100 mb-1">
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

        <div className="text-xl font-bold text-zinc-100">
          Apskaičiuota kaina: €{calculatePrice()}
        </div>
      </article>
    </Card>
  );
};

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