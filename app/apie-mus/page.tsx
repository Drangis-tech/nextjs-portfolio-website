// About Us Data
const aboutUsData = [
  {
    title: "Mūsų Komanda",
    description: "Susipažinkite su mūsų talentinga ir atsidavusia komanda, kuri deda visas pastangas, kad pasiektų išskirtinių rezultatų.",
    detailedText: "Mūsų komandoje dirba įvairių sričių specialistai, kurie kartu kuria inovatyvius sprendimus ir siekia aukščiausių kokybės standartų. Kiekvienas narys įneša savo unikalų indėlį, prisidėdamas prie mūsų bendrų tikslų įgyvendinimo."
  },
  {
    title: "Mūsų Vizija",
    description: "Siekiame revoliucionuoti pramonę su inovatyviais sprendimais ir neprilygstamu aptarnavimu.",
    detailedText: "Mūsų vizija yra tapti rinkos lyderiais, kurie nuolat plečiasi ir tobulėja. Mes siekiame kurti vertę savo klientams, darbuotojams ir bendruomenei, naudodamiesi pažangiausiomis technologijomis ir metodikomis."
  },
  {
    title: "Mūsų Vertybės",
    description: "Sąžiningumas, Tobulumas ir Bendradarbiavimas yra pagrindinės vertybės, kurios veda mus į sėkmę.",
    detailedText: "Mūsų vertybės yra mūsų veiklos pagrindas. Mes siekiame sąžiningumo visuose santykiuose, tobulumo kiekviename projekte ir bendradarbiavimo visose veiklos srityse. Šios vertybės padeda mums kurti stiprius ir ilgalaikius ryšius su klientais ir partneriais."
  },
];

const ApieMus: React.FC = () => {
  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-28 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-36 lg:pt-48">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
            Apie Mus
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg md:text-xl">
            Sužinokite daugiau apie mūsų komandą, viziją ir vertybes, kurios veda mūsų misiją.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="space-y-12">
          {aboutUsData.map((section, index) => (
            <div key={index} className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start md:space-x-12">
              <Card className="w-full md:w-1/2 flex-shrink-0">
                <article className="relative w-full h-full p-6 group bg-[rgba(28, 28, 30, 0.8)] hover:bg-[rgba(44, 44, 46, 0.8)]">
                  <div className="text-xs text-zinc-100">
                    {/* Display the matching FontAwesome icon with a fixed size */}
                    {section.title === "Mūsų Komanda" && <FontAwesomeIcon icon={faUsers} style={{ fontSize: "2rem" }} />}
                    {section.title === "Mūsų Vizija" && <FontAwesomeIcon icon={faEye} style={{ fontSize: "2rem" }} />}
                    {section.title === "Mūsų Vertybės" && <FontAwesomeIcon icon={faBalanceScale} style={{ fontSize: "2rem" }} />}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl">
                    {section.title}
                  </h3>
                  <p className="mt-2 leading-6 text-zinc-400 group-hover:text-zinc-300 text-base sm:text-lg">
                    {section.description}
                  </p>
                </article>
              </Card>
              <div className="w-full mt-6 md:mt-0 md:w-1/2">
                <p className="mt-2 text-zinc-400 text-base sm:text-lg">
                  {section.detailedText}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl md:text-4xl">
            Komanda
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {teamData.map((member, index) => (
              <Card key={index} className="w-full">
                <article className="relative w-full h-full p-6 group bg-[rgba(28, 28, 30, 0.8)] hover:bg-[rgba(44, 44, 46, 0.8)]">
                  <div className="text-xs text-zinc-100">
                    <span>{member.role}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl">
                    {member.name}
                  </h3>
                  <p className="mt-2 leading-6 text-zinc-400 group-hover:text-zinc-300">
                    <a href={member.linkedIn} className="text-blue-400 hover:text-blue-300">LinkedIn</a> | <a href={member.twitter} className="text-blue-400 hover:text-blue-300">Twitter</a>
                  </p>
                </article>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApieMus;