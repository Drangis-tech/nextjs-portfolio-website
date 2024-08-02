"use client";
import { Navigation } from "../components/nav";
import Link from "next/link";

export default function AboutUs() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
                    <div className="card">
                        <h1 className="text-3xl font-bold text-center text-white">Apie Mus</h1>
                        <p className="mt-4 text-center text-zinc-400">
                            Čia yra mūsų istorija, vertybės ir misija.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
