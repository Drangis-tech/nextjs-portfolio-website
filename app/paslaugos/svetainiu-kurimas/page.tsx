"use client";

import React, { useEffect } from "react";
import { Navigation } from "../../components/nav";
import Footer from '../../components/Footer'; // Import the Footer component

const SvetainiuKurimas = () => {
    useEffect(() => {
        // Set the document title
        document.title = "Svetainių kūrimas | Brandforge.lt";
      
        // Set the meta description
        const metaDescription = document.querySelector("meta[name='description']");
      
        // Type check to ensure metaDescription is not null
        if (metaDescription instanceof HTMLMetaElement) {
          metaDescription.content = "Svetainių kūrimas su Brandforge.lt – profesionalios internetinių svetainių kūrimo paslaugos, optimizuotos SEO, užtikrinančios puikų matomumą Google.";
        }
      }, []);

  return (
    <div className="relative min-h-screen bg-black">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-32 lg:pt-40 relative z-10">
        
        {/* Hero Section */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Svetainių kūrimas: Kaip sukurti efektyvią internetinę svetainę jūsų verslui
          </h1>
          <p className="mt-4 text-zinc-400">
            Optimizuotos ir efektyvios internetinės svetainės kūrimo gairės, padedančios išsiskirti rinkoje ir pritraukti daugiau klientų.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Introduction */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-zinc-100">Introduction</h2>
          <p className="mt-4 text-zinc-400">
          Šiuolaikiniame verslo pasaulyje, internetinė svetainė yra ne tik įmonės vizitinė kortelė, bet ir galingas pardavimų, rinkodaros bei komunikacijos įrankis. Tinkamai sukurta svetainė padeda pritraukti klientus, didinti prekės ženklo žinomumą ir generuoti pajamas. Svetainių kūrimas prasideda nuo aiškios vizijos ir tikslo nustatymo. Atsakykite į šiuos klausimus: koks jūsų verslo tikslas internete, kas yra jūsų tikslinė auditorija, ir koks turėtų būti svetainės dizainas ir struktūra? Kuo aiškesnis tikslas ir struktūra, tuo efektyvesnis bus kūrimo procesas.
          </p>
          <img src="/images/website-development-introduction.jpg" alt="Introduction Image" className="w-full h-auto rounded-lg mt-8" />
        </div>

        {/* Starting the Website Creation */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-zinc-100">Kaip prasideda svetainių kūrimas?</h2>
          <p className="mt-4 text-zinc-400">
          Efektyvi svetainė privalo turėti patogų ir intuityvų dizainą. SEO optimizacija yra svarbus žingsnis svetainės kūrimo procese. Integruokite tinkamus raktinius žodžius, tokius kaip „svetainių kūrimas“, „internetinių svetainių kūrimas“, ir „puslapių kūrimas“. Raktiniai žodžiai turėtų atsirasti svetainės pavadinimuose, meta aprašymuose ir turinyje. Svarbu, kad svetainė būtų mobili ir prisitaikanti prie įvairių ekranų dydžių, nes daugiau nei pusė apsilankymų svetainėse vyksta per mobiliuosius įrenginius. Be to, optimizuokite svetainės vaizdus naudodami alt tekstą su pagrindiniais raktiniais žodžiais ir užtikrinkite, kad svetainė būtų greitai įkraunama.

          </p>
          <img src="/images/website-planning.jpg" alt="Website Planning" className="w-full h-auto rounded-lg mt-8" />
        </div>

        {/* SEO Optimization */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-zinc-100">SEO optimizacija svetainės kūrimo procese</h2>
          <p className="mt-4 text-zinc-400">
          Greitis ir saugumas yra esminiai veiksniai, kuriais „Google“ remiasi vertindama svetainę. Naudojant populiarias turinio valdymo sistemas, tokias kaip WordPress, galima lengvai valdyti turinį, optimizuoti SEO ir pridėti papildomas funkcijas, tokias kaip internetinė parduotuvė ar kontaktinė forma. Norėdami ilgalaikio veikimo, svarbu naudoti patikimus hostingo paslaugų teikėjus ir užtikrinti svetainės saugumą su SSL sertifikatais.          </p>
          <img src="/images/seo-optimization.jpg" alt="SEO Optimization" className="w-full h-auto rounded-lg mt-8" />
        </div>

        {/* Design and User Experience */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-zinc-100">Dizainas ir vartotojo patirtis (UX)</h2>
          <p className="mt-4 text-zinc-400">
          Svetainės kūrimas yra nuolatinis procesas, kurio metu reikia reguliariai atnaujinti turinį ir pritaikyti naujiems SEO reikalavimams. Tai leis išlikti konkurencingiems ir pritraukti daugiau klientų. Rinktis profesionalus svetainės kūrimui verta, nes jie užtikrina aukščiausio lygio techninius sprendimus, kokybišką dizainą ir ilgalaikį svetainės veikimą be trikdžių. Tinkamai sukurta ir optimizuota svetainė padės jūsų verslui būti matomu internetinėje erdvėje ir pritraukti daugiau klientų.          </p>
          <img src="/images/ux-design.jpg" alt="UX Design" className="w-full h-auto rounded-lg mt-8" />
        </div>

        {/* Mobile Responsiveness */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-zinc-100">Mobilumo svarba</h2>
          <p className="mt-4 text-zinc-400">
            Daugiau nei pusė svetainių apsilankymų vyksta naudojant mobiliuosius įrenginius. Todėl būtina, kad jūsų svetainė būtų responsyvi ir greitai įkraunama tiek mobiliaisiais, tiek stacionariais įrenginiais.
          </p>
          <img src="/images/mobile-responsiveness.jpg" alt="Mobile Responsiveness" className="w-full h-auto rounded-lg mt-8" />
        </div>

        {/* Technical Aspects */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-zinc-100">Techninės svetainės kūrimo dalys</h2>
          <p className="mt-4 text-zinc-400">
            Naudojant populiarias turinio valdymo sistemas, kaip WordPress, galima lengvai valdyti turinį, optimizuoti SEO ir pridėti papildomas funkcijas. Taip pat svarbu užtikrinti svetainės greitį ir saugumą naudojant SSL sertifikatus ir patikimus hostingo teikėjus.
          </p>
          <img src="/images/technical-aspects.jpg" alt="Technical Aspects" className="w-full h-auto rounded-lg mt-8" />
        </div>

        {/* Website Maintenance */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-zinc-100">Svetainių priežiūra ir atnaujinimas</h2>
          <p className="mt-4 text-zinc-400">
            Svetainės kūrimas yra nuolatinis procesas. Norint išlaikyti konkurencingumą, būtina reguliariai atnaujinti turinį, optimizuoti naujiems SEO reikalavimams bei atsižvelgti į vartotojų poreikius.
          </p>
          <img src="/images/website-maintenance.jpg" alt="Website Maintenance" className="w-full h-auto rounded-lg mt-8" />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Norite sužinoti daugiau?
          </h2>
          <p className="mt-4 text-zinc-400">
            Susisiekite su mumis šiandien ir sužinokite, kaip galime padėti jūsų verslui sukurti profesionalią ir efektyvią internetinę svetainę.
          </p>
          <div className="mt-6">
            <a
              href="/kontaktai"
              className="w-full py-2 px-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-semibold rounded-md hover:from-orange-500 hover:to-orange-700 active:from-orange-600 active:to-orange-800 focus:outline-none focus:ring focus:ring-orange-400 transition duration-200"
            >
              Susisiekite
            </a>
          </div>
        </div>

        <Footer /> {/* Footer component */}
      </div>
    </div>
  );
};

export default SvetainiuKurimas;