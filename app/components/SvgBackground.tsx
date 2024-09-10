import React, { useState, useEffect } from 'react';

interface SvgBackgroundProps {
  cursorPos: { x: number, y: number } | null;
}

const SvgBackground: React.FC<SvgBackgroundProps> = ({ cursorPos }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [spacing, setSpacing] = useState(50); // Default spacing is for desktop

  // Update window size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      
      // Adjust dot spacing based on screen width (responsive behavior)
      if (window.innerWidth < 768) {
        setSpacing(30); // Smaller spacing on mobile devices
      } else if (window.innerWidth < 1024) {
        setSpacing(40); // Medium spacing on tablets
      } else {
        setSpacing(50); // Default spacing for larger screens
      }
    };

    handleResize(); // Set initial size and spacing
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dotRadius = 1; // Small dot radius
  const opacity = 0.2; // Default lower opacity
  const hoverRadius = 100; // Radius of the hover effect area

  // Function to generate a grid of circles with dynamic spacing
  const generateDots = () => {
    const circles = [];
    if (windowSize.width && windowSize.height) {
      for (let x = 0; x < windowSize.width; x += spacing) {
        for (let y = 0; y < windowSize.height; y += spacing) {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${windowSize.width} ${windowSize.height}`} className="absolute inset-0 w-full h-full z-0">
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