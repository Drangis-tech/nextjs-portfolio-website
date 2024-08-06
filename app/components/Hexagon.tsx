// File: components/Hexagon.tsx

"use client";

import React from 'react';

interface Tech {
  name: string;
  category: string;
  color: string;
  url: string;
}

interface HexagonProps {
  tech: Tech;
}

const Hexagon: React.FC<HexagonProps> = ({ tech }) => {
  const hexagonStyle: React.CSSProperties = {
    position: 'relative',
    width: '110px', // Increased width to accommodate border
    height: '125px', // Increased height to accommodate border
    backgroundColor: 'transparent', // Default background is transparent
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    border: `5px solid ${tech.color}`, // Border with tech color
    transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
    boxSizing: 'border-box', // Include border in the element's dimensions
  };

  const hexagonHoverStyle: React.CSSProperties = {
    transform: 'scale(1.1)',
    backgroundColor: tech.color, // Background color on hover
    borderColor: tech.color, // Ensure the border color stays the same on hover
  };

  return (
    <div
      style={hexagonStyle}
      onMouseEnter={e => {
        e.currentTarget.style.transform = hexagonHoverStyle.transform || '';
        e.currentTarget.style.backgroundColor = hexagonHoverStyle.backgroundColor || '';
        e.currentTarget.style.borderColor = hexagonHoverStyle.borderColor || '';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.backgroundColor = 'transparent'; // Reset to transparent background
        e.currentTarget.style.borderColor = tech.color;
      }}
    >
      <a href={tech.url} target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center w-full h-full text-white">
          {tech.name}
        </div>
      </a>
    </div>
  );
};

export default Hexagon;