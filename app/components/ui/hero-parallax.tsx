"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FlipWords } from "./flip-words"; // Ensure the correct path

// Import images (update paths if needed)
import scanstrutComImage from "../../public/projektai/scanstrut_com.jpg";
import baytekinternationalComImage from "../../public/projektai/baytekinternational_com.jpg";
import lowvacAuImage from "../../public/projektai/lowvac_au.jpg";
import cincinnatidogtrainersComImage from "../../public/projektai/cincinnatidogtrainers_com.jpg";
import entsavCoUkImage from "../../public/projektai/entsav_co_uk.jpg";
import miracleexperienceCoTzImage from "../../public/projektai/miracleexperience_co_tz.jpg";
import stogridaComImage from "../../public/projektai/stogrida_com.jpg";
import estlightingComAuImage from "../../public/projektai/estlighting_com_au.jpg";
import arenapropertiesComImage from "../../public/projektai/arenaproperties_com.jpg";

export const HeroParallax: React.FC<{ products: { title: string; link: string; thumbnail: string }[] }> = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-300, 0]), // Adjusted translateY to avoid extra space
    springConfig
  );

  return (
    <div
      ref={ref}
      className="relative h-[150vh] py-12 overflow-hidden antialiased flex flex-col [perspective:1000px] [transform-style:preserve-3d] z-20" // Adjusted height and padding
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-30"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16 mb-12"> {/* Increased margin-bottom */}
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-12 space-x-16"> {/* Increased margin-bottom */}
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16"> {/* Adjusted margin */}
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
      {/* Gradient Transition Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div> {/* Adjusted height */}

      {/* New Section with Header and Description */}
      <div className="absolute bottom-0 w-full bg-black text-center z-40 pt-16"> {/* Added padding-top */}
        <div className="py-4 px-4 md:px-8"> {/* Added padding */}
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-2"> {/* Reduced margin-bottom */}
            Kaip atrodo puslapio kurimo darbo eiga?
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-4xl mx-auto">
            Puslapio kūrimas yra nuoseklus procesas, apimantis svarbius etapus nuo idėjų iki galutinio produkto. Kiekvienas etapas užtikrina, kad svetainė atitiktų jūsų lūkesčius ir poreikius.
          </p>
        </div>
      </div>
    </div>
  );
};

export const Header: React.FC = () => {
  return (
    <div className="relative max-w-7xl mx-auto py-12 md:py-20 px-4 w-full left-0 top-0 z-40"> {/* Adjusted padding */}
      <h1 className="text-2xl md:text-5xl font-bold text-white"> {/* Adjusted font size */}
        Mūsų <span className="text-2xl md:text-5xl font-bold"><FlipWords words={["nuostabi", "motyvuota", "geriausia"]} /></span> <br /> Brandforge komanda
      </h1>
      <p className="max-w-2xl text-base md:text-lg mt-4 text-white"> {/* Adjusted font size */}
        Kuria gražius ir funkcionalius puslapius, naudodama įvairias technologijas.
        Siekiame greito darbo, patrauklaus dizaino, praktiškumo ir kainų, nuo kurių neišsigąsta jūsų piniginė.
      </p>
    </div>
  );
};

export const ProductCard: React.FC<{ product: { title: string; link: string; thumbnail: string }; translate: MotionValue<number> }> = ({
  product,
  translate,
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-80 w-[28rem] relative flex-shrink-0 overflow-hidden" 
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          layout="fill"
          className="object-cover absolute inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};