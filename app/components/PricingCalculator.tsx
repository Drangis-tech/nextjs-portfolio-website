import React, { useState } from 'react';
import { Card } from '../components/card'; // Adjust the path if necessary
import '../kainos/PricingCalculator.css'; // Import CSS for custom styling if needed

const PricingCalculator: React.FC = () => {
  const [pages, setPages] = useState<number>(1);
  const [design, setDesign] = useState<number>(500);
  const [ecommerce, setEcommerce] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(50); // Initial value for the slider

  const calculatePrice = () => {
    const ecommerceCost = ecommerce ? 2000 : 0;
    return pages * 100 + design + ecommerceCost + sliderValue; // Include slider value in the calculation
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

        <div className="mb-6">
          <label htmlFor="slider" className="block text-sm font-medium text-zinc-100 mb-1">
            Papildoma kaina:
          </label>
          <input
            type="range"
            id="slider"
            min="0"
            max="100"
            step="1"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-zinc-100">
            <span>0</span>
            <span>{sliderValue}</span>
            <span>100</span>
          </div>
        </div>

        <div className="text-xl font-bold text-zinc-100">
          Apskaičiuota kaina: €{calculatePrice()}
        </div>
      </article>
    </Card>
  );
};

export default PricingCalculator;