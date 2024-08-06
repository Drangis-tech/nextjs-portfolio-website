// File: components/Hexagon.tsx
import React from 'react';

interface HexagonProps {
  tech: { name: string; url: string; color: string };
}

const Hexagon: React.FC<HexagonProps> = ({ tech }) => {
  const hexagonStyle: React.CSSProperties = {
    width: '100px',
    height: '55px',
    position: 'relative',
    margin: '27.5px 5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '14px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    backgroundColor: 'transparent', // Default transparent background
    border: '1px solid rgba(255, 255, 255, 0.2)', // Optional border for better visibility
  };

  const hexagonBeforeAfterStyle: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    width: '0',
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
  };

  const hexagonBeforeStyle: React.CSSProperties = {
    ...hexagonBeforeAfterStyle,
    bottom: '100%',
    borderBottomColor: 'transparent', // Default transparent border
  };

  const hexagonAfterStyle: React.CSSProperties = {
    ...hexagonBeforeAfterStyle,
    top: '100%',
    borderTopColor: 'transparent', // Default transparent border
  };

  return (
    <div
      style={hexagonStyle}
      onClick={() => window.open(tech.url, '_blank')}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = tech.color;
        (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
        (e.currentTarget.querySelectorAll('div')[0] as HTMLElement).style.borderBottomColor = tech.color;
        (e.currentTarget.querySelectorAll('div')[1] as HTMLElement).style.borderTopColor = tech.color;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
        (e.currentTarget.querySelectorAll('div')[0] as HTMLElement).style.borderBottomColor = 'transparent';
        (e.currentTarget.querySelectorAll('div')[1] as HTMLElement).style.borderTopColor = 'transparent';
      }}
      title={tech.name}
    >
      {tech.name}
      <div style={hexagonBeforeStyle}></div>
      <div style={hexagonAfterStyle}></div>
    </div>
  );
};

export default Hexagon;