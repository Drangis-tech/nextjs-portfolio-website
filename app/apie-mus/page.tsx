import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

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
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "Vue.js" },
  { name: "Nuxt.js" },
  { name: "Bootstrap" },
  { name: "Webpack" },
  { name: "jQuery" },
  { name: "PHPUnit" },
  { name: "Postman" },
  { name: "AWS" },
  { name: "Google Cloud" },
  { name: "WordPress" },
  { name: "GitHub" },
  { name: "Python" },
  { name: "PHP" },
  { name: "Docker" },
  { name: "Laravel" },
  { name: "MySQL" },
  { name: "Elasticsearch" },
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
  // Inline styles for hexagon grid
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
    transition: 'transform 0.3s ease, background-color 0.3s ease'
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
              <div key={index} style={hexagonStyle}>
                <span>{tech.name}</span>
                <div style={hexagonBeforeStyle}></div>
                <div style={hexagonAfterStyle}></div>
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
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20 0H4C1.791 0 0 1.791 0 4v16c0 2.209 1.791 4 4 4h16c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4zM8.5 19H5.5v-8h3V19zM7 10.5h-.05c-1.11 0-1.8-.766-1.8-1.728 0-.987.697-1.73 1.789-1.73s1.8.743 1.8 1.73c0 .962-.689 1.728-1.8 1.728zm11.5 8h-3v-4.2c0-1.051-.02-2.404-1.464-2.404-1.463 0-1.684 1.144-1.684 2.322V19h-3v-8h2.865v1.089h.042c.398-.756 1.372-1.551 2.825-1.551 3.027 0 3.583 1.996 3.583 4.595V19z"/></svg>
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6.003c-.803.355-1.668.593-2.573.697.924-.553 1.63-1.428 1.962-2.474-.87.518-1.83.897-2.855 1.1-.817-.87-1.98-1.41-3.265-1.41-2.467 0-4.464 1.993-4.464 4.45 0 .348.042.692.121 1.02-3.712-.186-7.028-1.965-9.22-4.674-.386.662-.606 1.434-.606 2.259 0 1.558.793 2.928 1.992 3.737-.732-.021-1.418-.225-2.016-.558v.056c0 2.178 1.55 3.997 3.601 4.409-.377.103-.774.156-1.18.156-.287 0-.569-.028-.846-.079.572 1.751 2.226 3.028 4.182 3.061-1.537 1.207-3.474 1.923-5.564 1.923-.36 0-.718-.021-1.072-.063 1.989 1.283 4.35 2.028 6.9 2.028 8.29 0 12.82-6.877 12.82-12.861 0-.198-.004-.397-.014-.594.881-.635 1.658-1.428 2.271-2.339z"/></svg>
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