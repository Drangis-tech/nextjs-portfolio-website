import React, { useState, useEffect, useRef } from 'react';

const SvgBackground: React.FC = () => {
  const [cursorPos, setCursorPos] = useState<{ x: number, y: number } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null); // Reference to the SVG element
  const dotRadius = 1; // Small dot radius
  const spacing = 50; // Spacing between dots
  const opacity = 0.2; // Default opacity for dots
  const hoverOpacity = 1; // Opacity when hovered
  const hoverRadius = 100; // Radius around the cursor where the effect is applied

  // Function to generate a grid of circles
  const generateDots = () => {
    const circles = [];
    const width = svgRef.current?.viewBox.baseVal.width || 896;
    const height = svgRef.current?.viewBox.baseVal.height || 504;

    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        const distanceToCursor = cursorPos
          ? Math.sqrt(Math.pow(x - cursorPos.x, 2) + Math.pow(y - cursorPos.y, 2))
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
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cursorX = e.clientX - svgRect.left; // Adjusted to SVG coordinate system
      const cursorY = e.clientY - svgRect.top;  // Adjusted to SVG coordinate system
      setCursorPos({ x: cursorX, y: cursorY });
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
      ref={svgRef} // Attach ref to SVG element
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 896 504"
      className="absolute inset-0 w-full h-full z-0"
    >
      <defs>
        <linearGradient id="shapeGradient" gradientTransform="rotate(0)">
          <stop offset="0%" stopColor="#feea31" />
          <stop offset="100%" stopColor="#eb4c3b" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="none" />
      <g>
        {generateDots()}
      </g>
      {/* Invisible hover effect circle */}
      {cursorPos && (
        <circle
          cx={cursorPos.x}
          cy={cursorPos.y}
          r={hoverRadius}
          fill="none"
          stroke="none"
          pointerEvents="none" // Ensures the circle itself does not interfere with cursor events
        />
      )}
    </svg>
  );
};

export default SvgBackground;