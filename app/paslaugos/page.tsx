import React from 'react';
import Icon from '../components/Icon';
import { faCode, faPalette, faBullhorn, faChartLine, faLaptopCode, faUserCog } from '@fortawesome/free-solid-svg-icons';

const services = [
  { title: 'Web Development', description: ['Modernios ir patogios svetainės kūrimas', 'Naudojame naujausias technologijas', 'React, Vue.js, WordPress ir kt.'], icon: faCode },
  { title: 'Branding', description: ['Unikalus prekės ženklo identitetas', 'Kūrybiniai sprendimai ir dizainas', 'Logotipai, vizitinės kortelės ir kt.'], icon: faPalette },
  { title: 'Ads Management', description: ['Reklama Google ir Facebook platformose', 'Efektyvi kampanijų valdymo strategija', 'Tikslinė auditorija ir analitika'], icon: faBullhorn },
  { title: 'SEO Optimization', description: ['Svetainės optimizavimas paieškos sistemoms', 'Padidinkite matomumą ir lankomumą', 'On-page ir off-page SEO'], icon: faChartLine },
  { title: 'Custom Solutions', description: ['Individualūs programavimo sprendimai', 'API integracijos, sistema pritaikyta pagal poreikius', 'Konsultacijos ir techninė pagalba'], icon: faLaptopCode },
  { title: 'IT Consulting', description: ['Konsultacijos IT ir technologijų klausimais', 'Strategijų kūrimas ir optimizavimas', 'Sistemos analizė ir rekomendacijos'], icon: faUserCog },
];

const Paslaugos: React.FC = () => (
  <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
    <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-32 lg:pt-40">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Mūsų Paslaugos</h2>
        <p className="mt-4 text-zinc-400">Atraskite mūsų įvairias paslaugas, kurios padės jūsų verslui augti ir pasiekti naujas aukštumas.</p>
      </div>
      <div className="w-full h-px bg-zinc-800" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex items-start space-x-6">
            <div className="w-16 h-16 flex items-center justify-center border border-zinc-700 rounded-lg bg-transparent">
              <Icon icon={service.icon} size="2x" color="white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-100">{service.title}</h3>
              <ul className="mt-2 list-disc list-inside text-zinc-400">
                {service.description.map((item, i) => (
                  <li key={i} className="mt-1">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-px bg-zinc-800" />
    </div>
  </div>
);

export default Paslaugos;