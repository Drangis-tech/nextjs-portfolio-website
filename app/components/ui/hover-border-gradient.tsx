"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(30% 70% at 50% 0%, rgba(247, 167, 27, 1) 0%, rgba(247, 167, 27, 0) 100%)", // Updated to highlight color
    LEFT: "radial-gradient(30% 70% at 0% 50%, rgba(247, 167, 27, 1) 0%, rgba(247, 167, 27, 0) 100%)", // Updated to highlight color
    BOTTOM: "radial-gradient(30% 70% at 50% 100%, rgba(247, 167, 27, 1) 0%, rgba(247, 167, 27, 0) 100%)", // Updated to highlight color
    RIGHT: "radial-gradient(30% 70% at 100% 50%, rgba(247, 167, 27, 1) 0%, rgba(247, 167, 27, 0) 100%)", // Updated to highlight color
  };

  // Main gradient color for hover effect
  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #f7a71b, #f16529)"; // Replace this with your main gradient color

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border border-gray-400/25 content-center bg-black/20 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(4px)", // Increased blur for better visibility
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight] // This will be your gradient when hovered
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div
        className={cn(
          "absolute inset-[2px] rounded-[100px] z-1 transition-all duration-500",
          hovered ? "bg-[radial-gradient(75%_181.15942028985506%_at_50%_50%,_#f7a71b,_#f16529)]" : "bg-black" // Update this line
        )}
      />
    </Tag>
  );
}