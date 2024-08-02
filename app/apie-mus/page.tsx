"use client";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";

const technologies = [
    { name: "JavaScript", description: "Modern JavaScript for dynamic web applications." },
    { name: "React", description: "Building user interfaces with React." },
    { name: "Next.js", description: "Server-side rendering with Next.js." },
    { name: "Node.js", description: "Backend services with Node.js." },
    { name: "Laravel", description: "Robust PHP framework for web artisans." },
    { name: "Magento", description: "E-commerce platform for custom solutions." },
    { name: "WooCommerce", description: "E-commerce plugin for WordPress." },
    { name: "HTML & CSS", description: "Fundamentals of web development." },
];

export default function AboutUs() {
    return (
        <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <Navigation />
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
            <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto mt-32 sm:mt-0">
                <div className="mb-16 text-center animate-fade-in">
                    <h1 className="text-3xl font-bold text-white">Apie Mus</h1>
                    <p className="mt-4 text-zinc-400">
                        Mes esame komanda, kuri specializuojasi kuriant novatoriškus IT sprendimus. 
                        Mūsų tikslas – padėti verslams augti naudojant šiuolaikines technologijas.
                    </p>
                </div>
                <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
                    {technologies.map((tech, index) => (
                        <div key={index} className="p-6 bg-white/10 rounded-md shadow-md text-center backdrop-blur-lg">
                            <h2 className="text-xl font-bold text-white">{tech.name}</h2>
                            <p className="mt-2 text-zinc-400">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
