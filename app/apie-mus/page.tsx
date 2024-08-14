// File: app/apie-mus/page.tsx

import Link from "next/link";
import React, { useEffect, useRef } from "react";
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
  { name: "HTML", category: "Front-end", color: "#E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", category: "Front-end", color: "#1572B6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", category: "Front-end", color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Vue.js", category: "Framework", color: "#42b883", url: "https://vuejs.org/" },
  { name: "Nuxt.js", category: "Framework", color: "#00C58E", url: "https://nuxtjs.org/" },
  { name: "Bootstrap", category: "Framework", color: "#7952B3", url: "https://getbootstrap.com/" },
  { name: "Webpack", category: "Framework", color: "#8DD6F9", url: "https://webpack.js.org/" },
  { name: "jQuery", category: "Front-end", color: "#0769AD", url: "https://jquery.com/" },
  { name: "PHPUnit", category: "Testing Tools", color: "#4F5B93", url: "https://phpunit.de/" },
  { name: "Postman", category: "Testing Tools", color: "#FF6C37", url: "https://www.postman.com/" },
  { name: "AWS", category: "Cloud", color: "#FF9900", url: "https://aws.amazon.com/" },
  { name: "Google Cloud", category: "Cloud", color: "#4285F4", url: "https://cloud.google.com/" },
  { name: "WordPress", category: "Back-end", color: "#21759B", url: "https://wordpress.org/" },
  { name: "GitHub", category: "Back-end", color: "#181717", url: "https://github.com/" },
  { name: "Python", category: "Back-end", color: "#3776AB", url: "https://www.python.org/" },
  { name: "PHP", category: "Back-end", color: "#777BB4", url: "https://www.php.net/" },
  { name: "Docker", category: "Data", color: "#2496ED", url: "https://www.docker.com/" },
  { name: "Laravel", category: "Back-end", color: "#FF2D20", url: "https://laravel.com/" },
  { name: "MySQL", category: "Data", color: "#4479A1", url: "https://www.mysql.com/" },
  { name: "Elasticsearch", category: "Data", color: "#005571", url: "https://www.elastic.co/" },
];

// Team Data
const teamData = [
  {
    name: "Nojus Mykolaitis",
    role: "CEO",
    linkedIn: "https://www.linkedin.com/in/nojus-mykolaitis",
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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const hexagonGridStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    padding: '10px',
    overflow: 'visible',
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
            <div
              key={index}
              className="flex transition-opacity opacity-0 duration-1000" 
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <Card className="card">
                <article className="relative w-full h-full p-4 md:p-8 group bg-[rgba(28, 28, 30, 0.8)] hover:bg-[rgba(44, 44, 46, 0.8)]"> {/* Making the cards semi-transparent */}
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
              <div className="content ml-4">
                <h3 className="text-xl font-bold text-zinc-100">{section.title}</h3>
                <p className="mt-2 text-zinc-400">{section.detailedText}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Mes dirbame su</h2>

          <div className="w-full h-px bg-zinc-800" />

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

          <div style={{ marginBottom: '20px' }}>
            <h3 className="text-xl font-bold text-zinc-100">Data</h3>
            <div style={hexagonGridStyle}>
              {renderHexagons("Data")}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Komanda</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-16">
            {teamData.map((member, index) => (
              <Card key={index} className="card">
                <article className="relative w-full h-full p-4 md:p-8 group bg-[rgba(28, 28, 30, 0.8)] hover:bg-[rgba(44, 44, 46, 0.8)]"> {/* Making the cards semi-transparent */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      <span>{member.role}</span>
                    </div>
                  </div>

                  <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                    {member.name}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    <a href={member.linkedIn} className="text-blue-400 hover:text-blue-300">LinkedIn</a> | <a href={member.twitter} className="text-blue-400 hover:text-blue-300">Twitter</a>
                  </p>
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