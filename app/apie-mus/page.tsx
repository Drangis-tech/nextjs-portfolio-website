import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const aboutUsData = [
  // Same as before
];

const techData = [
  // Same as before
];

const teamData = [
  // Same as before
];

// Inline styles for hexagon grid
const hexagonGridStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '10px',
  position: 'relative',
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
};

const hexagonBeforeStyle: React.CSSProperties = {
  content: '""',
  position: 'absolute',
  width: '0',
  borderLeft: '50px solid transparent',
  borderRight: '50px solid transparent',
  bottom: '100%',
  borderBottom: '27.5px solid #2c2c2e',
};

const hexagonAfterStyle: React.CSSProperties = {
  content: '""',
  position: 'absolute',
  width: '0',
  borderLeft: '50px solid transparent',
  borderRight: '50px solid transparent',
  top: '100%',
  borderTop: '27.5px solid #2c2c2e',
};

// Main component
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
          <div style={hexagonGridStyle}>
            {techData.map((tech, index) => (
              <div key={index} style={hexagonStyle}>
                <span>{tech.name}</span>
                <div style={hexagonBeforeStyle} />
                <div style={hexagonAfterStyle} />
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
                  <div className="flex gap-4 mt-4">
                    <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.881-.666 1.978-1.5 3-1.5 2.209 0 4 1.791 4 4v6.5z" />
                      </svg>
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-0.883 0.392-1.83 0.656-2.825 0.775 1.014-0.608 1.794-1.569 2.163-2.715-0.951 0.564-2.005 0.974-3.127 1.195-0.897-0.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.201-4.92 4.92 0 0.386 0.044 0.762 0.127 1.124-4.087-0.205-7.719-2.164-10.148-5.144-0.423 0.725-0.666 1.565-0.666 2.465 0 1.701 0.867 3.2 2.184 4.078-0.806-0.026-1.566-0.247-2.229-0.616v0.062c0 2.376 1.689 4.358 3.93 4.807-0.411 0.111-0.844 0.171-1.292 0.171-0.315 0-0.623-0.031-0.923-0.088 0.623 1.947 2.432 3.364 4.576 3.404-1.675 1.312-3.787 2.095-6.076 2.095-0.395 0-0.785-0.023-1.17-0.068 2.167 1.39 4.742 2.202 7.515 2.202 9.014 0 13.945-7.469 13.945-13.945 0-0.212-0.004-0.424-0.014-0.635 0.959-0.693 1.791-1.56 2.448-2.548l-0.056-0.025z" />
                    </svg>
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