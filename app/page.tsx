"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Navigation } from './components/nav';
import ThreeDObject from './components/ThreeDObject'; // Import the 3D component

const navigation = [
  { name: "Atlikti Darbai", href: "/projects" },
  { name: "Paslaugos", href: "/paslaugos" },
  { name: "Apie Mus", href: "/apie-mus" },
  { name: "Kainos", href: "/kainos" },
  { name: "Kontaktai", href: "/contact" },
];

export default function Home() {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    const preventDefault = (e: Event) => e.preventDefault();
    document.body.addEventListener('touchmove', preventDefault, { passive: false });

    const script = document.createElement("script");
    script.src = "/canvasAnimation.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.classList.remove('no-scroll');
      document.body.removeEventListener('touchmove', preventDefault);
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    document.title = "Jūsų geriausias IT partneris | Brandforge.lt";
  }, []);

  return (
    <>
      <Head>
        <title>BrandForge</title>
        <meta name="description" content="BrandForge homepage" />
      </Head>

      <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black">
        <canvas id="bgCanvas" className="absolute top-0 left-0" />
        <canvas id="terCanvas" className="absolute top-0 left-0" />

        <header className="w-full">
          <Navigation />
        </header>

        <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full px-4 py-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 sm:text-5xl md:text-6xl">
            Launch Week is here
          </h1>
          <h2 className="text-3xl text-white mb-4">
            {/* Use a standard HTML element or a custom component here */}
            <span>Email for developers</span>
          </h2>
          <p className="text-lg text-white mb-8">
            The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
          </p>
          <div className="flex gap-4 mb-8">
            <Link href="/get-started">
              <a className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition">
                Get Started
              </a>
            </Link>
            <Link href="/documentation">
              <a className="px-6 py-3 text-white bg-gray-600 rounded hover:bg-gray-700 transition">
                Documentation
              </a>
            </Link>
          </div>
          <p className="text-sm text-white">
            Backed by Combinator
          </p>
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <ThreeDObject /> {/* Render the 3D object */}
        </div>
      </div>
    </>
  );
}