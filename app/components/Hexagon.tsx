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
    position: 'relative', // Relative positioning to allow absolute positioning of inner elements
    width: '100px', // Width of the hexagon
    height: '115px', // Height of the hexagon
    backgroundColor: 'transparent', // Default background color is transparent
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', // Shape of the hexagon
    border: `5px solid ${tech.color}`, // Border color based on tech color
    transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease', // Transition effects for hover
    boxSizing: 'border-box', // Includes border in the element's dimensions
  };

  // Style for the hexagon when hovered
  const hexagonHoverStyle: React.CSSProperties = {
    transform: 'scale(1.1)', // Scale up the hexagon on hover
    backgroundColor: tech.color, // Background color changes to tech color on hover
    borderColor: tech.color, // Border color stays the same on hover
  };

  // Container to ensure the hexagon is not cut off
  const containerStyle: React.CSSProperties = {
    display: 'flex', // Flex display to center the hexagon
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
    width: '120px', // Container width slightly larger than the hexagon
    height: '140px', // Container height slightly larger than the hexagon
    padding: '10px', // Padding to prevent cutting off borders
  };

  // Return the hexagon component
  return (
    <div style={containerStyle}>
      <div
        style={hexagonStyle} // Apply hexagon style
        onMouseEnter={e => {
          // Apply hover style on mouse enter
          e.currentTarget.style.transform = hexagonHoverStyle.transform || '';
          e.currentTarget.style.backgroundColor = hexagonHoverStyle.backgroundColor || '';
          e.currentTarget.style.borderColor = hexagonHoverStyle.borderColor || '';
        }}
        onMouseLeave={e => {
          // Revert to original style on mouse leave
          e.currentTarget.style.transform = '';
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.borderColor = tech.color;
        }}
      >
        <a href={tech.url} target="_blank" rel="noopener noreferrer">
          {/* Link to tech URL opening in a new tab */}
          <div className="flex items-center justify-center w-full h-full text-white">
            {/* Centered text inside hexagon */}
            {tech.name}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hexagon; // Export the Hexagon component as default