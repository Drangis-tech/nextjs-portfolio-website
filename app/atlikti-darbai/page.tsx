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
  const [showMoreFilters, setShowMoreFilters] = useState(false); // For showing more filters in mobile view

  const allFilters = ["Visi", "Puslapiu kurimas", "Branding'as", "E-shop'ai", "Marketingas", "SEO", "UX/UI"]; // Add more categories if needed

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

  const handleMoreFilters = () => {
    setShowMoreFilters(!showMoreFilters); // Toggle the visibility of extra filters
  };

  const renderFilters = (filters: string[]) => {
    return filters.map((category) => (
      <button
        key={category}
        className={`filter-button is-font-correction px-4 py-1 rounded-full transition-colors duration-300 flex items-center justify-center text-sm md:text-base lg:text-lg ${
          filter === category
            ? "bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] text-white"
            : "border border-gray-500 text-white bg-zinc-800" // Lower opacity for unselected filters
        }`}
        onClick={() => handleFilterChange(category)}
        style={{ whiteSpace: "nowrap", opacity: filter === category ? 1 : 0.5 }} // Lower opacity for unselected filters
        type="button"
      >
        {category}
      </button>
    ));
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

      <Navigation />

      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-32 lg:pt-40 relative z-10">
        {/* Hero Section */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Atlikti Projektai
          </h2>
          <p className="mt-4 text-zinc-400">
            Sužinokite daugiau apie mūsų atliktus darbus, kurie atspindi mūsų kompetenciją ir patirtį.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2 p-1 border border-[#4a4a4a] rounded-full bg-black overflow-x-auto"> {/* Updated for overflow */}
            {/* On mobile view, show "..." button */}
            <div className="hidden md:flex space-x-2">
              {renderFilters(allFilters)}
            </div>

            <div className="md:hidden flex space-x-2">
              {renderFilters(allFilters.slice(0, 3))} {/* Show only first 3 filters on mobile */}

              {/* Show "..." if more filters exist */}
              <button
                className="filter-button is-font-correction px-4 py-1 rounded-full transition-colors duration-300 flex items-center justify-center text-sm md:text-base lg:text-lg text-white border border-gray-500"
                onClick={handleMoreFilters}
              >
                ...
              </button>
            </div>
          </div>

          {/* Additional filters when "..." is clicked */}
          {showMoreFilters && (
            <div className="md:hidden flex space-x-2 mt-4">
              {renderFilters(allFilters.slice(3))} {/* Show the rest of the filters */}
            </div>
          )}
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
            <div className="flex justify-center mt-6 space-x-2">
              {filteredProjects[selectedProject].tags && filteredProjects[selectedProject].tags.length > 0 ? (
                filteredProjects[selectedProject].tags.map((tag: string, tagIndex: number) => (
                  <span key={tagIndex} className="bg-zinc-600 text-white px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))
              ) : (
                <span className="text-sm text-zinc-400">No tags available</span>
              )}
            </div>
          </div>
        </Dialog>
      )}

      <Footer />
    </div>
  );
};

export default AtliktiDarbai;