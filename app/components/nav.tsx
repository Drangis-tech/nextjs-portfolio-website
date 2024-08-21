"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation'; // Import the usePathname hook from Next.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Close menu when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && overlayRef.current && !overlayRef.current.contains(event.target as Node) && !ref.current?.contains(event.target as Node)) {
        setIsOpen(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'; // Prevent scrolling when menu is open
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
        <div className="container flex items-center p-6 mx-auto">
          {/* Conditionally render the back button */}
          {pathname !== '/' && (
            <Link
              href="/"
              className={`flex items-center text-zinc-300 hover:text-zinc-100 mr-4 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            >
              <ArrowLeft className="w-8 h-8 md:w-10 md:h-10" />
            </Link>
          )}

          {/* Flex container to center navigation links */}
          <div className="flex-grow flex items-center justify-center">
            <div className="hidden md:flex gap-8">
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

          {/* Hamburger Menu Button */}
          <button
            className={`flex items-center text-zinc-300 hover:text-zinc-100 md:hidden transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>
      </div>

      {/* Overlay to detect clicks outside the menu */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-auto'}`}
        onClick={() => isOpen && setIsOpen(false)} // Close menu on click
      ></div>

      {/* Sidebar Menu */}
      <div className={`fixed inset-y-0 right-0 w-3/4 bg-black bg-opacity-80 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <div className="relative w-full h-full flex flex-col items-center justify-center space-y-8">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-zinc-300 hover:text-zinc-100"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faTimes} className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Menu Links */}
          <nav className="flex flex-col items-center space-y-6">
            <Link href="/paslaugos" className="text-white text-3xl" onClick={toggleMenu}>
              Paslaugos
            </Link>
            <Link href="/apie-mus" className="text-white text-3xl" onClick={toggleMenu}>
              Apie Mus
            </Link>
            <Link href="/kainos" className="text-white text-3xl" onClick={toggleMenu}>
              Kainos
            </Link>
            <Link href="/kontaktai" className="text-white text-3xl" onClick={toggleMenu}>
              Kontaktai
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};