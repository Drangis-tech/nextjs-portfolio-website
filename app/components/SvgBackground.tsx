import React from 'react';

const SvgBackground: React.FC = () => {
  const dotRadius = 1; // Small dot radius
  const spacing = 50; // Increased spacing between dots
  const opacity = 0.2; // Lower opacity for subtle effect

  // Function to generate a grid of circles with larger gaps
  const generateDots = () => {
    const circles = [];
    const width = 896; // Default SVG width
    const height = 504; // Default SVG height

    // Generate dots to cover the entire SVG area
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        circles.push(
          <circle
            key={`${x}-${y}`}
            fill="url(#shapeGradient)"
            cx={x}
            cy={y}
            r={dotRadius}
            opacity={opacity} // Uniform opacity
          />
        );
      }
    }
    return circles;
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full z-0"
    >
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