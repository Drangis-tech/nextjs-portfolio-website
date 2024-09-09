import React from 'react';

const SvgBackground: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 896 504" className="absolute inset-0 w-full h-full">
    <defs>
      <linearGradient id="shapeGradient" gradientTransform="rotate(0)">
        <stop offset="0%" stopColor="#feea31" />
        <stop offset="100%" stopColor="#eb4c3b" />
      </linearGradient>
    </defs>
    <g>
      <filter id="blur-filter">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
      </filter>
      {/* Adjusted circles for better visibility */}
      <circle fill="url(#shapeGradient)" opacity="0.5" cx="100" cy="100" r="40" />
      <circle fill="url(#shapeGradient)" opacity="0.5" cx="300" cy="200" r="60" />
      <circle fill="url(#shapeGradient)" opacity="0.5" cx="500" cy="150" r="50" />
      <circle fill="url(#shapeGradient)" opacity="0.5" cx="700" cy="300" r="70" />
      {/* Add or adjust more circles as needed */}
    </g>
  </svg>
);

export default SvgBackground;