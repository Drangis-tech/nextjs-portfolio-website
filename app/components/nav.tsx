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

        {/* Fullscreen Mobile Menu with animation */}
        <div
          className={`fixed inset-0 z-40 bg-zinc-900 text-zinc-100 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out`}
          style={{ visibility: isOpen ? 'visible' : 'hidden' }}
        >
          <div className="flex flex-col items-center justify-center h-full p-6 space-y-8 overflow-hidden">
            <button 
              className="absolute top-6 right-6 text-zinc-300 hover:text-zinc-100 text-3xl"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
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
              <span className="text-3xl font-semibold">WebForge</span>
            </Link>
            <nav className="flex flex-col items-center space-y-6">
              <Link
                href="/projects"
                className="text-2xl hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Atlikti Darbai
              </Link>
              <Link
                href="/paslaugos"
                className="text-2xl hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Paslaugos
              </Link>
              <Link
                href="/apie-mus"
                className="text-2xl hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Apie Mus
              </Link>
              <Link
                href="/kainos"
                className="text-2xl hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Kainos
              </Link>
              <Link
                href="/contact"
                className="text-2xl hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Kontaktai
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};