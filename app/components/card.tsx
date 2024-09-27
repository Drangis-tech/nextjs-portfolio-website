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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);  // Ref for the particle canvas

  // Function to handle the particle effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Initialize your particle effect on the canvas
        // This is where you'd add your `canvasAnimation.js` logic 
        // You can reuse your particle animation setup here
      }
    }
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const maskStyle = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove || handleMouseMove}  // Use passed onMouseMove or fallback to local one
      onClick={onClick}
      className={`relative overflow-hidden border border-gray-600 rounded-xl ${className}`} // Changed border color to border-gray-600
      style={{
        ...style,
        backdropFilter: 'blur(0.5px)', // Add blur effect
        backgroundColor: 'rgba(0, 0, 0, 0.1)' // Adjust color and opacity to suit your design
      }}
    >
      {/* Canvas for the particle effect */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-20 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
          style={maskStyle}
        />
        <motion.div
          className="absolute inset-0 z-20 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={maskStyle}
        />
      </div>

      {/* Title and Description */}
      <div className="relative z-30 p-4">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {description && <p className="text-sm text-gray-500 mt-2">{description}</p>}
      </div>

      {children}
    </div>
  );
};