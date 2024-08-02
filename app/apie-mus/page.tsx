"use client";
import { Navigation } from "../components/nav";

export default function AboutUs() {
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

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
                    <div className="card">
                        <h1 className="text-3xl font-bold text-center text-white">Apie Mus</h1>
                        <p className="mt-4 text-center text-zinc-400">
                            Mes esame komanda, kuri specializuojasi kuriant novatoriškus IT sprendimus. 
                            Mūsų tikslas – padėti verslams augti naudojant šiuolaikines technologijas.
                        </p>
                    </div>
                    {technologies.map((tech, index) => (
                        <div key={index} className="card p-4 bg-zinc-800 rounded-md shadow-md text-center">
                            <h2 className="text-xl font-bold text-white">{tech.name}</h2>
                            <p className="mt-2 text-zinc-400">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
