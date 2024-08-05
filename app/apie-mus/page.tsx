import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

// Sample data for technologies
const techData = [
  { name: 'React', category: 'Front-end' },
  { name: 'Vue', category: 'Front-end' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Express', category: 'Back-end' },
  { name: 'AWS', category: 'Cloud' },
  // Add more data as needed
];

const aboutUsData = [
  {
    title: "Our Mission",
    description: "We strive to create impactful digital solutions.",
    detailedText: "Our mission is to drive innovation and provide quality service."
  },
  // Add more sections as needed
];

const teamData = [
  {
    name: "John Doe",
    role: "Lead Developer",
    linkedIn: "https://linkedin.com/in/johndoe"
  },
  // Add more team members as needed
];

const ApieMus: React.FC = () => {
  const hexagonGridStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    position: 'relative'
  };

  const hexagonStyle: React.CSSProperties = {
    width: '100px',
    height: '55px',
    backgroundColor: '#2c2c2e',
    position: 'relative',
    margin: '27.5px 5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '14px',
    color: '#fff',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    cursor: 'pointer'
  };

  const hexagonBeforeAfterStyle: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    width: '0',
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent'
  };

  const hexagonBeforeStyle: React.CSSProperties = {
    ...hexagonBeforeAfterStyle,
    bottom: '100%',
    borderBottom: '27.5px solid #2c2c2e'
  };

  const hexagonAfterStyle: React.CSSProperties = {
    ...hexagonBeforeAfterStyle,
    top: '100%',
    borderTop: '27.5px solid #2c2c2e'
  };

  const renderHexagons = (category: string) => {
    return techData.filter(tech => tech.category === category).map((tech, index) => (
      <div key={index} style={hexagonStyle} title={tech.name}>
        {tech.name}
        <div style={hexagonBeforeStyle}></div>
        <div style={hexagonAfterStyle}></div>
      </div>
    ));
  };

  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Apie Mus</h2>
          <p className="mt-4 text-zinc-400">
            Sužinokite daugiau apie mūsų komandą, viziją ir vertybes, kurios veda mūsų misiją.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="apie-mus">
          {aboutUsData.map((section, index) => (
            <div key={index} className="flex">
              <Card className="card">
                <article className="relative w-full h-full p-4 md:p-8 group bg-[#1c1c1e] hover:bg-[#2c2c2e]">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      <span>{section.title}</span>
                    </div>
                  </div>

                  <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {section.description}
                  </p>
                </article>
              </Card>
              <div className="content">
                <h3 className="text-xl font-bold text-zinc-100">{section.title}</h3>
                <p className="mt-2 text-zinc-400">{section.detailedText}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Mes dirbame su</h2>

          <div style={{ marginBottom: '20px' }}>
            <h3 className="text-xl font-bold text-zinc-100">Front-end</h3>
            <div style={hexagonGridStyle}>
              {renderHexagons("Front-end")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 className="text-xl font-bold text-zinc-100">Framework</h3>
            <div style={hexagonGridStyle}>
              {renderHexagons("Framework")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 className="text-xl font-bold text-zinc-100">Data</h3>
            <div style={hexagonGridStyle}>
              {renderHexagons("Data")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 className="text-xl font-bold text-zinc-100">Testing Tools</h3>
            <div style={hexagonGridStyle}>
              {renderHexagons("Testing Tools")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 className="text-xl font-bold text-zinc-100">Cloud</h3>
            <div style={hexagonGridStyle}>
              {renderHexagons("Cloud")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 className="text-xl font-bold text-zinc-100">Back-end</h3>
            <div style={hexagonGridStyle}>
              {renderHexagons("Back-end")}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Mūsų komanda</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {teamData.map((member, index) => (
              <Card key={index} className="card">
                <article className="relative w-full h-full p-4 md:p-8 group bg-[#1c1c1e] hover:bg-[#2c2c2e]">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      <span>{member.role}</span>
                    </div>
                  </div>
                  <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                    {member.name}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {member.role}
                  </p>
                  <div className="mt-4 flex space-x-4">
                    {member.linkedIn && (
                      <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 0H4C1.791 0 0 1.791 0 4v16c0 2.209 1.791 4 4 4h16c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4zm-8 19h-3v-7h3v7zm-1.5-8.25c-0.966 0-1.75-0.784-1.75-1.75S10.534 7.25 11.5 7.25 13.25 8.034 13.25 9 12.466 10.75 11.5 10.75zM18 19h-3v-4c0-1.1-0.9-2-2-2s-2 0.9-2 2v4h-3v-7h3v1.073C11.44 12.402 12.691 12 14 12c2.209 0 4 1.791 4 4v3z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApieMus;