// File: components/PolygonShape.tsx

"use client"; // Enables the usage of client-side hooks

import React from 'react'; // Imports React

// Interface for Tech properties
interface Tech {
  name: string; // Name of the technology
  category: string; // Category of the technology
  color: string; // Color associated with the technology
  url: string; // URL for the technology
}

// Interface for PolygonShape component properties
interface PolygonShapeProps {
  tech: Tech; // Tech object containing details of the technology
}

// PolygonShape component
const PolygonShape: React.FC<PolygonShapeProps> = ({ tech }) => {
  // Style for the polygon shape
  const polygonStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    backgroundColor: 'transparent',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', // Hexagon shape
    border: `5px solid ${tech.color}`,
    transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
    position: 'relative',
    zIndex: 1,
    margin: 'auto',
  };

  // Style for the container
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '120px', // Container size slightly larger than the polygon
    height: '120px', // Container size slightly larger than the polygon
    position: 'relative',
    overflow: 'visible', // Ensure the polygon is not clipped
  };

  // Style for centered text inside the polygon
  const textStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    pointerEvents: 'none', // Ensure text does not interfere with hover effects
    zIndex: 2, // Ensure text is above the polygon
  };

  return (
    <div style={containerStyle}>
      <div
        style={polygonStyle}
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
        <a href={tech.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
          <div style={textStyle}>
            {tech.name}
          </div>
        </a>
      </div>
    </div>
  );
};

export default PolygonShape; // Export the PolygonShape component as default