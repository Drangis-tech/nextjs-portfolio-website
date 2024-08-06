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
    border: `5px solid ${tech.color}`,
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
    position: 'relative',
    zIndex: 1, // Ensure it is above the container
    margin: 'auto',
  };

  // Style for the container
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '130px', // Container size larger than the octagon
    height: '130px', // Container size larger than the octagon
    position: 'relative',
    overflow: 'visible', // Ensure octagon is not clipped
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
    pointerEvents: 'none', // Ensure text does not interfere with hover effects
    zIndex: 2, // Ensure text is above the octagon
  };

  // Return the octagon component
  return (
    <div style={containerStyle}>
      <div
        style={octagonStyle}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = tech.color;
          e.currentTarget.style.borderColor = tech.color;
        }}
        onMouseLeave={e => {
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