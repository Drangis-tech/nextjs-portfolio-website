// File: components/Hexagon.tsx

"use client"; // Enables the usage of client-side hooks

import React from 'react'; // Imports React

// Interface for Tech properties
interface Tech {
  name: string; // Name of the technology
  category: string; // Category of the technology
  color: string; // Color associated with the technology
  url: string; // URL for the technology
}

// Interface for Hexagon component properties
interface HexagonProps {
  tech: Tech; // Tech object containing details of the technology
}

// Hexagon component
const Hexagon: React.FC<HexagonProps> = ({ tech }) => {
  // Style for the hexagon
  const hexagonStyle: React.CSSProperties = {
    position: 'relative',
    width: '100px',
    height: '115px',
    backgroundColor: 'transparent',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    border: `5px solid ${tech.color}`, // Border color based on tech color
    transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
    boxSizing: 'border-box',
  };

  // Style for the hexagon when hovered
  const hexagonHoverStyle: React.CSSProperties = {
    transform: 'scale(1.1)',
    backgroundColor: tech.color,
    borderColor: tech.color,
  };

  // Container to ensure the hexagon is not cut off
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '120px', // Ensure enough space around the hexagon
    height: '140px', // Ensure enough space around the hexagon
    padding: '10px',
    overflow: 'hidden',
  };

  // Style for centered text inside the hexagon
  const textStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    color: 'white',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  // Return the hexagon component
  return (
    <div style={containerStyle}>
      <div
        style={hexagonStyle}
        onMouseEnter={e => {
          e.currentTarget.style.transform = hexagonHoverStyle.transform || '';
          e.currentTarget.style.backgroundColor = hexagonHoverStyle.backgroundColor || '';
          e.currentTarget.style.borderColor = hexagonHoverStyle.borderColor || '';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.borderColor = tech.color;
        }}
      >
        <a href={tech.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
          <div style={textStyle}>
            {tech.name}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hexagon; // Export the Hexagon component as default