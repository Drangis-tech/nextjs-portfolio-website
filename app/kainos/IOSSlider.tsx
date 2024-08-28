import React from 'react';

interface IOSSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const IOSSlider: React.FC<IOSSliderProps> = ({ value, onChange, min = 1, max = 10 }) => {
  return (
    <div className="ios-slider">
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value} 
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider"
      />
      <div className="value-display">{value}</div>
      <style jsx>{`
        .slider {
          -webkit-appearance: none;
          width: 100%;
          height: 8px;
          background: #ddd;
          outline: none;
          opacity: 0.7;
          transition: opacity .2s;
        }
        .slider:hover {
          opacity: 1;
        }
        .value-display {
          text-align: center;
          color: #fff;
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
};

export default IOSSlider;