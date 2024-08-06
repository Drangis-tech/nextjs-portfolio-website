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
    width: '100px', // Width of the hexagon
    height: '115px', // Height of the hexagon
    backgroundColor: 'transparent',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    border: `5px solid ${tech.color}`, // Border color based on tech color
    transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
    boxSizing: 'border-box',
    margin: '0 auto', // Center horizontally
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
    width: '140px', // Increased width to accommodate the hexagon and its border
    height: '160px', // Increased height to accommodate the hexagon and its border
    padding: '10px', // Increased padding to ensure the hexagon is well within bounds
    overflow: 'hidden',
    position: 'relative', // Ensure proper positioning
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
    fontSize: '14px', // Adjust font size if needed
    fontWeight: 'bold', // Optional: make text bold
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