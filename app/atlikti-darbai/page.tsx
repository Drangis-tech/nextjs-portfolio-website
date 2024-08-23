"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Navigation } from "../components/nav";  // Ensure you have a Navigation component

const projects = [
  {
    title: "Projektas 1",
    image: "/images/project1.jpg",
    description: "Tai yra pirmo projekto aprašymas.",
    technologies: "React, Tailwind CSS",
  },
  {
    title: "Projektas 2",
    image: "/images/project2.jpg",
    description: "Tai yra antro projekto aprašymas.",
    technologies: "JavaScript, SEO",
  },
  {
    title: "Projektas 3",
    image: "/images/project3.jpg",
    description: "Tai yra trečio projekto aprašymas.",
    technologies: "Node.js, Express",
  },
  {
    title: "Projektas 4",
    image: "/images/project4.jpg",
    description: "Tai yra ketvirto projekto aprašymas.",
    technologies: "Vue.js, Vuetify",
  },
  {
    title: "Projektas 5",
    image: "/images/project5.jpg",
    description: "Tai yra penkto projekto aprašymas.",
    technologies: "Python, Flask",
  },
  {
    title: "Projektas 6",
    image: "/images/project6.jpg",
    description: "Tai yra šešto projekto aprašymas.",
    technologies: "Adobe Premiere Pro, After Effects",
  },
  {
    title: "Projektas 7",
    image: "/images/project7.jpg",
    description: "Tai yra septinto projekto aprašymas.",
    technologies: "Adobe Illustrator, Photoshop",
  },
  {
    title: "Projektas 8",
    image: "/images/project8.jpg",
    description: "Tai yra aštunto projekto aprašymas.",
    technologies: "Business Intelligence, Data Analysis",
  },
  {
    title: "Projektas 9",
    image: "/images/project9.jpg",
    description: "Tai yra devinto projekto aprašymas.",
    technologies: "Figma, Sketch",
  },
  {
    title: "Projektas 10",
    image: "/images/project10.jpg",
    description: "Tai yra dešimto projekto aprašymas.",
    technologies: "Magento, WooCommerce",
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
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative overflow-hidden group cursor-pointer rounded-lg transition-transform duration-500 ${
              index % 4 === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
            }`}
            onClick={() => setSelectedProject(index)}
          >
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <div className="text-center text-white">
                  <h2 className="text-lg font-bold">{project.title}</h2>
                  <p className="mt-2 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
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
          <div
            className="fixed inset-0 bg-black opacity-50"
            aria-hidden="true"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Dialog Content */}
          <div className="relative bg-gray-900 rounded-lg p-8 max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <div className="relative w-full h-96 mb-6">
              <Image
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-3xl text-white mt-4">{projects[selectedProject].title}</h2>
            <p className="text-gray-300 mt-4 text-lg">{projects[selectedProject].description}</p>
            <p className="text-gray-400 mt-2 text-sm">{`Technologies: ${projects[selectedProject].technologies}`}</p>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default AtliktiDarbai;