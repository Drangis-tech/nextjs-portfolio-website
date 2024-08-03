// pages/ApieMus.tsx
import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

// Tech Data
const techData = [
  { name: "HTML", category: "Front-end" },
  { name: "CSS", category: "Front-end" },
  { name: "JavaScript", category: "Front-end" },
  { name: "Vue.js", category: "Framework" },
  { name: "Nuxt.js", category: "Framework" },
  { name: "Bootstrap", category: "Framework" },
  { name: "Webpack", category: "Framework" },
  { name: "jQuery", category: "Front-end" },
  { name: "PHPUnit", category: "Testing Tools" },
  { name: "Postman", category: "Testing Tools" },
  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "WordPress", category: "Back-end" },
  { name: "GitHub", category: "Back-end" },
  { name: "Python", category: "Back-end" },
  { name: "PHP", category: "Back-end" },
  { name: "Docker", category: "Data" },
  { name: "Laravel", category: "Back-end" },
  { name: "MySQL", category: "Data" },
  { name: "Elasticsearch", category: "Data" },
];

// Styles for Hexagon
const hexagonStyle: React.CSSProperties = {
  position: 'relative',
  width: '100px',
  height: '57px',
  backgroundColor: '#2c2c2e',
  margin: '28.5px 0',
  textAlign: 'center',
  lineHeight: '57px',
  color: '#fff',
  fontSize: '14px',
  fontWeight: 'bold',
  display: 'inline-block',
  transform: 'rotate(30deg)',
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  cursor: 'pointer'
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
  borderBottom: '28.5px solid #2c2c2e',
};

const hexagonAfterStyle: React.CSSProperties = {
  ...hexagonBeforeAfterStyle,
  top: '100%',
  borderTop: '28.5px solid #2c2c2e',
};

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '20px'
};

const categoryTitleStyle: React.CSSProperties = {
  color: '#fff',
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px'
};

const ApieMus: React.FC = () => {
  // Function to render hexagons for each category
  const renderHexagons = (category: string) => {
    return techData.filter(tech => tech.category === category).map((tech, index) => (
      <div key={index} style={hexagonStyle} title={tech.name}>
        <div style={hexagonBeforeStyle}></div>
        <div style={hexagonAfterStyle}></div>
        {tech.name}
      </div>
    ));
  };

  return (
    <div className="relative pb-16 bg-[#161618]">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Apie Mus</h2>
          <p className="mt-4 text-zinc-400">
            Sužinokite daugiau apie mūsų komandą, viziją ir vertybes, kurios veda mūsų misiją.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Mes dirbame su</h2>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={categoryTitleStyle}>Front-end</h3>
            <div style={sectionStyle}>
              {renderHexagons("Front-end")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={categoryTitleStyle}>Framework</h3>
            <div style={sectionStyle}>
              {renderHexagons("Framework")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={categoryTitleStyle}>Data</h3>
            <div style={sectionStyle}>
              {renderHexagons("Data")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={categoryTitleStyle}>Testing Tools</h3>
            <div style={sectionStyle}>
              {renderHexagons("Testing Tools")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={categoryTitleStyle}>Cloud</h3>
            <div style={sectionStyle}>
              {renderHexagons("Cloud")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={categoryTitleStyle}>Back-end</h3>
            <div style={sectionStyle}>
              {renderHexagons("Back-end")}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ApieMus;