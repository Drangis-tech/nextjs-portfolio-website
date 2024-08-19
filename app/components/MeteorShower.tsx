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
        if (Math.random() < 0.05) { // 5% chance per second to create a meteora
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

    const length = Math.random() * 80 + 20;
    const speed = Math.random() * 10 + 2;
    const x = Math.random() * canvasSize.current.w; // aa
    const y = -length;
    const angle = Math.PI / 4;
    const dx = Math.cos(angle) * speed;
    const dy = Math.sin(angle) * speed;

    const meteor = { x, y, length, dx, dy };

    const animateMeteor = () => {
      if (context.current) {
        context.current.beginPath();
        context.current.moveTo(meteor.x, meteor.y);
        context.current.lineTo(
          meteor.x - dx * meteor.length,
          meteor.y - dy * meteor.length
        );
        context.current.strokeStyle = "rgba(255, 255, 255, 0.8)";
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