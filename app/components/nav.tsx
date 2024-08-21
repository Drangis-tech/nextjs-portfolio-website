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
          <div className="md:hidden flex items-center text-zinc-300">
            <FontAwesomeIcon 
              icon={isOpen ? faTimes : faBars} 
              onClick={toggleMenu} 
              size="2x" // Larger size for mobile
              className="ml-auto cursor-pointer" // Aligns the icon to the right
            />
          </div>
        </div>

        {/* Fullscreen Mobile Menu with animation */}
        <div
          className={`fixed inset-0 z-40 bg-zinc-900 text-zinc-100 transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-500 ease-in-out`}
        >
          <div className="flex flex-col justify-center items-center h-full space-y-8">
            <Link
              href="/"
              className="text-2xl font-semibold hover:text-white"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              <Image
                src="/logo.png"
                alt="WebForge Logo"
                width={60} // Larger logo for emphasis
                height={60}
                className="block mb-4"
              />
              WebForge
            </Link>
            <Link
              href="/projects"
              className="text-xl hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Atlikti Darbai
            </Link>
            <Link
              href="/paslaugos"
              className="text-xl hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Paslaugos
            </Link>
            <Link
              href="/apie-mus"
              className="text-xl hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Apie Mus
            </Link>
            <Link
              href="/kainos"
              className="text-xl hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Kainos
            </Link>
            <Link
              href="/contact"
              className="text-xl hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Kontaktai
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};