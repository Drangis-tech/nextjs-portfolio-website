// File: components/Hexagon.tsx

import React from 'react';

const Hexagon = ({ tech }) => {
  const hexagonStyle = {
    position: 'relative',
    width: '100px',
    height: '115px',
    backgroundColor: tech.color,
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    border: `5px solid ${tech.color}`, // Add border with tech color
    transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
  };

  const hexagonHoverStyle = {
    transform: 'scale(1.1)',
    backgroundColor: 'transparent',
    borderColor: tech.color, // Ensure the border color stays the same on hover
  };

  return (
    <div
      style={hexagonStyle}
      onMouseEnter={e => {
        e.currentTarget.style.transform = hexagonHoverStyle.transform;
        e.currentTarget.style.backgroundColor = hexagonHoverStyle.backgroundColor;
        e.currentTarget.style.borderColor = hexagonHoverStyle.borderColor;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.backgroundColor = tech.color;
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