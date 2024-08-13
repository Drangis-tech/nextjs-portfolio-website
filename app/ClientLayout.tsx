// app/ClientLayout.tsx
"use client"; // Mark this component as a client component

import { useState, useEffect } from "react";
import AnimatedIntro from "./components/AnimatedIntro";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{showIntro ? <AnimatedIntro /> : children}</>;
}