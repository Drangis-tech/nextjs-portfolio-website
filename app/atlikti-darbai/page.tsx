"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card"; // Assuming the Card component is in your project

const projects = [
  {
    title: "Projektas 1",
    image: "/images/project1.jpg",
    description: "Tai yra pirmo projekto aprašymas. Tai apima dizaino darbus ir svetainės kūrimą.",
  },
  {
    title: "Projektas 2",
    image: "/images/project2.jpg",
    description: "Tai yra antro projekto aprašymas. Tai apima rinkodaros strategijos kūrimą.",
  },
  {
    title: "Projektas 3",
    image: "/images/project3.jpg",
    description: "Tai yra trečio projekto aprašymas. Tai apima SEO optimizaciją.",
  },
  {
    title: "Projektas 4",
    image: "/images/project4.jpg",
    description: "Tai yra ketvirto projekto aprašymas. Tai apima aplikacijų kūrimą.",
  },
  {
    title: "Projektas 5",
    image: "/images/project5.jpg",
    description: "Tai yra penkto projekto aprašymas. Tai apima socialinės medijos valdymą.",
  },
  {
    title: "Projektas 6",
    image: "/images/project6.jpg",
    description: "Tai yra šešto projekto aprašymas. Tai apima vaizdo įrašų redagavimą.",
  },
  {
    title: "Projektas 7",
    image: "/images/project7.jpg",
    description: "Tai yra septinto projekto aprašymas. Tai apima grafikos dizainą.",
  },
  {
    title: "Projektas 8",
    image: "/images/project8.jpg",
    description: "Tai yra aštunto projekto aprašymas. Tai apima verslo konsultacijas.",
  },
  {
    title: "Projektas 9",
    image: "/images/project9.jpg",
    description: "Tai yra devinto projekto aprašymas. Tai apima UX/UI dizainą.",
  },
  {
    title: "Projektas 10",
    image: "/images/project10.jpg",
    description: "Tai yra dešimto projekto aprašymas. Tai apima elektroninės komercijos sprendimus.",
  },
];

const AtliktiDarbai: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      {/* Navigation */}
      <Navigation />
      
      {/* Header Section */}
      <div className="px-6 pt-28 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-36 lg:pt-48">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
            Atlikti Projektai
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg md:text-xl">
            Sužinokite daugiau apie mūsų atliktus darbus, kurie atspindi mūsų kompetenciją ir patirtį.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
      </div>

      {/* Projects Section */}
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="relative bg-[rgba(28, 28, 30, 0.8)] hover:bg-[rgba(44, 44, 46, 0.8)] cursor-pointer transition-transform duration-300"
            onClick={() => setSelectedProject(index)}
          >
            <div className="relative w-full h-48 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 transform group-hover:scale-105"
              />
            </div>
            <h2 className="text-xl text-zinc-100 mt-4">{project.title}</h2>
          </Card>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject !== null && (
        <Dialog
          open={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-70" aria-hidden="true"></div>
          
          {/* Dialog Content */}
          <div className="bg-black bg-opacity-90 rounded-lg p-6 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <Image
              src={projects[selectedProject].image}
              alt={projects[selectedProject].title}
              width={400}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-2xl text-white mt-4">{projects[selectedProject].title}</h2>
            <p className="text-gray-300 mt-4">{projects[selectedProject].description}</p>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default AtliktiDarbai;