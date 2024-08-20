"use client";

import React, { useRef, useEffect } from "react";

interface MeteorShowerProps {
  className?: string;
}

export default function MeteorShower({ className = "" }: MeteorShowerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
      setInterval(() => {
        if (Math.random() < 0.1) {
          drawMeteor();
        }
      }, 1000);
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const resizeCanvas = () => {
    if (canvasRef.current && context.current) {
      canvasSize.current.w = canvasRef.current.offsetWidth;
      canvasSize.current.h = canvasRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      context.current.scale(dpr, dpr);
    }
  };

  const drawMeteor = () => {
    if (!context.current) return;

    const length = Math.random() * 100 + 50; // Random length
    const speed = Math.random() * 5 + 2; // Random speed
    const startX = Math.random() * canvasSize.current.w; // Random start X position
    const startY = Math.random() * canvasSize.current.h; // Random start Y position
    const angle = Math.random() * (Math.PI / 4) + (Math.PI / 4); // Random angle
    const dx = Math.cos(angle) * speed;
    const dy = Math.sin(angle) * speed;

    const meteor = { x: startX, y: startY, length, dx, dy };

    const animateMeteor = () => {
      if (context.current) {
        context.current.clearRect(
          meteor.x - dx * meteor.length,
          meteor.y - dy * meteor.length,
          meteor.x + dx * meteor.length,
          meteor.y + dy * meteor.length
        );

        context.current.beginPath();
        context.current.arc(meteor.x, meteor.y, 2, 0, Math.PI * 2, false); // Rounded front
        context.current.moveTo(meteor.x, meteor.y);
        context.current.lineTo(
          meteor.x - dx * meteor.length,
          meteor.y - dy * meteor.length
        );
        context.current.strokeStyle = `rgba(255, 255, 255, 0.8)`;
        context.current.lineWidth = 2;
        context.current.stroke();

        meteor.x += dx;
        meteor.y += dy;

        if (meteor.y < canvasSize.current.h + meteor.length) {
          requestAnimationFrame(animateMeteor);
        }
      }
    };
    animateMeteor();
  };

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ position: "absolute", inset: 0, zIndex: -10 }}
    />
  );
}