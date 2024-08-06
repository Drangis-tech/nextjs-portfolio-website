// File: pages/apie-mus.tsx
import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Hexagon from '../components/Hexagon';

// About Us Data
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

// Tech Data
const techData = [
  { name: "HTML", category: "Front-end", color: "#E34F26" },
  { name: "CSS", category: "Front-end", color: "#1572B6" },
  { name: "JavaScript", category: "Front-end", color: "#F7DF1E" },
  { name: "Vue.js", category: "Framework", color: "#42b883" },
  { name: "Nuxt.js", category: "Framework", color: "#00C58E" },
  { name: "Bootstrap", category: "Framework", color: "#7952B3" },
  { name: "Webpack", category: "Framework", color: "#8DD6F9" },
  { name: "jQuery", category: "Front-end", color: "#0769AD" },
  { name: "PHPUnit", category: "Testing Tools", color: "#4F5B93" },
  { name: "Postman", category: "Testing Tools", color: "#FF6C37" },
  { name: "AWS", category: "Cloud", color: "#FF9900" },
  { name: "Google Cloud", category: "Cloud", color: "#4285F4" },
  { name: "WordPress", category: "Back-end", color: "#21759B" },
  { name: "GitHub", category: "Back-end", color: "#181717" },
  { name: "Python", category: "Back-end", color: "#3776AB" },
  { name: "PHP", category: "Back-end", color: "#777BB4" },
  { name: "Docker", category: "Data", color: "#2496ED" },
  { name: "Laravel", category: "Back-end", color: "#FF2D20" },
  { name: "MySQL", category: "Data", color: "#4479A1" },
  { name: "Elasticsearch", category: "Data", color: "#005571" },
];

// Team Data
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

  const renderHexagons = (category: string) => {
    return techData.filter(tech => tech.category === category).map((tech, index) => (
      <Hexagon key={index} tech={tech} />
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
              <h3 className="text-2xl font-bold text-zinc-100">{section.title}</h3>
                <p className="mt-2 text-zinc-400">{section.description}</p>
                <p className="mt-4 text-zinc-300">{section.detailedText}</p>
              </Card>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="team-section">
          <h3 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Mūsų Komanda</h3>
          <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamData.map((member, index) => (
              <div key={index} className="team-member">
                <Card className="card">
                  <h4 className="text-xl font-bold text-zinc-100">{member.name}</h4>
                  <p className="mt-2 text-zinc-400">{member.role}</p>
                  <div className="flex mt-4 space-x-4">
                    <Link href={member.linkedIn}>
                      <a className="text-zinc-400 hover:text-zinc-100">LinkedIn</a>
                    </Link>
                    <Link href={member.twitter}>
                      <a className="text-zinc-400 hover:text-zinc-100">Twitter</a>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="tech-section">
          <h3 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Technologijos</h3>
          <div style={hexagonGridStyle} className="mt-8">
            {renderHexagons('Front-end')}
            {renderHexagons('Framework')}
            {renderHexagons('Testing Tools')}
            {renderHexagons('Cloud')}
            {renderHexagons('Back-end')}
            {renderHexagons('Data')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApieMus;