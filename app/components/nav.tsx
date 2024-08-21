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
            <ArrowLeft className="w-8 h-8 md:w-10 md:h-10" />
          </Link>

          {/* Logo (optional) */}
          {/* <Image src="/logo.png" alt="Logo" width={150} height={50} /> */}

          {/* Hamburger Menu Button */}
          <button
            className="flex items-center text-zinc-300 hover:text-zinc-100 md:hidden"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>
      </div>

      {/* Fullscreen Menu */}
      <div className={`fullscreen-menu ${isOpen ? 'visible' : 'hidden'}`}>
        <div className="fullscreen-menu-content">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-zinc-300 hover:text-zinc-100"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faTimes} className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Menu Links */}
          <nav className="flex flex-col items-center space-y-6">
            <Link href="/paslaugos" className="text-white text-2xl" onClick={toggleMenu}>
              Paslaugos
            </Link>
            <Link href="/apie-mus" className="text-white text-2xl" onClick={toggleMenu}>
              Apie Mus
            </Link>
            <Link href="/kainos" className="text-white text-2xl" onClick={toggleMenu}>
              Kainos
            </Link>
            <Link href="/kontaktai" className="text-white text-2xl" onClick={toggleMenu}>
              Kontaktai
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};