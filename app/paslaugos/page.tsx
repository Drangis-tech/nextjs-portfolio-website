"use client";

import React, { useEffect } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card"; // Import the Card component

// Import Heroicons
import {
  CodeBracketSquareIcon,
  PencilSquareIcon,
  SpeakerWaveIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

// Service Data with Heroicons
const services = [
  {
    title: "WEB DEVELOPMENT",
    description:
      "We create modern and user-friendly websites using the latest technologies like React, Vue.js, and WordPress.",
    icon: <CodeBracketSquareIcon className="h-16 w-16 text-[#f16529]" />, // Solid color
  },
  {
    title: "BRANDING",
    description:
      "Unique brand identity solutions, including logos, business cards, and creative design services.",
    icon: <PencilSquareIcon className="h-16 w-16 text-[#f16529]" />, // Solid color
  },
  {
    title: "ADS MANAGEMENT",
    description:
      "Manage effective campaigns on Google and Facebook platforms, targeting the right audience and analyzing results.",
    icon: <SpeakerWaveIcon className="h-16 w-16 text-[#f16529]" />, // Solid color
  },
  {
    title: "SEO OPTIMIZATION",
    description:
      "Optimize your website for search engines to increase visibility and traffic with on-page and off-page SEO.",
    icon: <ChartBarIcon className="h-16 w-16 text-[#f16529]" />, // Solid color
  },
  {
    title: "CUSTOM SOLUTIONS",
    description:
      "Tailored programming solutions and API integrations to meet your unique needs, with expert consultation and support.",
    icon: <ComputerDesktopIcon className="h-16 w-16 text-[#f16529]" />, // Solid color
  },
  {
    title: "IT CONSULTING",
    description:
      "Consultation on IT strategies, system analysis, and recommendations to optimize technology usage for your business.",
    icon: <UsersIcon className="h-16 w-16 text-[#f16529]" />, // Solid color
  },
];

const Paslaugos = () => {
  useEffect(() => {
    // Set the document title
    document.title = "Paslaugos | Brandforge.lt";
  }, []);

  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-32 lg:pt-40">
        {/* Hero Section */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Mūsų Paslaugos
          </h2>
          <p className="mt-4 text-zinc-400">
            Atraskite mūsų įvairias paslaugas, kurios padės jūsų verslui augti ir
            pasiekti naujas aukštumas.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 bg-transparent hover:bg-zinc-800/10 h-[396px]" // Increased height by 10%
            >
              {/* Service Icon - Positioned Top Left */}
              <div className="absolute top-6 left-6">
                {service.icon} {/* Render the icon from the services array */}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-zinc-100 mb-4 mt-20">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-zinc-400 mb-6">{service.description}</p>

              {/* Learn More Button - Styled like on home page */}
              <a
                href="#"
                className="inline-block border-2 border-zinc-800 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 bg-transparent border-gray-600 hover:bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] hover:text-white"
                style={{ marginTop: 'auto' }} // Ensure the button is positioned correctly
              >
                Learn More
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paslaugos;