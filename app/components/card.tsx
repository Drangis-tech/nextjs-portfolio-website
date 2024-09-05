"use client";
import React, { PropsWithChildren } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

interface CardProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  title?: string; // Add title prop
  description?: string; // Add description prop
  onMouseMove?: (event: React.MouseEvent<HTMLDivElement>) => void; // Add onMouseMove prop
}

export const Card: React.FC<CardProps> = ({ children, className, onClick, style, title, description, onMouseMove }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const maskStyle = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove || handleMouseMove} // Use passed onMouseMove or local handleMouseMove
      onClick={onClick}
      className={`overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ${className}`}
      style={style}
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

      {/* Display the title and description */}
      {title && <h3 className="text-lg font-semibold p-4">{title}</h3>}
      {description && <p className="text-sm text-gray-500 p-4">{description}</p>}

      {children}
    </div>
  );
};