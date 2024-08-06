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
    width: '100px',
    height: '115px',
    backgroundColor: 'transparent',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    border: `5px solid ${tech.color}`,
    transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
    position: 'relative',
    boxSizing: 'border-box',
    overflow: 'visible',
  };

  const hexagonHoverStyle: React.CSSProperties = {
    transform: 'scale(1.1)',
    backgroundColor: tech.color,
    borderColor: tech.color,
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '120px',
    height: '140px',
    padding: '10px',
    overflow: 'visible',
  };

  return (
    <div style={containerStyle}>
      <div
        style={hexagonStyle}
        onMouseEnter={e => {
          e.currentTarget.style.transform = hexagonHoverStyle.transform;
          e.currentTarget.style.backgroundColor = hexagonHoverStyle.backgroundColor;
          e.currentTarget.style.borderColor = hexagonHoverStyle.borderColor;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = '';
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.borderColor = tech.color;
        }}
      >
        <a href={tech.url} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center w-full h-full text-white">
            {tech.name}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hexagon;