"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Navigation } from './components/nav';
import { motion, useMotionTemplate, useSpring, useTransform } from "framer-motion";
import { Card } from './components/card'; 

export default function Home() {
  const [maskStyle, setMaskStyle] = useState<{ maskImage: string; WebkitMaskImage: string }>({ maskImage: '', WebkitMaskImage: '' });

  useEffect(() => {
    // Load the particle animation script for the background
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

  // Use framer motion springs for smooth cursor tracking
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    const updateMaskStyle = () => {
      const x = mouseX.get();
      const y = mouseY.get();
      const mask = `radial-gradient(80px at ${x}px ${y}px, white, transparent)`;
      setMaskStyle({ maskImage: mask, WebkitMaskImage: mask });
    };

    // Update maskStyle on mouse position change
    mouseX.onChange(updateMaskStyle);
    mouseY.onChange(updateMaskStyle);
    
    // Initialize mask style
    updateMaskStyle();

    return () => {
      mouseX.destroy();
      mouseY.destroy();
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Background Particle Effect */}
      <div className="relative min-h-screen flex flex-col items-center justify-center w-screen overflow-hidden bg-black">
        {/* Canvas for particle effect */}
        <canvas id="bgCanvas" className="absolute inset-0 w-full h-full pointer-events-none z-0"></canvas>

        {/* Navigation Bar */}
        <header className="absolute top-0 left-0 w-full z-30">
          <Navigation />
        </header>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-center text-white px-4 md:px-8 flex-1 z-20 mt-32 md:mt-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Idėja, Strategija, Kodas = Jūsų verslo augimas
            
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8">
          Paverčiame jūsų verslo idėjas veiksmais, kurdami svetaines ir stiprius prekės ženklus internete.          </p>
          <div className="mb-6 md:mb-8">
            <Link href="/sign-up">
              <a className="px-8 py-4 text-black bg-white rounded-lg hover:bg-gray-200 transition inline-flex items-center">
                Skaityti daugiau
                <span className="ml-2">→</span>
              </a>
            </Link>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full flex flex-col md:flex-row justify-center px-4 md:px-8 gap-4 md:gap-8 mt-8 md:mt-12 mb-8 z-20">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8 md:justify-center">
            <Card 
              title="Collaboration infrastructure" 
              description="WebSocket edge infrastructure and reliable connection engine." 
              className="h-[250px] w-[300px]" 
              onMouseMove={onMouseMove} 
              style={maskStyle}  // Apply the white dot effect to the card
            />
            <Card 
              title="Zero configuration" 
              description="Scale to millions. No complex configuration required."
              className="h-[250px] w-[300px]" 
              onMouseMove={onMouseMove} 
              style={maskStyle}  // Apply the white dot effect to the card
            />
            <Card 
              title="Effortless scaling" 
              description="Built to handle any traffic on your collaborative experiences." 
              className="h-[250px] w-[300px]" 
              onMouseMove={onMouseMove} 
              style={maskStyle}  // Apply the white dot effect to the card
            />
            <Card 
              title="No maintenance required" 
              description="Spend your time building, not maintaining infrastructure." 
              className="h-[250px] w-[300px]" 
              onMouseMove={onMouseMove} 
              style={maskStyle}  // Apply the white dot effect to the card
            />
          </div>
        </div>
      </div>
    </>
  );
}