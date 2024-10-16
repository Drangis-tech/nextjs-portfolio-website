"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState, memo } from "react"; // Import memo
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'; // Import Image for logo
import LanguageSelector from './LanguageSelector';

// Memoized Logo Component
const Logo = memo(() => (
  <Link
    href="/"
    className={`flex items-center text-zinc-300 hover:text-zinc-100 transition-opacity duration-300 ease-in-out`}
  >
    <Image 
      src="/logo.png" 
      alt="Brand Logo" 
      width={48} 
      height={48} 
      className="w-10 h-10 md:w-12 md:h-12 object-contain" 
    />
  </Link>
));

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node) &&
        !ref.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
        document.body.style.overflow = 'auto'; // Reset overflow to allow scrolling
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto'; // Ensure overflow is reset when menu is closed
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(prevState => {
      const newState = !prevState;
      document.body.style.overflow = newState ? 'hidden' : 'auto'; // Toggle overflow
      return newState;
    });
  };

  return (
    <header ref={ref} className="relative">
      {/* Main Header */}
      <div
        className={`fixed inset-x-0 top-0 z-50 duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500 border-zinc-800"
        } backdrop-blur-sm`} // Adjusted to keep the blur effect
      >
        <div className="container mx-auto flex items-center justify-between p-6">
          {/* Logo */}
          <Logo /> {/* Use memoized Logo component */}

          {/* Navigation Links (center-aligned) */}
          <div className="flex-grow flex items-center justify-center">
            <div className="hidden md:flex gap-8 items-center">
              <Link href="/atlikti-darbai" className="nav-link">Atlikti Darbai</Link>
              <Link href="/paslaugos" className="nav-link">Paslaugos</Link>
              <Link href="/apie-mus" className="nav-link">Apie Mus</Link>
              <Link href="/kainos" className="nav-link">Kainos</Link>
              <Link href="/kontaktai" className="nav-link">Kontaktai</Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`flex items-center text-zinc-300 hover:text-zinc-100 md:hidden transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>
      </div>

      {/* Backdrop Blur Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} z-40`}  
        onClick={() => isOpen && setIsOpen(false)}
      >
        {/* Blur the navigation bar without affecting the logo */}
        <div className={`absolute inset-x-0 top-0 z-50 backdrop-blur-lg pointer-events-none`} /> {/* Increased blur level */}
      </div>

      {/* Side Menu */}
      <div className={`fixed inset-y-0 right-0 w-3/4 bg-black bg-opacity-80 backdrop-blur-md transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50 menu-content`}> {/* Adjusted blur for side menu */}
        <div className="relative w-full h-full flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            {/* Language Selector */}
            <LanguageSelector
              language="LT" // Set the default language
              onLanguageChange={(value) => console.log(`Language changed to ${value}`)}
            />
            <button
              className="text-zinc-300 hover:text-zinc-100 w-10 h-10 flex items-center justify-center"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faTimes} className="w-8 h-8" />
            </button>
          </div>

          <nav className="flex flex-col items-start space-y-6 p-6 flex-grow">
            <Link href="/atlikti-darbai" className="nav-link text-xl md:text-lg lg:text-xl" onClick={toggleMenu}>Atlikti Darbai</Link>
            <Link href="/paslaugos" className="nav-link text-xl md:text-lg lg:text-xl" onClick={toggleMenu}>Paslaugos</Link>
            <Link href="/apie-mus" className="nav-link text-xl md:text-lg lg:text-xl" onClick={toggleMenu}>Apie Mus</Link>
            <Link href="/kainos" className="nav-link text-xl md:text-lg lg:text-xl" onClick={toggleMenu}>Kainos</Link>
            <Link href="/kontaktai" className="nav-link text-xl md:text-lg lg:text-xl" onClick={toggleMenu}>Kontaktai</Link>
          </nav>

          {/* Update the contact information section to reflect the color change */}
          <div className="flex flex-col items-start space-y-4 text-gray-400 text-sm p-6 mt-auto">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              <a href="mailto:info@brandforge.lt" className="text-gray-500">info@brandforge.lt</a>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} className="text-xl" />
              <a href="tel:+37000000000" className="text-gray-500">+370 000 00009</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};