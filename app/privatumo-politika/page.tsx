"use client";

import React, { useEffect } from 'react'; // Import React and useEffect
import { Navigation } from '../components/nav'; // Import Navigation component
import Link from 'next/link'; // Import Link component for navigation

const PrivatumoPolitika: React.FC = () => {
  useEffect(() => {
    // Set the document title for this page
    document.title = "Privatumo Politika | Brandforge.lt";
  }, []);

  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />

      {/* Hero Section */}
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-32 lg:pt-40">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Privatumo Politika
          </h1>
          <p className="mt-4 text-zinc-400">
            Sužinokite daugiau apie tai, kaip mes tvarkome jūsų asmens duomenis ir saugome jūsų privatumą.
          </p>
        </div>
        {/* Divider Line */}
        <div className="w-full h-px bg-zinc-800" />
      </div>

      {/* Privacy Policy Content */}
      <div className="px-6 pt-12 space-y-12 max-w-7xl lg:px-8 md:space-y-16 md:pt-16 lg:pt-20 mx-auto text-zinc-400">
        <p><strong>PRIVATUMO POLITIKA</strong></p>
        <p>Aktuali redakcija 2024-09-23</p>

        <p>
          Mes, juridinio asmens pavadinimas <strong>Vainot, MB</strong>, juridinio asmens kodas 306620324, adresas Perkūnkiemio g. 19, Vilnius
          (toliau - <strong>Bendrovė</strong> arba <strong>Mes</strong>), rūpinamės savo kliento, internetinio puslapio <a href="https://brandforge.lt" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">https://brandforge.lt</a> naudotojo (toliau - <strong>Jūs</strong> arba <strong>Naudotojas</strong>) (toliau - <strong>Internetinė svetainė</strong>) duomenų saugumu ir privatumu.
        </p>

        <p>Ši Privatumo politika yra skirta pateikti informaciją apie tai, kaip Bendrovė tvarko ir saugo Jūsų duomenis, Jums naudojantis internetiniu puslapiu.</p>

        <p>Jūsų asmens duomenų rinkimą, tvarkymą ir saugojimą, kiek tai susiję su Jūsų naudojimusi internetiniu puslapiu, nustato ši privatumo politika, Lietuvos Respublikos Asmens duomenų teisinės apsaugos įstatymas ir kiti teisės aktai.</p>

        <h2 className="text-2xl font-bold text-zinc-100 mt-8">1. Sąvokos</h2>
        <p><strong>1.1. Asmens duomenys</strong> - reiškia bet kokią informaciją, pagal kurią galima tiesiogiai arba netiesiogiai nustatyti Jūsų tapatybę. Tvarkomi šie Jūsų asmens duomenys:</p>
        <ul className="list-disc pl-6 text-zinc-400">
          <li>El. paštas;</li>
          <li>Pirkėjo vardas ir pavardė;</li>
          <li>IP adresą;</li>
          <li>tinklo ir vietos duomenis, kai juos suteikiate;</li>
          <li>Jūsų užklausų ir nusiskundimų istorija;</li>
          <li>kitus viešai prieinamus duomenis, kuriais Jūs pasidalinote lankydamasis brandforge.lt svetainėje.</li>
        </ul>

        <p><strong>1.2. Asmens duomenų tvarkymas</strong> - reiškia bet kokią su asmens duomenimis atliekamą operaciją (tokią kaip - informacijos rinkimas, redagavimas, keitimas, įrašymas, saugojimas, prieigos suteikimas, užklausų pateikimas, archyvavimas ir pan.).</p>
        <p><strong>1.3. Duomenų valdytojas</strong> - Vainot, MB, juridinio asmens kodas 306620324, adresas Perkūnkiemio g. 19, Vilnius.</p>
        <p><strong>1.4. Duomenų subjektas</strong> - bet kuris fizinis asmuo, kurio duomenis tvarko Bendrovė.</p>
        <p><strong>1.5. Svetainė</strong> - <a href="https://brandforge.lt" className="text-blue-400 hover:text-blue-300">https://brandforge.lt/</a></p>

        <h2 className="text-2xl font-bold text-zinc-100 mt-8">2. Jūsų asmens duomenų tvarkymas lankantis Svetainėje</h2>
        <p><strong>2.1.</strong> Pateikdamas duomenis Bendrovei, Duomenų subjektas sutinka, kad Asmens duomenys būtų naudojami Bendrovei siekiant užtikrinti internetinės svetainės funkcionavimą Duomenų subjekto pageidaujamais tikslais.</p>
        <p><strong>2.2.</strong> Jūsų asmens duomenis Bendrovė tvarko šiais pagrindais:</p>
        <ul className="list-disc pl-6 text-zinc-400">
          <li>Bendrovė gauna aiškiai išreikštą Jūsų sutikimą tvarkyti Jūsų duomenis tokiu būdu, t.y. kai Jūs sukuriate Naudotojo paskyrą;</li>
          <li>Jūs atliekate užsakymą internetinėje svetainėje, kuris yra priimamas ir vykdomas, tokiu būdu sudarant sutartį su Jumis ir ją vykdant;</li>
          <li>taip pat tais atvejais kai Bendrovė turi tvarkyti Jūsų duomenis turėdama teisinę pareigą;</li>
          <li>yra įgyvendinami Bendrovės teisėti interesai. Mes tvarkysime Jūsų Asmens duomenis, jeigu tam turime teisėtą interesą ir toks duomenų tvarkymas nepažeidžia Jūsų interesų ir teisių apsaugos.</li>
        </ul>
        <p><strong>2.3.</strong> Bendrovė Jūsų duomenis tvarko šiais tikslais:</p>
        <ul className="list-disc pl-6 text-zinc-400">
          <li>Efektyviam, optimaliam ir Jums patogiam internetinės svetainės funkcionavimui;</li>
          <li>Siekiant užtikrinti sklandų internetinės svetainės administravimą;</li>
          <li>Jūsų paskyros registravimui ir palaikymui;</li>
          <li>Tinkamam Jūsų užsakytų paslaugų suteikimui;</li>
          <li>Siekiant Jums pateikti aktualią informaciją, atsakyti į Jūsų klausimus, užklausas;</li>
          <li>Vykdant statistinę ir kitą analizę, skirtą tobulinti internetinės svetainės veiklą ir Jūsų patirtį ja naudojantis;</li>
          <li>Kai lankotės Svetainėje, Bendrovė gali tvarkyti Jūsų IP adresą, tinklo ir vietos duomenis. Šie Asmens duomenys yra renkami slapukų ir kitų panašių technologijų pagalba Naudotojo sutikimo pagrindu.</li>
          <li>Kitiems tikslams, kurie gali būti Jums nurodomi Jūsų duomenų pateikimo metu.</li>
        </ul>

        <h2 className="text-2xl font-bold text-zinc-100 mt-8">3. Asmens duomenų teikimas trečiosioms šalims</h2>
        <p><strong>3.1.</strong> Mes įsipareigojame jūsų Asmens duomenų atžvilgiu laikytis konfidencialumo pareigos. Jūsų Asmens duomenys gali būti atskleisti trečiosioms šalims tik tada, jeigu to reikia sutarčiai duomenų subjekto naudai sudaryti ir vykdyti, arba dėl kitų teisėtų priežasčių.</p>
        <p><strong>3.2.</strong> Bendrovė gali pateikti Asmens duomenis savo duomenų tvarkytojams, kurie teikia Bendrovei paslaugas ir tvarko asmens duomenis Bendrovės vardu. Tokie Bendrovės pasirinkti Asmens duomenų tvarkytojai turi teisę tvarkyti Asmens duomenis tik pagal Bendrovės nurodymus ir tik tokia apimtimi, kiek tai yra būtina siekiant tinkamai vykdyti Bendrovės ir paslaugų tiekėjo sutartyje nustatytus įsipareigojimus. Užtikriname Jus, kad Bendrovė bendradarbiauja tik su tokiais duomenų tvarkytojais, kurie garantuoja tinkamas priemones (organizacines ir technines) Asmens duomenų tvarkymui ir užtikrina Asmens duomenų tvarkymą pagal teisės aktų reikalavimus.</p>
        <p><strong>3.3.</strong> Įmonė taip pat gali teikti asmens duomenis atsakydama į teismo arba valstybinių institucijų prašymus ta apimtimi, kiek tai būtina siekiant tinkamai vykdyti galiojančius teisės aktus ir valstybinių institucijų nurodymus.</p>

        <h2 className="text-2xl font-bold text-zinc-100 mt-8">4. Asmens duomenų saugojimo terminas</h2>
        <p><strong>4.1.</strong> Jūsų asmens duomenis saugome tik tokį laikotarpį, kuris yra būtinas privatumo politikoje numatytų tikslų įgyvendinimui.</p>
        <p><strong>4.2.</strong> Jeigu 2 metus nebūnate aktyvus internetinėje svetainėje turimoje Naudotojo paskyroje, Jūsų asmens duomenys yra ištrinami.</p>
        <p><strong>4.3.</strong> Jūs taip pat galite pareikalauti, kad Jūsų paskyra internetinėje svetainėje būtų panaikinta.</p>

        <h2 className="text-2xl font-bold text-zinc-100 mt-8">5. Nepilnamečių Asmens duomenys</h2>
        <p><strong>5.1.</strong> Mes rūpinamės nepilnamečių privatumo apsauga. Informuojame, kad mūsų Svetainė nėra pritaikytos asmenims, jaunesniems nei 18 metų amžiaus.</p>
        <p><strong>5.2.</strong> Asmenys, kurie yra jaunesni negu 18 metų, negali teikti jokių Asmens duomenų Svetainėje.</p>
        <p><strong>5.3.</strong> Jei asmuo yra jaunesnis negu 18 metų, norėdamas naudotis Svetainė, prieš pateikiant Asmens duomenis, privalo turėti bent vieno iš teisėtų atstovų (tėvo, motinos, globėjo (-os)) rašytinį sutikimą dėl asmens duomenų tvarkymo.</p>

        <h2 className="text-2xl font-bold text-zinc-100 mt-8">6. Duomenų subjektų teisės</h2>
        <p><strong>6.1.</strong> Būdamas Duomenų subjektu, turite šias Duomenų subjekto teises:</p>
        <ul className="list-disc pl-6 text-zinc-400">
          <li><strong>6.1.1.</strong> Teisė gauti informaciją apie duomenų tvarkymą (“teisė žinoti”).</li>
          <li><strong>6.1.2.</strong> Teisė susipažinti su tvarkomais duomenimis (“teisė susipažinti”).</li>
          <li><strong>6.1.3.</strong> Teisė reikalauti ištaisyti duomenis (“teisė ištaisyti”).</li>
          <li><strong>6.1.4.</strong> Teisė reikalauti ištrinti duomenis (“teisė būti pamirštam“). Ši teisė netaikoma, jei asmens duomenys, kuriuos prašoma ištrinti, yra tvarkomi ir kitu teisiniu pagrindu, tokiu kaip tvarkymas būtinas sutarties vykdymui arba yra pareigos pagal taikomus teisės aktus vykdymas.</li>
          <li><strong>6.1.5.</strong> Teisė apriboti duomenų tvarkymą (“teisė apriboti”).</li>
          <li><strong>6.1.6.</strong> Teisė nesutikti su duomenų tvarkymu.</li>
          <li><strong>6.1.7.</strong> Teisė į duomenų perkeliamumą. Teisė į duomenų perkeliamumą negali daryti neigiamo poveikio kitų teisėms ir laisvėms. Duomenų subjektas teisės į duomenų perkeliamumą neturi tų asmens duomenų atžvilgiu, kurie tvarkomi neautomatiniu būdu susistemintose rinkmenose, pavyzdžiui, popierinėse bylose.</li>
          <li><strong>6.1.8.</strong> Teisė reikalauti, kad nebūtų taikomas tik automatizuotas duomenų tvarkymas, įskaitant profiliavimą.</li>
          <li><strong>6.1.9.</strong> Teisė pateikti skundą dėl asmens duomenų tvarkymo Valstybinei duomenų apsaugos inspekcijai.</li>
        </ul>
        <p><strong>6.2.</strong> Siekdami įgyvendinti savo teises, galite pateikti mums paklausimą ar prašymą raštu: +370 (632) 25 179. Gavę tokio pobūdžio prašymą ar paklausimą iš Jūsų, galime paprašyti Jūsų užpildyti reikiamas formas, taip pat - pateikti notariškai patvirtintą Jūsų asmens dokumento kopiją, kuri Mums reikalinga įsitikinti Jūsų tapatybe, siekiant išvengti Asmens duomenų atskleidimo.</p>
        <p><strong>6.3.</strong> Po Jūsų prašymo ar paklausimo dėl Asmens duomenų tvarkymo gavimo, Mes įsipareigojame ne vėliau kaip per 1 mėnesį nuo kreipimosi dienos pateikti Jums atsakymą ir atlikti prašyme nurodytus veiksmus arba informuoti Jus, kodėl atsisakome juos atlikti. Prireikus nurodytas laikotarpis gali būti pratęstas dar 2 mėnesiais, atsižvelgiant į prašymų sudėtingumą ir skaičių. Tokiu atveju, per 1 mėnesį nuo prašymo gavimo dienos mes informuosime Jus apie tokį pratęsimą.</p>
        <p><strong>6.4.</strong> Jei Jums paprašius Asmens duomenys yra ištrinami, mes saugosime tik informacijos kopijas, kurios yra būtinos siekiant apsaugoti mūsų ir kitų asmenų teisėtus interesus, laikytis valstybės institucijų įpareigojimų, spręsti ginčus, atpažinti trikdžius arba laikytis bet kokių susitarimų, kuriuos esate sudarę su mumis.</p>
        <p><strong>6.5.</strong> Jei manote, kad Jūsų teisės pagal Asmens duomenų apsaugos teisės aktus buvo pažeistos, turite teisę pateikti skundą Valstybinei duomenų apsaugos inspekcijai arba kitai kompetentingai priežiūros institucijai.</p>

        <h2 className="text-2xl font-bold text-zinc-100 mt-8">7. Slapukai ir kitos panašios technologijos</h2>
        <p><strong>7.1.</strong> Svetainėje naudojame slapukus ir kitas panašias technologijas, kad užtikrintume jos veikimą ir pagerintume naudotojo patirtį. Slapukai yra mažos teksto bylos, kurios saugomos Jūsų įrenginyje, kai lankotės mūsų svetainėje.</p>
        <p><strong>7.4.</strong> Naudodamiesi mūsų svetainėmis, Jūs sutinkate su slapukų naudojimu, nebent Jūs jų išjungėte naršyklės nustatymuose. Galite peržiūrėti ir valdyti slapukų nustatymus savo naršyklėje, tačiau atkreipkite dėmesį, kad tam tikros svetainės funkcijos gali neveikti, jei išjungsite slapukus.</p>
        <p><strong>7.5.</strong> Mes naudojame šių kategorijų slapukus:</p>
        <ul className="list-disc pl-6 text-zinc-400">
          <li><strong>1.</strong> Būtini slapukai: šie slapukai būtini, kad svetainė galėtų veikti, ir negali būti išjungti mūsų sistemose.</li>
          <li><strong>2.</strong> Funkciniai slapukai: šie slapukai leidžia svetainei įsiminti jūsų pasirinkimus (pavyzdžiui, vartotojo vardą, kalbą) ir teikti pagerintą bei asmeninę funkcionalumą.</li>
          <li><strong>3.</strong> Analitiniai slapukai: šie slapukai padeda mums analizuoti, kaip lankytojai naudojasi svetaine, ir surinkti informaciją apie svetainės veikimą. Tai padeda mums tobulinti svetainę ir padaryti ją patogesnę.</li>
          <li><strong>4.</strong> Reklamos slapukai: šie slapukai naudojami reklamos tikslais, kad pateiktų jums tikslines reklamas, remiantis jūsų naršymo įpročiais.</li>
        </ul>

        <h2 className="text-2xl font-bold text-zinc-100 mt-8">8. Baigiamosios nuostatos</h2>
        <p><strong>8.1.</strong> Informuojame, kad mūsų Svetainėje gali būti pateikiamos nuorodos į kitus tinklalapius, įskaitant trečiųjų šalių valdomus tinklalapius, kuriems nėra taikoma ši privatumo politika. Prašome susipažinti ir įvertinti šių tinklalapių privatumo politiką prieš pateikiant bet kokius savo Asmens duomenis. </p>
        <p><strong>8.2.</strong> Esant poreikiui, atsižvelgdami į Asmens duomenų apsaugos priemones, kurias taikome, galime atnaujinti ir pakeisti šią privatumo politiką. Apie Jums taikomus Privatumo politikos pokyčius Jūs būsite informuoti tarp Jūsų ir mūsų įprastomis komunikacijos priemonėmis.</p>

        <h2 className="text-2xl font-bold text-zinc-100 mt-8">9. Kontaktinė informacija</h2>
        <p><strong>9.1.</strong> Jei turite klausimų apie šią privatumo politiką arba kaip tvarkome Jūsų asmens duomenis, prašome susisiekti su mumis:</p>
        <ul className="list-disc pl-6 text-zinc-400">
          <li><strong>9.1.1.</strong> El. paštas: info@brandforge.lt</li>
          <li><strong>9.1.2.</strong> Telefonas: +370 (632) 25 179</li>
        </ul>
        <p><strong>9.2.</strong> Atsakysime į Jūsų užklausas kiek įmanoma greičiau, bet ne vėliau kaip per 1 mėnesį nuo užklausos gavimo dienos.</p>
      </div>
    </div>
  );
}

export default PrivatumoPolitika;