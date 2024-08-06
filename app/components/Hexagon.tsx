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

// Interface for Octagon component properties
interface OctagonProps {
  tech: Tech; // Tech object containing details of the technology
}

// Octagon component
const Octagon: React.FC<OctagonProps> = ({ tech }) => {
  // Style for the container
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '130px', // Container size
    height: '130px', // Container size
    position: 'relative',
    overflow: 'hidden', // Ensure the container handles overflow
  };

  // Style for the octagon using a pseudo-element
  const octagonStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    backgroundColor: 'transparent',
    border: `5px solid ${tech.color}`,
    transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
    position: 'relative',
    zIndex: 1, // Ensure content is above the pseudo-element
  };

  // Style for the octagon content
  const contentStyle: React.CSSProperties = {
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
    zIndex: 2, // Ensure text is above the pseudo-element
  };

  // Pseudo-element for octagon shape
  const pseudoElementStyle: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    clipPath: 'polygon(50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%, 0% 20%)',
    backgroundColor: 'transparent',
    border: `5px solid ${tech.color}`,
    zIndex: 0, // Ensure the pseudo-element is below content
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
  };

  // Return the octagon component
  return (
    <div style={containerStyle}>
      <div
        style={octagonStyle}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.backgroundColor = tech.color;
          e.currentTarget.style.borderColor = tech.color;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.borderColor = tech.color;
        }}
      >
        <div style={pseudoElementStyle}></div> {/* Pseudo-element for the shape */}
        <a href={tech.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
          <div style={contentStyle}>
            {tech.name}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Octagon; // Export the Octagon component as default