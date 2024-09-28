"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import GridPattern from '../components/grid-pattern'; // Import GridPattern component
import Footer from '../components/Footer'; // Import Footer component

const projects = [
  {
    title: "Projektas 1",
    image: "/images/project1.jpg",
    description: "Tai yra pirmo projekto aprašymas. Tai apima dizaino darbus ir svetainės kūrimą.",
    technologies: "React, Tailwind CSS",
  },
  {
    title: "Projektas 2",
    image: "/images/project2.jpg",
    description: "Tai yra antro projekto aprašymas. Tai apima rinkodaros strategijos kūrimą.",
    technologies: "JavaScript, SEO",
  },
  {
    title: "Projektas 3",
    image: "/images/project3.jpg",
    description: "Tai yra trečio projekto aprašymas. Tai apima SEO optimizaciją.",
    technologies: "Node.js, Express",
  },
  {
    title: "Projektas 4",
    image: "/images/project4.jpg",
    description: "Tai yra ketvirto projekto aprašymas. Tai apima aplikacijų kūrimą.",
    technologies: "Vue.js, Vuetify",
  },
  {
    title: "Projektas 5",
    image: "/images/project5.jpg",
    description: "Tai yra penkto projekto aprašymas. Tai apima socialinės medijos valdymą.",
    technologies: "Python, Flask",
  },
  {
    title: "Projektas 6",
    image: "/images/project6.jpg",
    description: "Tai yra šešto projekto aprašymas. Tai apima vaizdo įrašų redagavimą.",
    technologies: "Adobe Premiere Pro, After Effects",
  },
  {
    title: "Projektas 7",
    image: "/images/project7.jpg",
    description: "Tai yra septinto projekto aprašymas. Tai apima grafikos dizainą.",
    technologies: "Adobe Illustrator, Photoshop",
  },
  {
    title: "Projektas 8",
    image: "/images/project8.jpg",
    description: "Tai yra aštunto projekto aprašymas. Tai apima verslo konsultacijas.",
    technologies: "Business Intelligence, Data Analysis",
  },
  {
    title: "Projektas 9",
    image: "/images/project9.jpg",
    description: "Tai yra devinto projekto aprašymas. Tai apima UX/UI dizainą.",
    technologies: "Figma, Sketch",
  },
  {
    title: "Projektas 10",
    image: "/images/project10.jpg",
    description: "Tai yra dešimto projekto aprašymas. Tai apima elektroninės komercijos sprendimus.",
    technologies: "Magento, WooCommerce",
  },
];

const AtliktiDarbai: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    // Set the document title
    document.title = "Atlikti darbai | Brandforge.lt";
  }, []);

  return (
    <div className="relative min-h-screen bg-black"> {/* Set the background to black */}
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0">
        <GridPattern
          width={40}
          height={40}
          className="w-full h-full opacity-20 pointer-events-none"
          strokeDasharray="0"
        />
      </div>

      {/* Fading Effect at the Edges - Creating a border effect */}
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

      {/* Navigation */}
      <Navigation />

      {/* Header Section */}
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-32 lg:pt-40 relative z-10">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Atlikti Projektai
          </h2>
          <p className="mt-4 text-zinc-400">
            Sužinokite daugiau apie mūsų atliktus darbus, kurie atspindi mūsų kompetenciją ir patirtį.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
      </div>

      {/* Projects Section */}
      <div className="px-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl relative z-10">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="relative overflow-hidden rounded-lg bg-[rgba(28, 28, 30, 0.8)] hover:bg-[rgba(44, 44, 46, 0.8)] cursor-pointer transition-transform duration-300"
            onClick={() => setSelectedProject(index)}
          >
            <div className={`relative ${index % 3 === 0 ? 'h-72' : index % 3 === 1 ? 'h-96' : 'h-80'} w-full`}>
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 transform group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center">
              <h2 className="text-xl text-zinc-100">{project.title}</h2>
            </div>
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
          <div
            className="fixed inset-0 bg-black opacity-70"
            aria-hidden="true"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Dialog Content */}
          <div className="bg-black bg-opacity-90 rounded-lg p-8 max-w-5xl w-full relative">
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

      {/* Footer with a gap */}
      <div className="mt-16"> {/* Add a gap before the footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AtliktiDarbai;