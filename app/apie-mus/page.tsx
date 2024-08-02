import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Eye } from "lucide-react";

// Sample data for the About Us page
const aboutUsData = [
  {
    title: "Our Team",
    description: "Meet our dedicated and talented team who work tirelessly to deliver exceptional results.",
  },
  {
    title: "Our Vision",
    description: "To revolutionize the industry with innovative solutions and unparalleled service.",
  },
  {
    title: "Our Values",
    description: "Integrity, Excellence, and Collaboration are the core values that drive our success.",
  },
];

const ApieMus: React.FC = () => {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Apie Mus</h2>
          <p className="mt-4 text-zinc-400">
            Learn more about our team, vision, and values that drive our mission.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {aboutUsData.map((section, index) => (
            <Card key={index}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <span>{section.title}</span>
                  </div>
                </div>

                <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                  {section.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {section.description}
                </p>
              </article>
            </Card>
          ))}
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
};

export default ApieMus;