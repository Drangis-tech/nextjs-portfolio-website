import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";

export const revalidate = 60;

export default function ServicesPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Paslaugos
          </h2>
          <p className="mt-4 text-zinc-400">
            Mūsų komanda siūlo įvairiapuses paslaugas, kurios padės Jūsų verslui
            ne tik augti, bet ir išsiskirti skaitmeninėje erdvėje. Išnaudokite
            mūsų patirtį ir profesionalumą, kad pasiektumėte geriausius
            rezultatus.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <div className="flex flex-col gap-6">
            <div className="p-6 bg-zinc-800 rounded-lg">
              <h3 className="text-xl font-semibold text-zinc-100">
                Svetainių kūrimas
              </h3>
              <p className="mt-2 text-zinc-400">
                Kuriame profesionalias ir modernias svetaines, pritaikytas jūsų
                verslo poreikiams. Nesvarbu, ar tai paprastas tinklalapis, ar
                sudėtingas el. prekybos sprendimas, mes turime sprendimą jums.
              </p>
            </div>

            <div className="p-6 bg-zinc-800 rounded-lg">
              <h3 className="text-xl font-semibold text-zinc-100">
                SEO paslaugos
              </h3>
              <p className="mt-2 text-zinc-400">
                Optimizuojame jūsų svetainę, kad ji būtų matoma paieškos
                sistemose ir pritrauktų daugiau lankytojų. Mūsų SEO ekspertai
                dirbs, kad jūsų verslas būtų lengviau atrandamas.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="p-6 bg-zinc-800 rounded-lg">
              <h3 className="text-xl font-semibold text-zinc-100">
                Skaitmeninės rinkodaros strategijos
              </h3>
              <p className="mt-2 text-zinc-400">
                Padėsime sukurti ir įgyvendinti efektyvias skaitmeninės
                rinkodaros strategijas, kurios padidins jūsų prekės ženklo
                žinomumą ir pardavimus. Naudojame socialinę žiniasklaidą,
                el. pašto marketingą ir kitus įrankius, kad pasiektume jūsų
                tikslus.
              </p>
            </div>

            <div className="p-6 bg-zinc-800 rounded-lg">
              <h3 className="text-xl font-semibold text-zinc-100">
                Konsultacijos ir palaikymas
              </h3>
              <p className="mt-2 text-zinc-400">
                Teikiame konsultacijas ir nuolatinį palaikymą, kad jūsų verslas
                nuolat tobulėtų. Mūsų specialistai visada pasirengę atsakyti į
                jūsų klausimus ir padėti rasti geriausius sprendimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}