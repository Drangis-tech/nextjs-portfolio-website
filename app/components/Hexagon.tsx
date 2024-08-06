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

// Octagon component using SVG
const Octagon: React.FC<OctagonProps> = ({ tech }) => {
  // Style for the container
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '120px', // Container size
    height: '120px', // Container size
    position: 'relative',
    overflow: 'visible', // Ensure the SVG is not clipped
  };

  // Style for the SVG
  const svgStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    transition: 'transform 0.3s ease, background-color 0.3s ease, stroke 0.3s ease',
  };

  // Style for the centered text
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
  };

  return (
    <div style={containerStyle}>
      <svg
        style={svgStyle}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={e => {
          (e.currentTarget as SVGSVGElement).style.transform = 'scale(1.1)';
          (e.currentTarget as SVGSVGElement).style.stroke = tech.color;
        }}
        onMouseLeave={e => {
          (e.currentTarget as SVGSVGElement).style.transform = '';
          (e.currentTarget as SVGSVGElement).style.stroke = '#000'; // Default stroke color
        }}
      >
        <polygon
          points="50,0 100,20 100,80 50,100 0,80 0,20"
          fill="transparent"
          stroke={tech.color}
          strokeWidth="5"
        />
        <a href={tech.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
          <text x="50%" y="50%" style={textStyle} dominantBaseline="middle" textAnchor="middle">
            {tech.name}
          </text>
        </a>
      </svg>
    </div>
  );
};

export default Octagon; // Export the Octagon component as default