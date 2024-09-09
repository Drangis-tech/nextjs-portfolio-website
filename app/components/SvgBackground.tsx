import React, { useState, useEffect } from 'react';

const SvgBackground: React.FC = () => {
  const [hoveredCircle, setHoveredCircle] = useState<{ x: number, y: number } | null>(null);
  const dotRadius = 1; // Small dot radius
  const spacing = 50; // Spacing between dots
  const opacity = 0.2; // Lower opacity for subtle effect
  const hoverOpacity = 1; // Opacity when hovered
  const hoverRadius = 100; // Radius around the cursor where the effect is applied

  // Function to generate a grid of circles with larger gaps
  const generateDots = () => {
    const circles = [];
    const width = 896; // Default width of the pattern
    const height = 504; // Default height of the pattern

    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        const distanceToCursor = hoveredCircle
          ? Math.sqrt(Math.pow(x - hoveredCircle.x, 2) + Math.pow(y - hoveredCircle.y, 2))
          : Infinity;
        const currentOpacity = distanceToCursor <= hoverRadius ? hoverOpacity : opacity;
        circles.push(
          <circle
            key={`${x}-${y}`}
            fill="url(#shapeGradient)"
            cx={x}
            cy={y}
            r={dotRadius}
            opacity={currentOpacity} // Change opacity based on hover effect
          />
        );
      }
    }
    return circles;
  };

  // Function to handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const svgElement = document.querySelector('svg');
    const svgRect = svgElement?.getBoundingClientRect();

    if (svgRect) {
      setHoveredCircle({
        x: clientX - svgRect.left,
        y: clientY - svgRect.top,
      });
    }
  };

  // Add event listener on mount
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 896 504"
      className="absolute inset-0 w-full h-full z-0"
      preserveAspectRatio="repeat"
    >
      <defs>
        <linearGradient id="shapeGradient" gradientTransform="rotate(0)">
          <stop offset="0%" stopColor="#feea31" />
          <stop offset="100%" stopColor="#eb4c3b" />
        </linearGradient>
        <pattern id="dotPattern" width={spacing} height={spacing} patternUnits="userSpaceOnUse">
          {generateDots()}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotPattern)" />
    </svg>
  );
};

export default SvgBackground;