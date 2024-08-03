import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import ParticlesComponent from "../components/Particles";

const aboutUsData = [
  {
    title: "Mūsų Komanda",
    description: "Susipažinkite su mūsų talentinga ir atsidavusia komanda, kuri deda visas pastangas, kad pasiektų išskirtinių rezultatų.",
    detailedText: "Mūsų komandoje dirba įvairių sričių specialistai, kurie kartu kuria inovatyvius sprendimus ir siekia aukščiausių kokybės standartų. Kiekvienas narys įneša savo unikalų indėlį, prisidėdamas prie mūsų bendrų tikslų įgyvendinimo."
  },
  {
    title: "Mūsų Vizija",
    description: "Siekiame revoliucionuoti pramonę su inovatyviais sprendimais ir neprilygstamu aptarnavimu.",
    detailedText: "Mūsų vizija yra tapti rinkos lyderiais, kurie nuolat plečiasi ir tobulėja. Mes siekiame kurti vertę savo klientams, darbuotojams ir bendruomenei, naudodamiesi pažangiausiomis technologijomis ir metodikomis."
  },
  {
    title: "Mūsų Vertybės",
    description: "Sąžiningumas, Tobulumas ir Bendradarbiavimas yra pagrindinės vertybės, kurios veda mus į sėkmę.",
    detailedText: "Mūsų vertybės yra mūsų veiklos pagrindas. Mes siekiame sąžiningumo visuose santykiuose, tobulumo kiekviename projekte ir bendradarbiavimo visose veiklos srityse. Šios vertybės padeda mums kurti stiprius ir ilgalaikius ryšius su klientais ir partneriais."
  },
];

const techData = [
  { name: "HTML", category: "Front-end" },
  { name: "CSS", category: "Front-end" },
  { name: "JavaScript", category: "Front-end" },
  { name: "Vue.js", category: "Framework" },
  { name: "Nuxt.js", category: "Framework" },
  { name: "Bootstrap", category: "Framework" },
  { name: "Webpack", category: "Framework" },
  { name: "jQuery", category: "Framework" },
  { name: "PHPUnit", category: "Testing Tools" },
  { name: "Postman", category: "Testing Tools" },
  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "WordPress", category: "Framework" },
  { name: "GitHub", category: "Cloud" },
  { name: "Python", category: "Back-end" },
  { name: "PHP", category: "Back-end" },
  { name: "Docker", category: "Cloud" },
  { name: "Laravel", category: "Back-end" },
  { name: "MySQL", category: "Data" },
  { name: "Elasticsearch", category: "Data" },
];

const teamData = [
  {
    name: "Jonas Jonaitis",
    role: "CEO",
    linkedIn: "#",
    twitter: "#",
  },
  {
    name: "Petras Petraitis",
    role: "CTO",
    linkedIn: "#",
    twitter: "#",
  },
  {
    name: "Ona Onaitė",
    role: "CFO",
    linkedIn: "#",
    twitter: "#",
  },
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
    backgroundColor: 'rgba(44, 44, 46, 0.6)', // transparent with blur effect
    position: 'relative',
    margin: '27.5px 5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '14px',
    color: '#fff',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    backdropFilter: 'blur(5px)', // blur effect
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' // subtle shadow
  };

  const hexagonHoverStyle: React.CSSProperties = {
    position: 'absolute',
    width: '10px',
    height: '10px',
    backgroundColor: 'white',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    mixBlendMode: 'multiply'
  };

  const [hoverPosition, setHoverPosition] = React.useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setHoverPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
  };

  const renderHexagons = (category: string) => (
    techData.filter(tech => tech.category === category).map((tech, index) => (
      <div
        key={index}
        style={hexagonStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {hoverPosition && (
          <div
            style={{
              ...hexagonHoverStyle,
              top: `${hoverPosition.y}px`,
              left: `${hoverPosition.x}px`,
            }}
          />
        )}
        <span>{tech.name}</span>
      </div>
    ))
  );

  return (
    <div className="relative pb-16 bg-[#161618] overflow-hidden">
      <ParticlesComponent className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
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
          <div style={hexagonGridStyle}>
            {techData.map((tech, index) => (
              <div
                key={index}
                style={hexagonStyle}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {hoverPosition && (
                  <div
                    style={{
                      ...hexagonHoverStyle,
                      top: `${hoverPosition.y}px`,
                      left: `${hoverPosition.x}px`,
                    }}
                  />
                )}
                <span>{tech.name}</span>
              </div>
            ))}
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
                          <path d="M20 0H4C1.791 0 0 1.791 0 4v16c0 2.209 1.791 4 4 4h16c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4zM8.5 19H5.5v-8h3V19zM7 10.5h-.05c-1.11 0-1.8-.766-1.8-1.728 0-.987.697-1.73 1.789-1.73s1.8.743 1.8 1.73c0 .962-.689 1.728-1.8 1.728zm11.5 8h-3v-4.2c0-1.051-.02-2.404-1.464-2.404-1.463 0-1.684 1.144-1.684 2.322V19h-3v-8h2.865v1.089h.042c.398-.756 1.372-1.551 2.825-1.551 3.027 0 3.583 1.996 3.583 4.595V19z"/>
                        </svg>
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.46 6.003c-.803.355-1.668.593-2.573.697.924-.553 1.63-1.428 1.962-2.474-.87.518-1.83.897-2.855 1.1-.817-.87-1.98-1.41-3.265-1.41-2.467 0-4.464 1.993-4.464 4.45 0 .348.042.692.121 1.02-3.712-.186-7.028-1.965-9.22-4.674-.386.662-.606 1.434-.606 2.259 0 1.558.793 2.928 1.992 3.737-.732-.021-1.418-.225-2.016-.558v.056c0 2.178 1.55 3.997 3.601 4.409-.377.103-.774.156-1.18.156-.287 0-.569-.028-.846-.079.572 1.751 2.226 3.028 4.182 3.061-1.537 1.207-3.474 1.923-5.564 1.923-.36 0-.718-.021-1.072-.063 1.989 1.283 4.35 2.028 6.9 2.028 8.29 0 12.82-6.877 12.82-12.861 0-.198-.004-.397-.014-.594.881-.635 1.658-1.428 2.271-2.339z"/>
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
                   