"use client";

import React, { useEffect } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card"; // Import the Card component
import GridPattern from '../components/grid-pattern'; // Import GridPattern component
import Footer from '../components/Footer'; // Import the Footer component
import Link from 'next/link';

// Service Data with Images
const services = [
  {
    title: "SVETAINIŲ KŪRIMAS",
    description:
      "Kuriame šiuolaikines ir naudotojui patogias svetaines, naudodami naujausias technologijas, tokias kaip Wordpress, Wix ir Shopify.",
    image: "/paslaugos/WEB_DEVELOPMENT.png", // Image for Web Development
    link: "/paslaugos/svetainiu-kurimas" // Link to Web Development
  },
  {
    title: "BRANDING'AS",
    description:
      "Unikalūs prekės ženklo tapatumo sprendimai, įskaitant logotipus, vizitines korteles ir kūrybinius dizaino paslaugas.",
    image: "/paslaugos/BRANDING.png", // Image for Branding
    link: "/paslaugos/brandingas" // Link to Branding
  },
  {
    title: "REKLAMA IR JOS VALDYMAS",
    description:
      "Valdykite efektyvias kampanijas „Google“ ir „Facebook“ platformose, taikydami tinkamą auditoriją ir analizuodami rezultatus.",
    image: "/paslaugos/ADS_MANAGEMENT.png", // Image for Ads Management
    link: "/paslaugos/reklama" // Link to Ads Management
  },
  {
    title: "SEO OPTIMIZACIJA",
    description:
      "Optimizuokite savo svetainę paieškos sistemoms, kad padidintumėte matomumą ir srautą, naudodami on-page ir off-page SEO.",
    image: "/paslaugos/SEO_OPTIMIZATION.png", // Image for SEO Optimization
    link: "/paslaugos/seo-optimizacija" // Link to SEO Optimization
  },
  {
    title: "INDIVIDUALŪS SPRENDIMAI",
    description:
      "Prieš tai pritaikyti programavimo sprendimai ir API integracijos, atitinkančios jūsų unikalius poreikius, su ekspertų konsultacijomis ir parama.",
    image: "/paslaugos/Custom_Solutions.png", // Image for Custom Solutions
    link: "/paslaugos/individualus-sprendimai" // Link to Custom Solutions
  },
  {
    title: "IT KONSULTAVIMAS",
    description:
      "Konsultacijos IT strategijomis, sistemų analize ir rekomendacijomis, skirtomis optimizuoti technologijų naudojimą jūsų verslui.",
    image: "/paslaugos/IT_Consulting.png", // Image for IT Consulting
    link: "/paslaugos/it-konsultacijos" // Link to IT Consulting
  },
];

// Technology Stack Data
const technologies = [
  {
    name: "React",
    logo: "/logos/react.svg",
    color: "#61DAFB",
    category: "JavaScript Library",
  },
  {
    name: "Vue.js",
    logo: "/logos/vue.svg",
    color: "#42b883",
    category: "JavaScript Framework",
  },
  {
    name: "HTML",
    logo: "/logos/html.svg",
    color: "#E34F26",
    category: "Markup Language",
  },
  {
    name: "CSS",
    logo: "/logos/css.svg",
    color: "#1572B6",
    category: "Style Sheet Language",
  },
  {
    name: "JavaScript",
    logo: "/logos/js.svg",
    color: "#F7DF1E",
    category: "Programming Language",
  },
  {
    name: "Next.js",
    logo: "/logos/nextjs.svg",
    color: "#000000",
    category: "React Framework",
  },
  {
    name: "WordPress",
    logo: "/logos/wordpress.svg",
    color: "#21759B",
    category: "Content Management System",
  },
  {
    name: "Magento",
    logo: "/logos/magento.svg",
    color: "#F46F25",
    category: "E-commerce Platform",
  },
  {
    name: "PrestaShop",
    logo: "/logos/prestashop.svg",
    color: "#DF0067",
    category: "E-commerce Platform",
  },
  {
    name: "Shopify",
    logo: "/logos/shopify.svg",
    color: "#96bf48",
    category: "E-commerce Platform",
  },
  {
    name: "Wix",
    logo: "/logos/wix.svg",
    color: "#FAAD00",
    category: "Website Builder",
  },
  {
    name: "PHP",
    logo: "/logos/php.svg",
    color: "#777BB4",
    category: "Server-side Language",
  },
  {
    name: "Bei kitos kalbos ir technologijos",
    logo: "/logos/python.svg",
    color: "#3776AB",
    category: "Pasigedote kažko? Susisiekite",
  },
];

const Paslaugos = () => {
  useEffect(() => {
    // Set the document title
    document.title = "Paslaugos | Brandforge.lt";
  }, []);

  return (
    <div className="relative min-h-screen bg-black"> {/* Set the background to black */}
      
      {/* Grid Pattern Overlay */}
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
              className="relative p-6 bg-transparent hover:bg-zinc-800/10 h-[396px]" // Set relative position on Card
            >
              {/* Service Image - Positioned Top Left */}
              <div className="absolute top-6 left-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-16 w-16"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-zinc-100 mb-4 mt-20">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-zinc-400 mb-6">{service.description}</p>

              {/* Learn More Button - Positioned Bottom Left */}
              <Link href={service.link}> {/* Use Link for navigation */}
                <a className="absolute bottom-6 left-6 border-2 border-zinc-800 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 bg-transparent border-gray-600 hover:bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] hover:text-white">
                  Sužinokite daugiau
                </a>
              </Link>
            </Card>
          ))}
          <div className="mb-40"></div> {/* This div adds space below the last section */}
        </div>



        {/* Technology Stack */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Naudojamos Technologijos
          </h2>
          <p className="mt-4 text-zinc-400">
          Mes dirbame su įvairiomis pažangiomis technologijomis, kurios
          užtikrina mūsų projektų kokybę ir efektyvumą.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700"
                style={{ backgroundColor: "transparent" }}
              >
                <img src={tech.logo} alt={tech.name} className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-zinc-100">
                  {tech.name}
                </h4>
                <p className="text-zinc-400">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="w-full h-px bg-zinc-800 mb-12" style={{ marginBottom: '120px' }} /> {/* Using both Tailwind and inline styles */}

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Susisiekite su Mumis
          </h2>
          <p className="mt-4 text-zinc-400">
            Norite sužinoti daugiau apie mūsų paslaugas? Susisiekite su mumis
            šiandien ir aptarkime, kaip galime jums padėti.
          </p>
          <div className="mt-6">
            <a
              href="/kontaktai"
              className="w-full py-2 px-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-semibold rounded-md hover:from-orange-500 hover:to-orange-700 active:from-orange-600 active:to-orange-800 focus:outline-none focus:ring focus:ring-orange-400 transition duration-200"
            >
              Susisiekite
            </a>
          </div>
        </div>

      </div>
      <div className="mb-40"></div> {/* This div adds space below the last section */}

      <Footer /> {/* Footer component */}
    </div>
  );
};

export default Paslaugos;