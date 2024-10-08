"use client";
import React, { useEffect, useRef, PropsWithChildren, useState } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

interface CardProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  title?: string;
  description?: string;
  onMouseMove?: (event: React.MouseEvent<HTMLDivElement>) => void;
  disableParticles?: boolean; // New prop to disable particles
}

export const Card: React.FC<CardProps> = ({
  children, className, onClick, style, title, description, onMouseMove, disableParticles = false // Default to false
}) => {
  const [isVisible, setIsVisible] = useState(false); // State to control particle visibility
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particle = useRef<{ x: number; y: number; radius: number }>({ x: 0, y: 0, radius: 0 });
  const followingEffect = useRef<{ targetX: number; targetY: number }>({ targetX: 0, targetY: 0 });

  // Function to get a random position within the card
  const getRandomPosition = (width: number, height: number) => {
    const x = Math.random() * width;
    const y = Math.random() * height;
    return { x, y };
  };

  // Function to handle the particle effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const resizeCanvas = () => {
          ctx.canvas.width = canvas.clientWidth;
          ctx.canvas.height = canvas.clientHeight;

          // Set initial particle radius based on card size (30-40%)
          const radius = Math.min(canvas.clientWidth, canvas.clientHeight) * 0.7; // Adjust size
          particle.current.radius = radius;

          // Set initial particle position to a random location
          const { x, y } = getRandomPosition(canvas.clientWidth, canvas.clientHeight);
          particle.current.x = x;
          particle.current.y = y;
        };

        // Animation loop
        const animate = () => {
          // Smoothly move the particle towards the target position
          const dx = followingEffect.current.targetX - particle.current.x;
          const dy = followingEffect.current.targetY - particle.current.y;
          particle.current.x += dx * 0.05;
          particle.current.y += dy * 0.05;

          ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
          ctx.save();
          ctx.globalAlpha = isVisible && !disableParticles ? 0.1 : 0; // Control opacity based on visibility state and disableParticles prop

          // Draw a circular gradient for the particle effect if enabled
          if (!disableParticles) {
            const gradient = ctx.createRadialGradient(particle.current.x, particle.current.y, 0, particle.current.x, particle.current.y, particle.current.radius);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)'); // Inner color
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Outer color

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas with the gradient
          }

          ctx.restore();
          requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas(); // Call it initially to set the size correctly
        animate(); // Start the animation

        return () => {
          window.removeEventListener('resize', resizeCanvas);
        };
      }
    }
  }, [isVisible, disableParticles]); // Add disableParticles as a dependency

  const updateParticlePosition = (x: number, y: number) => {
    followingEffect.current.targetX = x;
    followingEffect.current.targetY = y;
  };

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    // Update mouse position
    mouseX.set(x);
    mouseY.set(y);
    updateParticlePosition(x, y);

    // Set particle visibility to true when mouse is moving over the card
    setIsVisible(true);
  }

  function handleTouchMove({ currentTarget, touches }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = touches[0].clientX - left;
    const y = touches[0].clientY - top;

    // Update touch position
    mouseX.set(x);
    mouseY.set(y); // Update mouseX and mouseY for the particle
    updateParticlePosition(x, y);

    // Set particle visibility to true when touching the card
    setIsVisible(true);
  }

  function handleTouchStart() {
    // Set particle visibility to true when touching the card
    setIsVisible(true);
  }

  function handleMouseLeave() {
    // Keep the last position and make the particle visible
    // But the opacity is controlled by the isVisible state
    // We keep isVisible true so it stays at the last position
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const maskStyle = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove || handleMouseMove}
      onTouchStart={handleTouchStart} // Add touch start handler for mobile
      onTouchMove={handleTouchMove} // Add touch move handler for mobile
      onMouseLeave={handleMouseLeave} // Keep mouse leave handler
      onClick={onClick}
      className={`relative overflow-hidden border border-gray-600 rounded-xl ${className}`}
      style={{
        ...style,
        backdropFilter: 'blur(0.5px)',
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
      }}
    >
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
      <div className="relative z-30 p-4">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {description && <p className="text-sm text-gray-500 mt-2">{description}</p>}
      </div>
      {children}
    </div>
  );
};