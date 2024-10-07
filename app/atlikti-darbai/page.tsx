"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import GridPattern from "../components/grid-pattern";
import Footer from "../components/Footer";

const AtliktiDarbai: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [filter, setFilter] = useState("Visi");
  const [isAnimating, setIsAnimating] = useState(false);

  const allFilters = ["Visi", "Puslapiu kurimas", "Branding'as", "E-shop'ai", "Marketing'as", "SEO"];

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
      setFilteredProjects(data);
    };

    fetchProjects();
  }, []);

  const handleFilterChange = (category: string) => {
    // Start animation
    setIsAnimating(true);
    
    setTimeout(() => {
      setFilter(category);
      if (category === "Visi") {
        setFilteredProjects(projects);
      } else {
        const newFilteredProjects = projects.filter((project) => project.category === category);
        setFilteredProjects(newFilteredProjects);
      }
      // Stop animation after update
      setIsAnimating(false);
    }, 500); // Match this duration with CSS animation duration
  };

  const renderFilters = (filters: string[]) => {
    return filters.map((category) => (
      <button
        key={category}
        className={`filter-button is-font-correction px-4 py-1 rounded-full transition-colors duration-300 flex items-center justify-center text-sm md:text-base lg:text-lg ${
          filter === category
            ? "bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] text-white"
            : "text-white bg-zinc-800"
        }`}
        onClick={() => handleFilterChange(category)}
        style={{ whiteSpace: "nowrap", opacity: filter === category ? 1 : 0.5 }}
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

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1/6 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/6 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent" />
      </div>

      <Navigation />

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
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2 p-1 border border-[#4a4a4a] rounded-full bg-black overflow-x-auto">
            {renderFilters(allFilters)}
          </div>
        </div>
      </div>

      {/* Project grid with fade-in and fade-out animation */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-16 max-w-[85vw] relative z-10">
        {filteredProjects.length === 0 && isAnimating ? (
          <div className="animate-fadeOut">
            <p className="text-zinc-400">Nėra projektų, atitinkančių šį filtrą.</p>
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <div
              key={index}
              className={isAnimating ? "animate-fadeOut" : "animate-fadeIn"}
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'scale(0.95)' : 'scale(1)',
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
              }}
            >
              <Card
                className="relative overflow-hidden rounded-lg bg-[rgba(28, 28, 30, 0.8)] hover:bg-[rgba(44, 44, 46, 0.8)] cursor-pointer transition-transform duration-300 transform hover:scale-105"
              >
                <div className="relative h-[550px] w-full">
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
            </div>
          ))
        )}
      </div>

      <div className="mb-40"></div> {/* This div adds space below the last section */}

      <Footer />
    </div>
  );
};

export default AtliktiDarbai;