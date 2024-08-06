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
    position: 'relative',
    width: '100px',
    height: '115px',
    backgroundColor: 'transparent',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    border: `5px solid ${tech.color}`,
    transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
    boxSizing: 'border-box',
  };

  const hexagonHoverStyle: React.CSSProperties = {
    transform: 'scale(1.1)',
    backgroundColor: tech.color,
    borderColor: tech.color,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLElement;
    target.style.transform = hexagonHoverStyle.transform || '';
    target.style.backgroundColor = hexagonHoverStyle.backgroundColor || '';
    target.style.borderColor = hexagonHoverStyle.borderColor || '';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLElement;
    target.style.transform = '';
    target.style.backgroundColor = 'transparent';
    target.style.borderColor = tech.color;
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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