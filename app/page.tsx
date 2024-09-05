"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import { Navigation } from './components/nav';
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { Card } from './components/card'; // Import the Card component

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/canvasAnimation.js"; 
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    document.title = "Jūsų geriausias IT partneris | Brandforge.lt";
  }, []);

  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const maskStyle = { maskImage, WebkitMaskImage: maskImage };

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center w-screen overflow-hidden bg-black">
        {/* Fixed navigation */}
        <header className="absolute top-0 left-0 w-full z-30">
          <Navigation />
        </header>

        {/* Main content */}
        <div className="relative flex flex-col items-center justify-center text-center text-white px-4 md:px-8 flex-1 z-20 mt-32 md:mt-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Build, host, and scale your<br className="hidden md:block"/> collaborative product
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8">
            The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
          </p>
          <div className="mb-6 md:mb-8">
            <Link href="/sign-up">
              <a className="px-8 py-4 text-black bg-white rounded-lg hover:bg-gray-200 transition inline-flex items-center">
                Sign up for free
                <span className="ml-2">→</span>
              </a>
            </Link>
          </div>
        </div>

        {/* Ensure the cards are at the bottom */}
        <div className="absolute bottom-0 w-full flex flex-col md:flex-row justify-center px-4 md:px-8 gap-4 md:gap-8 mt-8 md:mt-12 mb-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8 md:justify-center">
            <Card title="Collaboration infrastructure" description="WebSocket edge infrastructure and reliable connection engine." />
            <Card title="Zero configuration" description="Scale to millions. No complex configuration required." />
            <Card title="Effortless scaling" description="Built to handle any traffic on your collaborative experiences." />
            <Card title="No maintenance required" description="Spend your time building, not maintaining infrastructure." />
          </div>
        </div>
      </div>
    </>
  );
}