"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import { Navigation } from './components/nav';
import { motion, useMotionTemplate, useSpring } from "framer-motion";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/canvasAnimation.js"; // Assuming this script is set up for the particle effect
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

  const Card: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
    <div
      onMouseMove={onMouseMove}
      className="relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 overflow-hidden"
      style={{ height: '250px', width: '250px' }} // Ensure all cards have the same size
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
          style={maskStyle}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={maskStyle}
        />
      </div>
      <div className="relative z-30 p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black">
        <header className="absolute top-0 left-0 w-full z-20">
          <Navigation />
        </header>

        <div className="relative flex flex-col items-center justify-center text-center text-white px-4 md:px-8 flex-1 z-10 mt-24 md:mt-32">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Build, host, and scale your<br className="hidden md:block"/> collaborative product
          </h2>
          <p className="text-lg text-gray-400 mb-6 md:mb-8">
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

        <div className="w-full flex flex-col md:flex-row justify-center px-4 md:px-8 gap-4 md:gap-8 mt-8 md:mt-12 mb-8">
          <Card title="Collaboration infrastructure" description="WebSocket edge infrastructure and reliable connection engine." />
          <Card title="Zero configuration" description="Scale to millions. No complex configuration required." />
          <Card title="Effortless scaling" description="Built to handle any traffic on your collaborative experiences." />
          <Card title="No maintenance required" description="Spend your time building, not maintaining infrastructure." />
        </div>
      </div>
    </>
  );
}