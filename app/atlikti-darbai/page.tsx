import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "../components/card";

// Sample projects array
const projects = [
  {
    title: "Projektas 1",
    image: "/images/project1.jpg",
    description: "Tai yra pirmo projekto aprašymas.",
    technologies: "React, Tailwind CSS",
  },
  // Add other projects here
];

const InteractiveGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="relative pb-16 bg-gray-900">
      {/* Header Section */}
      <div className="px-6 pt-28 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-36 lg:pt-48">
        <h2 className="text-4xl font-bold tracking-tight text-white">Atlikti Projektai</h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg md:text-xl">
          Sužinokite daugiau apie mūsų atliktus darbus.
        </p>
      </div>

      {/* Interactive Gallery */}
      <div className="relative container mx-auto p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg bg-gray-800 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedProject(index)}
          >
            <div className="relative w-full h-60">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-center">
                <h2 className="text-xl text-white font-bold">{project.title}</h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject !== null && (
        <Dialog
          open={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Dialog Content */}
          <div className="relative bg-gray-900 rounded-lg p-8 max-w-5xl w-full">
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

export default InteractiveGallery;