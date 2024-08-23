// /app/atlikti-darbai/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

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
  // Add more projects as needed
];

const AtliktiDarbai: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl text-center text-white mb-12">Atlikti Darbai</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-opacity-20 bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedProject(index)}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-xl text-white mt-4">{project.title}</h2>
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