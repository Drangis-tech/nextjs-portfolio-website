"use client";
import { Navigation } from "../components/nav";
import Particles from "./components/particles";


export default function AboutUs() {
    const technologies = [
        { name: "JavaScript", description: "Šiuolaikinis JavaScript dinamiškoms svetainių programoms." },
        { name: "React", description: "Vartotojo sąsajų kūrimas (user interfaces) naudojant React." },
        { name: "Next.js", description: "Serverio pusės atvaizdavimas naudojant Next.js." },
        { name: "Node.js", description: "Galinės paslaugos (Backend) naudojant Node.js." },
        { name: "Laravel", description: "Patikima PHP sistema, skirta svetainių kūrimo meistrams." },
        { name: "Magento", description: "Elektroninės prekybos platforma, skirta individualiems sprendimams." },
        { name: "WooCommerce", description: "WordPress elektroninės komercijos įskiepis (plugin)." },
        { name: "HTML & CSS", description: "Žiniatinklio kūrimo pagrindai." },
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
