"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500 border-zinc-800"
        }`}
      >
        <div className="container flex items-center justify-between p-6 mx-auto">
          {/* Back button positioned in the left corner */}
          <Link
            href="/"
            className="flex items-center text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-8 h-8 md:w-6 md:h-6" /> {/* Larger size for mobile */}
          </Link>

          {/* Hamburger Icon for Mobile aligned to the right */}
          <div className="md:hidden flex items-center">
            <FontAwesomeIcon 
              icon={isOpen ? faTimes : faBars} 
              onClick={toggleMenu} 
              size="2x" // Larger size for mobile
              className="text-zinc-300 cursor-pointer ml-auto" // Aligns the icon to the right
            />
          </div>
        </div>

        {/* Fullscreen Mobile Menu with background and animation */}
        <div
          className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ visibility: isOpen ? 'visible' : 'hidden' }}
        >
          {/* Background overlay for readability */}
          <div className={`absolute inset-0 bg-zinc-900 opacity-90`} style={{ zIndex: 1 }}></div>
          {/* Main content area */}
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 space-y-8 z-10">
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 text-zinc-300 hover:text-zinc-100 text-3xl"
              onClick={toggleMenu}
              style={{ zIndex: 2 }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            {/* Logo and menu items */}
            <div className="flex flex-col items-center space-y-8">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center flex-col mb-12"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                <Image
                  src="/logo.png"
                  alt="WebForge Logo"
                  width={120} // Larger logo for emphasis
                  height={120}
                  className="block mb-6"
                />
                <span className="text-3xl font-semibold text-white">WebForge</span>
              </Link>
              {/* Navigation Links */}
              <nav className="flex flex-col items-center space-y-6">
                <Link
                  href="/projects"
                  className="text-2xl text-white hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Atlikti Darbai
                </Link>
                <Link
                  href="/paslaugos"
                  className="text-2xl text-white hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Paslaugos
                </Link>
                <Link
                  href="/apie-mus"
                  className="text-2xl text-white hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Apie Mus
                </Link>
                <Link
                  href="/kainos"
                  className="text-2xl text-white hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Kainos
                </Link>
                <Link
                  href="/contact"
                  className="text-2xl text-white hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  Kontaktai
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};