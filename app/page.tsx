"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Navigation } from './components/nav';
import { Card } from "../components/card";

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
      <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black">
        <canvas id="bgCanvas" className="absolute top-0 left-0" />
        <canvas id="terCanvas" className="absolute top-0 left-0" />

        <header className="w-full">
          <Navigation />
        </header>

        <div className="flex flex-col items-center justify-center z-10 mt-16">
          <div className="flex flex-col items-center mb-4">
            <Image
              src="/logo.png"
              alt="BrandForge Logo"
              width={50}  // Adjust the size to be smaller
              height={50}
              className="mb-2 animate-fade-in"
            />
            <h1
              className="text-sm text-transparent bg-white bg-clip-text cursor-default animate-title font-display whitespace-nowrap"
              style={{ lineHeight: "1.2em", paddingBottom: "0.2em" }}
            >
              BrandForge
            </h1>
          </div>

          <div className="text-center text-white mb-8">
            <h2 className="text-5xl font-bold">
              Build, host, and scale your collaborative product
            </h2>
          </div>

          <div className="mb-8">
            <Link href="/sign-up">
              <a className="px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition inline-flex items-center">
                Sign up for free
                <span className="ml-2">→</span>
              </a>
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-center">
          {/* Replace this with your actual Card components */}
          <div className="flex gap-4">
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