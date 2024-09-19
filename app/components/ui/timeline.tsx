"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchedIndexes, setTouchedIndexes] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Detect which circle should be active based on scroll position
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.floor(progress * (data.length - 1));
    setActiveIndex(index);

    // Mark the first circle as touched when scrollYProgress is 0
    if (progress === 0) {
      setTouchedIndexes(new Set([0]));
    } else {
      setTouchedIndexes((prev) => new Set(prev).add(index));
    }
  });

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start pt-28 md:pt-72 md:gap-14"
          >
            <div className="sticky flex flex-col z-40 items-start top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
                <div
                  className={`h-4 w-4 rounded-full ${
                    touchedIndexes.has(index)
                      ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 border-none'
                      : 'bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700'
                  } p-2`}
                />
              </div>

              {/* Title */}
              <h3
                className={`text-left text-xl md:text-4xl font-bold ${
                  index === activeIndex
                    ? 'text-white'
                    : 'text-neutral-500 dark:text-neutral-500'
                } mb-4 ml-16 md:ml-28`}
              >
                {item.title}
              </h3>

              {/* Description aligned below title */}
              <div className="pl-16 md:pl-28 text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};