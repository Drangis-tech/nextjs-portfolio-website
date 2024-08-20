"use client";

import React, { useRef, useEffect } from "react";

interface MeteorShowerProps {
  className?: string;
}

export default function MeteorShower({ className = "" }: MeteorShowerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    let meteors: Meteor[] = [];

    if (canvas && ctx) {
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      const createMeteor = () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.5;
        const length = Math.random() * 100 + 50;
        const speed = Math.random() * 2 + 4;
        const angle = Math.random() * Math.PI / 4 + Math.PI / 8;
        const opacity = Math.random() * 0.5 + 0.5;

        meteors.push({ x, y, length, speed, angle, opacity, life: 1 });
      };

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        meteors.forEach((meteor, i) => {
          meteor.x += Math.cos(meteor.angle) * meteor.speed;
          meteor.y += Math.sin(meteor.angle) * meteor.speed;
          meteor.life -= 0.02;

          if (meteor.life <= 0) {
            meteors.splice(i, 1);
          }

          ctx.beginPath();
          ctx.moveTo(meteor.x, meteor.y);
          ctx.lineTo(
            meteor.x - Math.cos(meteor.angle) * meteor.length,
            meteor.y - Math.sin(meteor.angle) * meteor.length
          );
          ctx.strokeStyle = `rgba(255, 255, 255, ${meteor.opacity * meteor.life})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        });

        requestAnimationFrame(animate);
      };

      setInterval(createMeteor, 100);
      animate();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -20, // Behind all content
        pointerEvents: "none",
      }}
    />
  );
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
}