"use client";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";

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

export default function AboutUs() {
    return (
        <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <Navigation />
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
            <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto mt-32 sm:mt-0">
                <div className="mb-16 text-center animate-fade-in">
                    <h1 className="text-3xl font-bold text-white">Apie Mus</h1>
                    <p className="mt-4 text-zinc-400">
                        Mes esame komanda, kuri specializuojasi kuriant inovatyvius IT sprendimus. 
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
