// components/UnderConstruction.tsx

"use client";

import React from "react";
import { Navigation } from "./nav";
import Footer from "./Footer";
import Image from "next/image";


const UnderConstruction: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-1/6 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/6 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent" />
      </div>

      <Navigation />


      <div className="flex flex-col items-center justify-center h-screen px-6 pt-24 mx-auto text-center max-w-7xl lg:px-8">
                {/* Optional Image or Illustration */}
                <div className="mt-0">
          <Image
            src="/paslaugos/Custom_Solutions.png" // Replace with a suitable image
            alt="Under construction"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Šis puslapis šiuo metu yra tvarkomas
        </h2>
        <p className="mt-4 text-xl text-zinc-400">
          Mes dirbame kuo greičiau, kad čia galėtumėte pamatyti mūsų projektus.
        </p>
        <p className="mt-2 text-lg text-zinc-500">
          Labai atsiprašome už laikinus nepatogumus :)
        </p>


      </div>

      <Footer />
    </div>
  );
};

export default UnderConstruction;