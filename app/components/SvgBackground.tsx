import React from 'react';

const SvgBackground: React.FC = () => {
  const dotRadius = 5; // Small radius for dots
  const spacing = 30; // Space between dots

  // Function to generate a grid of circles
  const generateDots = () => {
    const circles = [];
    for (let x = 0; x < 896; x += spacing) {
      for (let y = 0; y < 504; y += spacing) {
        circles.push(
          <circle
            key={`${x}-${y}`}
            fill="url(#shapeGradient)"
            cx={x}
            cy={y}
            r={dotRadius}
            opacity={Math.random() * 0.7 + 0.3} // Random opacity between 0.3 and 1
          />
        );
      }
    }
    return circles;
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 896 504" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="shapeGradient" gradientTransform="rotate(0)">
          <stop offset="0%" stopColor="#feea31" />
          <stop offset="100%" stopColor="#eb4c3b" />
        </linearGradient>
      </defs>
      <g>
        {generateDots()}
      </g>
    </svg>
  );
};

export default SvgBackground;