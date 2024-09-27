"use client";
import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";
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

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.floor(progress * (data.length - 1));
    setActiveIndex(index);

    if (progress === 0) {
      setTouchedIndexes(new Set([0]));
    } else {
      setTouchedIndexes((prev) => new Set(prev).add(index));
    }
  });

  return (
    <div className="relative w-full font-sans md:px-10" ref={containerRef}>


      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 z-10">
        {data.map((item, index) => {
          const isActive = index === activeIndex;
          const opacity = isActive ? 1 : 0.2;

          return (
            <div
              key={index}
              className="timeline-entry flex flex-col md:flex-row items-start md:items-center justify-between pt-28 md:pt-72 md:gap-14 relative"
            >
              <div className="relative flex flex-col w-full md:w-1/2 md:pr-8 z-10">
                <div className="relative flex flex-col z-20 items-start max-w-xs lg:max-w-sm">
                  <div className="sticky top-40">
                    <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center z-30">
                      <div
                        className={`h-4 w-4 rounded-full ${
                          touchedIndexes.has(index)
                            ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 border-none'
                            : 'bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700'
                        } p-2`}
                      />
                    </div>

                    <h3
                      className={`text-left text-xl md:text-4xl font-bold mb-4 ml-16 md:ml-28 ${
                        isActive ? 'text-white' : 'text-neutral-500 dark:text-neutral-500'
                      }`}
                      style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                      {item.title}
                    </h3>

                    <div
                      className={`pl-16 md:pl-28 text-sm md:text-base ${
                        isActive ? 'text-white' : 'text-neutral-600 dark:text-neutral-400'
                      }`}
                      style={{ wordBreak: 'break-word', lineHeight: 1.5, maxWidth: '100%' }}
                    >
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center items-start w-full md:w-1/2 mt-4 md:mt-0 z-20">
                <motion.img
                  src={`/timeline/${index + 1}.png`}
                  alt={`Timeline image ${index + 1}`}
                  className="object-contain z-30" // Ensure image is above GridPattern
                  initial={{ opacity: 0.2, filter: 'blur(10px)' }}
                  animate={{ opacity: isActive ? 1 : 0.2, filter: 'blur(0)' }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '75%', // Reduced width to 75%
                    height: 'auto', // Maintain aspect ratio
                    maxWidth: '192px', // Cap the image width to 192px on larger screens
                  }}
                />
              </div>
            </div>
          );
        })}

        {/* Scroll line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-30"
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

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 767px) {
          .timeline-entry {
            flex-direction: column; /* Stack items vertically */
          }
          .timeline-entry > .relative:nth-child(1) {
            order: 0; /* Ensure text stays below the image */
          }
          .timeline-entry > .relative:nth-child(2) {
            order: -1; /* Ensure image is placed above the text */
            margin-bottom: 1rem; /* Space between image and text */
            align-self: flex-start; /* Align image to the start of the container */
          }
          .timeline-entry > .relative:nth-child(2) img {
            align-self: flex-start; /* Align image with the start of the container */
          }
          .timeline-entry > .relative:nth-child(1) {
            display: flex;
            flex-direction: column;
            align-items: flex-start; /* Ensure text aligns to the start */
          }
        }
      `}</style>
    </div>
  );
};