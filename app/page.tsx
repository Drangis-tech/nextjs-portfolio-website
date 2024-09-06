"use client";
import React, { useEffect, useRef, PropsWithChildren } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

interface CardProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  title?: string;
  description?: string;
  onMouseMove?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, className, onClick, style, title, description, onMouseMove 
}) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Initialize your particle effect here
        // Example code for particles - adjust as needed
        const particles = [];
        const particleCount = 100;

        class Particle {
          constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
          }

          update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.size *= 0.95; // Shrink particle over time
          }

          draw() {
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
        }

        function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          particles.forEach(particle => {
            particle.update();
            particle.draw();
          });
          requestAnimationFrame(animate);
        }

        animate();
      }
    }
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(80px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const maskStyle = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove || handleMouseMove} 
      onClick={onClick}
      className={`overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ${className}`}
      style={style}
    >
      {/* Canvas for the particle effect */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
          style={maskStyle}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={maskStyle}
        />
      </div>

      {/* Title and Description */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
        {title && <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>}
        {description && <p className="text-sm text-gray-500 mt-2">{description}</p>}
      </div>

      {children}
    </div>
  );
};