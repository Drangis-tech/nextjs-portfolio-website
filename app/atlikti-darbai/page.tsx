"use client";

import React, { useState, useEffect } from "react"; // Import useEffect for data fetching
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import GridPattern from "../components/grid-pattern"; // Import GridPattern component
import Footer from "../components/Footer"; // Import Footer component

const AtliktiDarbai: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [filter, setFilter] = useState("Visi");

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
      setFilteredProjects(data); // Initialize with all projects
    };

    fetchProjects();
  }, []);

  const handleFilterChange = (category: string) => {
    setFilter(category);
    if (category === "Visi") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.category === category));
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0">
        <GridPattern
          width={40}
          height={40}
          className="w-full h-full opacity-15 pointer-events-none"
          strokeDasharray="0"
        />
      </div>

      <Navigation />

      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-32 lg:pt-40 relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Atlikti Projektai</h2>
        <p className="mt-4 text-zinc-400">
          Sužinokite daugiau apie mūsų atliktus darbus, kurie atspindi mūsų kompetenciją ir patirtį.
        </p>
        <div className="flex justify-center mt-6">
          <div className="flex space-x-4 border border-zinc-600 rounded-lg p-2">
            {["Visi", "Puslapiu kurimas", "Branding'as", "E-shop'ai"].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg ${filter === category ? "bg-blue-500 text-white" : "bg-zinc-600 text-white"}`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-16 max-w-[85vw] relative z-10"> 
  {filteredProjects.map((project, index) => (
    <Card
      key={index}
      className="relative overflow-hidden rounded-lg bg-[rgba(28, 28, 30, 0.8)] hover:bg-[rgba(44, 44, 46, 0.8)] cursor-pointer transition-transform duration-300 transform hover:scale-105" // Scaling effect on hover
      onClick={() => setSelectedProject(index)}
    >
      <div className="relative h-[550px] w-full"> {/* Increased card height */}
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 transform group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-6 text-center">
        <h2 className="text-2xl text-zinc-100">{project.title}</h2>
        <p className="text-sm text-zinc-400">{project.category}</p>
        <div className="flex justify-center mt-2 space-x-2">
          {project.tags && project.tags.length > 0 ? (
            project.tags.map((tag: string, tagIndex: number) => (
              <span key={tagIndex} className="bg-zinc-600 text-white px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))
          ) : (
            <span className="text-sm text-zinc-400">No tags available</span>
          )}
        </div>
      </div>
    </Card>
  ))}
</div>

      {selectedProject !== null && (
        <Dialog
          open={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div className="fixed inset-0 bg-black opacity-70" aria-hidden="true" onClick={() => setSelectedProject(null)}></div>
          <div className="bg-black bg-opacity-90 rounded-lg p-8 max-w-5xl w-full relative">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <div className="relative w-full h-96 mb-6">
              <Image
                src={filteredProjects[selectedProject].image}
                alt={filteredProjects[selectedProject].title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-3xl text-white mt-4">{filteredProjects[selectedProject].title}</h2>
            <p className="text-gray-300 mt-4 text-lg">{filteredProjects[selectedProject].description}</p>
            <p className="text-gray-400 mt-2 text-sm">{`Technologies: ${filteredProjects[selectedProject].technologies}`}</p>
          </div>
        </Dialog>
      )}
      <div className="mb-40"></div> {/* This div adds space below the last section */}

      <Footer />
    </div>
  );
};

export default AtliktiDarbai;