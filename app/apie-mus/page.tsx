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
  { name: "Laravel", description: "Laravel is a web application framework with expressive, elegant syntax." },
  { name: "React", description: "React is a JavaScript library for building user interfaces." },
  { name: "WooCommerce", description: "WooCommerce is a customizable, open-source eCommerce platform built on WordPress." },
  { name: "JavaScript", description: "JavaScript is a programming language used to create dynamic website content." },
  { name: "Python", description: "Python is a programming language that lets you work quickly and integrate systems more effectively." },
  { name: "Docker", description: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers." },
  // Add more technologies as needed
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

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-8 lg:w-1/2">
            {aboutUsData.map((section, index) => (
              <Card key={index}>
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
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Skaityti plačiau <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Card>
            ))}
          </div>

          <div className="flex flex-col gap-8 lg:w-1/2">
            {aboutUsData.map((section, index) => (
              <div key={index} className="p-4 bg-[#1c1c1e] text-zinc-400 rounded-lg">
                <h3 className="text-xl font-bold text-zinc-100">{section.title}</h3>
                <p className="mt-2">{section.detailedText}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Mes dirbame su</h2>
          <div className="flex justify-center mt-8">
            <div className="relative grid gap-4">
              {techData.map((tech, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 border-2 border-zinc-500 hover:border-white transform hover:scale-110 transition-transform duration-300"
                >
                  <div className="absolute inset-0 flex items-center justify-center p-2 text-zinc-400">
                    <p className="text-center">{tech.name}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-2 text-zinc-200 bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-center text-xs">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Mūsų komanda</h2>
          <div className="grid gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3">
            {teamData.map((member, index) => (
              <div key={index} className="p-4 bg-[#1c1c1e] text-zinc-400 rounded-lg text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-zinc-600 rounded-full"></div>
                <h3 className="text-xl font-bold text-zinc-100">{member.name}</h3>
                <p className="mt-2">{member.role}</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <Link href={member.linkedIn}>
                    <a className="text-zinc-400 hover:text-white">LinkedIn</a>
                  </Link>
                  <Link href={member.twitter}>
                    <a className="text-zinc-400 hover:text-white">Twitter</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApieMus;