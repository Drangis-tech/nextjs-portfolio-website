import React from 'react';

const SvgBackground: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 896 504" className="absolute inset-0">
    <defs>
      <linearGradient id="shapeGradient" gradientTransform="rotate(0)">
        <stop offset="0%" stopColor="#feea31" />
        <stop offset="100%" stopColor="#eb4c3b" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="#000000" />
    <g>
      <filter id="blur-filter">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur>
      </filter>
      {/* Add your SVG circle elements here */}
      {/* Keep the rest of your circle elements */}
      <circle fill="url(#shapeGradient)" opacity="1" cx="88" cy="0" r="1.5" />
      {/* etc. */}
    </g>
  </svg>
);

export default SvgBackground;