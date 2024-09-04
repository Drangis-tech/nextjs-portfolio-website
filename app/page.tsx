"use client";

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
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

  const createParticleEffect = (element: HTMLDivElement | null) => {
    if (!element) return;

    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.pointerEvents = 'none';
    canvas.width = element.offsetWidth;
    canvas.height = element.offsetHeight;
    element.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{ x: number, y: number, size: number, alpha: number }> = [];

    function resizeCanvas() {
      canvas.width = element.offsetWidth;
      canvas.height = element.offsetHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function createParticle(x: number, y: number) {
      particles.push({ x, y, size: Math.random() * 5, alpha: 1 });
    }

    function updateParticles() {
      particles.forEach(particle => {
        particle.size *= 0.95;
        particle.alpha *= 0.95;
      });
      particles = particles.filter(particle => particle.alpha > 0.1);
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
        ctx.fill();
      });
    }

    function animate() {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    }

    animate();

    element.addEventListener('mousemove', function (event) {
      createParticle(event.clientX - element.getBoundingClientRect().left, event.clientY - element.getBoundingClientRect().top);
    });
  };

  const Card: React.FC<{ title: string; description: string; }> = ({ title, description }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      createParticleEffect(cardRef.current);
    }, []);

    return (
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        className="relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 overflow-hidden"
        style={{ height: '250px', width: '300px' }} // Ensure all cards have the same size
      >
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute inset-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
          <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
            style={maskStyle}
          />
          <motion.div
            className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
            style={maskStyle}
          />
        </div>
        <div className="relative z-20 p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center w-screen overflow-hidden bg-black">
        <header className="absolute top-0 left-0 w-full z-30">
          <Navigation />
        </header>

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

        <div className="w-full flex flex-col md:flex-row justify-center px-4 md:px-8 gap-4 md:gap-8 mt-8 md:mt-12 mb-8">
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