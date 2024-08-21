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
            <ArrowLeft className="w-6 h-6" />
          </Link>

          {/* Flex container to center navigation links for desktop */}
          <div className="hidden md:flex flex-grow items-center justify-center">
            <div className="flex gap-8">
              <Link
                href="/projects"
                className="duration-200 text-zinc-400 hover:text-zinc-100"
              >
                Atlikti Darbai
              </Link>
              <Link
                href="/paslaugos"
                className="duration-200 text-zinc-400 hover:text-zinc-100"
              >
                Paslaugos
              </Link>
              <Link
                href="/apie-mus"
                className="duration-200 text-zinc-400 hover:text-zinc-100"
              >
                Apie Mus
              </Link>
              <Link
                href="/kainos"
                className="duration-200 text-zinc-400 hover:text-zinc-100"
              >
                Kainos
              </Link>
              <Link
                href="/contact"
                className="duration-200 text-zinc-400 hover:text-zinc-100"
              >
                Kontaktai
              </Link>
            </div>
          </div>

          {/* Hamburger Icon for Mobile aligned to the right */}
          <div className="md:hidden flex items-center text-zinc-300">
            <FontAwesomeIcon 
              icon={isOpen ? faTimes : faBars} 
              onClick={toggleMenu} 
              size="lg" 
              className="ml-auto" // Aligns the icon to the right
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-zinc-900 p-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-zinc-300 hover:text-zinc-100"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                <Image
                  src="/logo.png"
                  alt="WebForge Logo"
                  width={40} // Adjust the width as needed
                  height={40}
                  className="block"
                />
              </Link>
              <Link
                href="/projects"
                className="duration-200 text-zinc-400 hover:text-zinc-100"
                onClick={() => setIsOpen(false)}
              >
                Atlikti Darbai
              </Link>
              <Link
                href="/paslaugos"
                className="duration-200 text-zinc-400 hover:text-zinc-100"
                onClick={() => setIsOpen(false)}
              >
                Paslaugos
              </Link>
              <Link
                href="/apie-mus"
                className="duration-200 text-zinc-400 hover:text-zinc-100"
                onClick={() => setIsOpen(false)}
              >
                Apie Mus
              </Link>
              <Link
                href="/kainos"
                className="duration-200 text-zinc-400 hover:text-zinc-100"
                onClick={() => setIsOpen(false)}
              >
                Kainos
              </Link>
              <Link
                href="/contact"
                className="duration-200 text-zinc-400 hover:text-zinc-100"
                onClick={() => setIsOpen(false)}
              >
                Kontaktai
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};