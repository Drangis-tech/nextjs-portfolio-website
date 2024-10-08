"use client";

import React, { useEffect } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faEye, faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer"; // Import Footer Component
import GridPattern from "../components/grid-pattern"; // Import GridPattern component
import Image from 'next/image'; // Import Image from next.js
import { Linkedin, PersonLinesFill, Eye, Shield } from 'react-bootstrap-icons'; // Import Linkedin icon



// Team Data
const teamData = [
  {
    name: "Nojus Mykolaitis",
    role: "CEO",
    linkedIn: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "Lana K.",
    role: "Wordpress & Shopify Developer",
    flag: '/flags/ukraine.svg' // Add flag for Lana K.
  },
  {
    name: "Kajus D.",
    role: "Projects Manager",
  },
];

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

const ApieMus: React.FC = () => {
  useEffect(() => {
    // Set the document title
    document.title = "Apie mus | Brandforge.lt";
  }, []);

  return (
    <div className="relative min-h-screen bg-black"> {/* Set the background to black */}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0">
        <GridPattern
          width={40}
          height={40}
          className="w-full h-full opacity-15 pointer-events-none"
          strokeDasharray="0"
        />
      </div>

      {/* Fading Effect at the Edges */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Fade */}
        <div className="absolute top-0 left-0 right-0 h-1/6 bg-gradient-to-b from-black to-transparent" />
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-1/6 bg-gradient-to-t from-black to-transparent" />
        {/* Left Fade */}
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent" />
        {/* Right Fade */}
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent" />
      </div>

      <Navigation />

      {/* Hero Section */}
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-32 lg:pt-40 relative z-20"> {/* Ensure Hero Section has a higher z-index */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Apie Mus
          </h1>
          <p className="mt-4 text-zinc-400">
            Sužinokite daugiau apie mūsų komandą, viziją ir vertybes, kurios veda mūsų misiją.
          </p>
        </div>
        {/* Divider Line */}
        <div className="w-full h-px bg-zinc-800" />
      </div>

{/* About Us Sections */}
<div className="px-6 pt-12 space-y-12 max-w-7xl lg:px-8 md:space-y-16 md:pt-16 lg:pt-20 mx-auto relative z-20"> {/* Adjusted z-index */}
  {aboutUsData.map((section, index) => (
    <div key={index} className="flex flex-col items-start text-left md:flex-row md:items-start md:space-x-12"> {/* Changed items-center to items-start and text-center to text-left */}
      <Card className="w-full md:w-1/2 flex-shrink-0">
        <article className="relative w-full h-full p-6 group bg-[rgba(28, 28, 30, 0.8)] hover:bg-[rgba(44, 44, 46, 0.8)]">
          <div className="text-4xl text-zinc-100">
            {section.title === "Mūsų Komanda" && <PersonLinesFill />} {/* Updated icon */}
            {section.title === "Mūsų Vizija" && <Eye />} {/* Updated icon */}
            {section.title === "Mūsų Vertybės" && <Shield />} {/* Updated icon */}
          </div>
          <h3 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl">
            {section.title}
          </h3>
          <p className="mt-2 leading-6 text-zinc-400 group-hover:text-zinc-300 text-base sm:text-lg">
            {section.description}
          </p>
        </article>
      </Card>
      <div className="w-full mt-6 md:mt-0 md:w-1/2">
        <p className="mt-2 text-zinc-400 text-base sm:text-lg">
          {section.detailedText}
        </p>
      </div>
    </div>
  ))}

      {/* Team Section */}
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-32 lg:pt-40 relative z-20"> {/* Ensure Hero Section has a higher z-index */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Komanda
          </h1>
          <p className="mt-4 text-zinc-400">
            Sužinokite daugiau apie mūsų komandos narius.
          </p>
        </div>
        {/* Divider Line */}
        <div className="w-full h-px bg-zinc-800" />
      </div>
        

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 mt-12">
  {teamData.map((member, index) => (
    <Card key={index} className="w-full">
      <article className="relative w-full h-full p-6 group bg-[rgba(28, 28, 30, 0.8)] hover:bg-[rgba(44, 44, 46, 0.8)]">
        
        <div className="flex justify-between items-center text-xs text-zinc-100">
          <span>{member.role}</span>
          
          {member.name === "Lana K." && (
            <img
              src="/flags/ukraine.svg"
              alt="Ukraine Flag"
              className="h-4 w-6"
            />
          )}
        </div>

        <h3 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white">
          {member.name}
        </h3>

        <div className="flex space-x-3 mt-4">
          <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
            {/* Conditionally render Linkedin icon for Nojus */}
            {member.name === "Nojus Mykolaitis" ? (
              <Linkedin className="text-zinc-400 hover:text-zinc-300" />
            ) : (
              <FontAwesomeIcon icon={["fab", "linkedin"]} className="text-zinc-400 hover:text-zinc-300" />
            )}
          </a>
        </div>
      </article>
    </Card>
  ))}
</div>
      </div>

      {/* Add Footer with margin above */}
      <div className="mt-40"> {/* Creates a gap below the last content */}
        <Footer />
      </div>
    </div>
  );
};

export default ApieMus;