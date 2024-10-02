import React, { useState, useRef, useEffect } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [height, setHeight] = useState<number>(0); // Changed to number to avoid null assignment
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    if (openFAQ === index) {
      setHeight(0); // Set height to 0 when closing
      setOpenFAQ(null);
    } else {
      setHeight(contentRef.current?.scrollHeight || 0);
      setOpenFAQ(index);
    }
  };

  useEffect(() => {
    if (openFAQ !== null && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [openFAQ]);

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              D.U.K.
            </h2>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Atsakymai į dažniausiai užduodamus klausimus.
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          {/* Accordion Container */}
          <div className="h-[500px] overflow-y-auto divide-y divide-gray-200 dark:divide-neutral-700">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className={`pt-6 pb-3 ${index === 0 ? 'pt-0' : ''}`}>
                <button
                  className={`group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start ${
                    openFAQ === index 
                      ? 'text-transparent bg-gradient-to-r from-[#f7a71b] via-[#f16529] to-[#e44d26] bg-clip-text'
                      : 'text-white'
                  } transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#f7a71b] hover:via-[#f16529] hover:to-[#e44d26] focus:outline-none`}
                  aria-expanded={openFAQ === index}
                  onClick={() => toggleFAQ(index)}
                >
                  {index === 0 && 'Kuo skiriasi šablonas nuo individualaus sprendimo?'}
                  {index === 1 && 'Kaip vyksta svetainės kūrimo procesas?'}
                  {index === 2 && 'Kiek kainuoja svetainės kūrimas?'}
                  {index === 3 && 'Ar teikiate logotipo kūrimo paslaugas?'}
                  {index === 4 && 'Kokias papildomas paslaugas siūlote?'}
                  <svg
                    className={`${
                      openFAQ === index ? 'hidden' : 'block'
                    } shrink-0 size-5 text-gray-600 group-hover:text-white`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className={`${
                      openFAQ === index ? 'block' : 'hidden'
                    } shrink-0 size-5 text-gray-600 group-hover:text-white`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  ref={contentRef}
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out transform ${
                    openFAQ === index ? 'opacity-100 max-h-[200px] translate-y-0' : 'opacity-0 max-h-0 -translate-y-4'
                  }`}
                  style={{ maxHeight: openFAQ === index ? height : 0 }} // No null assignment
                >
                  <p className="text-gray-600 dark:text-neutral-400">
                    {index === 0 &&
                      'Šablonas yra iš anksto sukurtas dizainas, kuris gali būti pritaikytas jūsų turiniui. Individualus sprendimas yra sukurtas būtent jums, atsižvelgiant į jūsų poreikius ir pageidavimus.'}
                    {index === 1 &&
                      'Svetainės kūrimas susideda iš kelių etapų: dizaino, programavimo, testavimo ir paleidimo. Pradžioje aptariame jūsų poreikius ir tikslus, tuomet kuriame dizainą ir jį pritaikome techniniam sprendimui.'}
                    {index === 2 &&
                      'Svetainės kūrimo kaina priklauso nuo dizaino sudėtingumo, funkcionalumo ir individualių poreikių. Mes siūlome pritaikytus sprendimus, todėl kiekvienam projektui kaina apskaičiuojama atskirai.'}
                    {index === 3 &&
                      'Taip, mes teikiame logotipo kūrimo paslaugas. Logotipas yra svarbi prekės ženklo dalis, todėl stengiamės sukurti išskirtinį ir atpažįstamą dizainą, kuris atspindi jūsų verslo esmę.'}
                    {index === 4 &&
                      'Be svetainės kūrimo ir logotipų dizaino, mes siūlome SEO optimizaciją, svetainės priežiūrą ir marketingo kampanijų valdymą.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* End Accordion */}
        </div>
      </div>
      {/* End Grid */}
    </div>
  );
};

export default FAQ;