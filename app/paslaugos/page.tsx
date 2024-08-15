// File: pages/paslaugos.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faBullhorn, faChartLine } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Navigation } from '../components/nav';

const services = [
  {
    title: 'Web Development',
    description: 'Mes kuriame modernias ir patogias svetaines, naudojant naujausias technologijas.',
    icon: faCode,
  },
  {
    title: 'Branding',
    description: 'Padedame sukurti unikalų ir atpažįstamą jūsų prekės ženklo identitetą.',
    icon: faPalette,
  },
  {
    title: 'Ads Management',
    description: 'Efektyviai reklamuokite savo verslą naudojant Google ir Facebook platformas.',
    icon: faBullhorn,
  },
  {
    title: 'SEO Optimization',
    description: 'Optimizuojame jūsų svetainę, kad ji būtų lengviau randama paieškos sistemose.',
    icon: faChartLine,
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
            Atraskite mūsų teikiamas paslaugas, kurios padės jūsų verslui augti.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="flex">
              <div className="w-16 h-16 p-4 text-white bg-zinc-800 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={service.icon} size="2x" />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-zinc-100">{service.title}</h3>
                <p className="mt-2 text-zinc-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paslaugos;