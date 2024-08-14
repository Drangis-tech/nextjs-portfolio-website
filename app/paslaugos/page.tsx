import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

// Paslaugos Data
const servicesData = [
  {
    title: "Interneto Svetainių Kūrimas",
    description: "Kuriame aukštos kokybės, responsyvias svetaines, pritaikytas Jūsų verslo poreikiams.",
    detailedText: "Mūsų interneto svetainių kūrimo paslaugos apima viską nuo full-stack kūrimo iki individualių web aplikacijų. Mes prioritetą teikiame naudotojo patirčiai, prieinamumui ir našumui, užtikrindami, kad Jūsų svetainė būtų ir vizualiai patraukli, ir funkcionali.",
  },
  {
    title: "Prekės Ženklo Kūrimas",
    description: "Kuriame unikalią prekės ženklo tapatybę, kuri rezonuoja su Jūsų tiksliniu auditorija.",
    detailedText: "Mūsų prekės ženklo kūrimo paslaugos apima logotipų dizainą, prekės ženklo strategiją ir išsamių prekės ženklo gairių kūrimą. Siekiame sukurti nuoseklų ir įsimintiną prekės ženklo įvaizdį, kuris išsiskirtų rinkoje.",
  },
  {
    title: "Google ir Facebook Reklamos",
    description: "Tikslinės reklamos strategijos, skirtos maksimaliai padidinti Jūsų investicijų grąžą.",
    detailedText: "Kuriame ir valdome Google ir Facebook reklamos kampanijas, kurios efektyviai pasiekia Jūsų auditoriją. Mūsų požiūris apima išsamią auditorijos analizę, reklamos dizainą ir veiklos optimizavimą, siekiant geriausių rezultatų.",
  },
  {
    title: "SEO Optimizacija",
    description: "Pagerinkite savo svetainės matomumą paieškos sistemose su mūsų SEO paslaugomis.",
    detailedText: "Mūsų SEO paslaugos apima svetainės vidinę optimizaciją, raktinių žodžių tyrimą ir nuorodų kūrimo strategijas. Siekiame pagerinti Jūsų svetainės organinių paieškos rezultatų reitingus ir pritraukti daugiau lankytojų.",
  },
  {
    title: "Kitos Paslaugos",
    description: "Siūlome platų IT paslaugų spektrą, pritaikytą Jūsų verslo poreikiams.",
    detailedText: "Be pagrindinių paslaugų, teikiame ir kitas IT paslaugas, tokias kaip serverių priežiūra, techninė pagalba, sistemų integracija ir daugiau. Mūsų tikslas – padėti Jums pasiekti verslo tikslus naudojant inovatyvius sprendimus.",
  },
];

const Paslaugos: React.FC = () => {
  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Paslaugos</h2>
          <p className="mt-4 text-zinc-400">
            Sužinokite daugiau apie mūsų teikiamas paslaugas ir kaip jos gali padėti Jūsų verslui augti.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="space-y-8"> {/* Added space-y-8 for consistent spacing */}
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4">
              <Card className="card flex-1 md:w-1/3"> {/* Set width to 1/3 for the left box */}
                <article className="relative w-full h-full p-4 md:p-8 group bg-[rgba(28, 28, 30, 0.8)] hover:bg-[rgba(44, 44, 46, 0.8)]">
                  <h2 className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {service.description}
                  </p>
                </article>
              </Card>
              <div className="content flex-1 md:w-2/3"> {/* Set width to 2/3 for the right text */}
                <h3 className="text-xl font-bold text-zinc-100">{service.title}</h3>
                <p className="mt-2 text-zinc-400">{service.detailedText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paslaugos;