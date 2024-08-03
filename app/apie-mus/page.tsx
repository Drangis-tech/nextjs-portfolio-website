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
          <div className="titles">
            <div className="fr-end">Front-end</div>
            <div className="tst">Testing Tools</div>
            <div className="cld">Cloud</div>
            <div className="e-com">CMS/E-commerce</div>
            <div className="cicd">CI/CD</div>
            <div className="b-end">Back-end</div>
            <div className="infrastructure">Infrastructure</div>
            <div className="frmw">Framework</div>
            <div className="dt">Data</div>
          </div>
          <div className="hexagon-container">
            <div className="hexagon"><span>HTML</span></div>
            <div className="hexagon"><span>CSS</span></div>
            <div className="hexagon"><span>JavaScript</span></div>
            <div className="hexagon"><span>Vue.js</span></div>
            <div className="hexagon"><span>Nuxt.js</span></div>
            <div className="hexagon"><span>Bootstrap</span></div>
            <div className="hexagon"><span>Webpack</span></div>
            <div className="hexagon"><span>jQuery</span></div>
            <div className="hexagon"><span>PHPUnit</span></div>
            <div className="hexagon"><span>Postman</span></div>
            <div className="hexagon"><span>AWS</span></div>
            <div className="hexagon"><span>Google Cloud</span></div>
            <div className="hexagon"><span>WordPress</span></div>
            <div className="hexagon"><span>GitHub</span></div>
            <div className="hexagon"><span>Python</span></div>
            <div className="hexagon"><span>PHP</span></div>
            <div className="hexagon"><span>Docker</span></div>
            <div className="hexagon"><span>Laravel</span></div>
            <div className="hexagon"><span>MySQL</span></div>
            <div className="hexagon"><span>Elasticsearch</span></div>
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
                  <div className="flex gap-4 mt-4">
                    <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.881-.666 1.978-1.5 3-1.5 2.209 0 4 1.791 4 4v6.5z" />
                      </svg>
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.919 0 .385.044.76.127 1.122-4.087-.205-7.719-2.163-10.148-5.144-.424.728-.666 1.574-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.617v.062c0 2.388 1.698 4.384 3.946 4.838-.414.112-.849.171-1.296.171-.318 0-.627-.03-.929-.086.629 1.963 2.448 3.393 4.604 3.432-1.685 1.319-3.809 2.104-6.115 2.104-.398 0-.79-.023-1.174-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.055 0 14-7.503 14-14 0-.213-.005-.426-.014-.637.962-.694 1.797-1.56 2.457-2.548l-.047-.02z" />
                      </svg>
                    </a>
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
