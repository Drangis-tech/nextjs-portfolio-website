"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { Navigation } from './components/nav';

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
            Transform your collaboration with the industry’s most complete real-time infrastructure
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
            Leverage our real-time infrastructure to build interactive applications with ease.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Seamlessly integrate, scale, and deploy with our powerful tools and comprehensive solutions.
          </p>
          <div className="flex gap-4 mb-8">
            <Link href="/get-started">
              <a className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </a>
            </Link>
            <Link href="/documentation">
              <a className="px-6 py-3 text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition">
                Documentation
              </a>
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            Backed by <span className="font-semibold">Combinator</span>
          </p>
        </div>
      </div>
    </>
  );
}