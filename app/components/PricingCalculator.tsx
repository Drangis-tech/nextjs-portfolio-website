import React, { useState } from 'react';
import '../kainos/PricingCalculator.css'; // Adjust the path to your CSS file

const PricingCalculator: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <div className="pricing-calculator">
      <h2>Select your plan</h2>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={handleChange}
          className="slider"
        />
        <div className="slider-labels">
          <span>0</span>
          <span>100</span>
        </div>
      </div>
      <div className="slider-value">
        <p>Selected value: {value}</p>
      </div>
    </div>
  );
};

export default PricingCalculator;