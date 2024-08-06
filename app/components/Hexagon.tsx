// File: components/Octagon.tsx

"use client"; // Enables the usage of client-side hooks

import React from 'react'; // Imports React

// Interface for Tech properties
interface Tech {
  name: string; // Name of the technology
  category: string; // Category of the technology
  color: string; // Color associated with the technology
  url: string; // URL for the technology
}

// Interface for Octagon component properties
interface OctagonProps {
  tech: Tech; // Tech object containing details of the technology
}

// Octagon component
const Octagon: React.FC<OctagonProps> = ({ tech }) => {
  // Style for the octagon
  const octagonStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    backgroundColor: 'transparent',
    clipPath: 'polygon(50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%, 0% 20%)',
    border: `5px solid ${tech.color}`, // Border color based on tech color
    transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
    boxSizing: 'border-box',
    position: 'relative',
    margin: '0 auto',
  };

  // Style for the octagon when hovered
  const octagonHoverStyle: React.CSSProperties = {
    transform: 'scale(1.1)',
    backgroundColor: tech.color,
    borderColor: tech.color,
  };

  // Container to ensure the octagon is not cut off
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '130px', // Ensure the container is larger than the octagon
    height: '130px', // Ensure the container is larger than the octagon
    overflow: 'visible', // Allow the octagon to be visible
    position: 'relative',
  };

  // Style for centered text inside the octagon
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
    pointerEvents: 'none',
  };

  // Return the octagon component
  return (
    <div style={containerStyle}>
      <div
        style={octagonStyle}
        onMouseEnter={e => {
          e.currentTarget.style.transform = octagonHoverStyle.transform || '';
          e.currentTarget.style.backgroundColor = octagonHoverStyle.backgroundColor || '';
          e.currentTarget.style.borderColor = octagonHoverStyle.borderColor || '';
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

export default Octagon; // Export the Octagon component as default