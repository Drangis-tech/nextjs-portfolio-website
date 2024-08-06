// File: components/Hexagon.tsx
'use client';

import React from 'react';

interface Tech {
  category: string;
  name: string;
  url: string;
  color: string;
}

const Hexagon: React.FC<{ tech: Tech }> = ({ tech }) => {
  const { name, url, color } = tech;

  const hexagonStyle: React.CSSProperties = {
    width: '104px',
    height: '60px',
    backgroundColor: color,
    clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    margin: '0 2px',
  };

  const handleClick = () => {
    window.open(url, '_blank');
  };

  const textStyle: React.CSSProperties = {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '12px',
    padding: '0 5px'
  };

  return (
    <div
      style={hexagonStyle}
      onClick={handleClick}
      onMouseEnter={() => console.log(`Hovering over ${name}`)}
      onMouseLeave={() => console.log(`Leaving ${name}`)}
      title={name}
    >
      <div style={textStyle}>{name}</div>
    </div>
  );
};

export default Hexagon;