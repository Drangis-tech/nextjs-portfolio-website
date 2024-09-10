import React, { useState, useEffect } from 'react';

interface SvgBackgroundProps {
  cursorPos: { x: number, y: number } | null;
}

const SvgBackground: React.FC<SvgBackgroundProps> = ({ cursorPos }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Update window size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dotRadius = 1; // Small dot radius
  const spacing = 50; // Spacing between dots
  const opacity = 0.2; // Default lower opacity
  const hoverRadius = 100; // Radius of the hover effect area

  // Function to generate a grid of circles
  const generateDots = () => {
    const circles = [];
    if (windowSize.width && windowSize.height) {
      // Adjust grid size to be bigger than the screen to ensure full coverage
      for (let x = 0; x < windowSize.width * 2; x += spacing) { // Multiply by 2 for extra width
        for (let y = 0; y < windowSize.height * 2; y += spacing) { // Multiply by 2 for extra height
          const distance = cursorPos
            ? Math.sqrt(Math.pow(cursorPos.x - x, 2) + Math.pow(cursorPos.y - y, 2))
            : Infinity; // Use Infinity if cursorPos is null to default opacity

          const currentOpacity = distance < hoverRadius ? 0.8 : opacity; // Increase opacity within hover radius

          circles.push(
            <circle
              key={`${x}-${y}`}
              fill="url(#shapeGradient)"
              cx={x}
              cy={y}
              r={dotRadius}
              opacity={currentOpacity}
            />
          );
        }
      }
    }
    return circles;
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${windowSize.width * 2} ${windowSize.height * 2}`} // Ensure viewBox covers extra area
      className="absolute inset-0 w-full h-full z-0"
    >
      <defs>
        <linearGradient id="shapeGradient" gradientTransform="rotate(0)">
          <stop offset="0%" stopColor="#feea31" />
          <stop offset="100%" stopColor="#eb4c3b" />
        </linearGradient>
      </defs>
      <g>{generateDots()}</g>
    </svg>
  );
};

export default SvgBackground;