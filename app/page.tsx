"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { Navigation } from './components/nav';
import { motion, useMotionTemplate, useSpring } from "framer-motion";

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

  const Card: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
    <div
      onMouseMove={onMouseMove}
      className="overflow-hidden relative duration-700 border hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 rounded-xl"
      style={{ height: "200px" }} // Adjusted height for the cards on larger screens
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
      <div className="relative p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black">
        <canvas id="bgCanvas" className="absolute top-0 left-0" />
        <canvas id="terCanvas" className="absolute top-0 left-0" />

        <header className="w-full z-10">
          <Navigation />
        </header>

        <div className="flex flex-col items-center justify-center z-10 mt-8 md:mt-16 text-center text-white px-4 md:px-0 flex-1">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-2 md:mb-4 leading-tight">
            Build, host, and scale your collaborative product
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

        <div className="w-full flex flex-col md:flex-row justify-center px-4 md:px-0 gap-4 md:gap-4 mt-4 md:mt-8">
          <Card title="Collaboration infrastructure" description="WebSocket edge infrastructure and reliable connection engine." />
          <Card title="Zero configuration" description="Scale to millions. No complex configuration required." />
          <Card title="Effortless scaling" description="Built to handle any traffic on your collaborative experiences." />
          <Card title="No maintenance required" description="Spend your time building, not maintaining infrastructure." />
        </div>
      </div>
    </>
  );
}