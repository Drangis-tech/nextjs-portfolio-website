import React from 'react';
import { Navigation } from '../components/nav';
import Icon from '../components/Icon';
import {
  faCode,
  faPalette,
  faBullhorn,
  faChartLine,
  faLaptopCode,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons';

const services = [
  { title: 'Web Development', description: ['...'], icon: faCode },
  { title: 'Branding', description: ['...'], icon: faPalette },
  { title: 'Ads Management', description: ['...'], icon: faBullhorn },
  { title: 'SEO Optimization', description: ['...'], icon: faChartLine },
  { title: 'Custom Solutions', description: ['...'], icon: faLaptopCode },
  { title: 'IT Consulting', description: ['...'], icon: faUserCog },
];

const technologies = [
  { name: 'React', category: 'Front-end', color: '#61DAFB' },
  { name: 'Vue.js', category: 'Framework', color: '#42b883' },
  { name: 'WordPress', category: 'CMS', color: '#21759B' },
  { name: 'PHP', category: 'Back-end', color: '#777BB4' },
  { name: 'Node.js', category: 'Back-end', color: '#8CC84B' },
  { name: 'AWS', category: 'Cloud', color: '#FF9900' },
  { name: 'Docker', category: 'Data', color: '#2496ED' },
  { name: 'MySQL', category: 'Data', color: '#4479A1' },
];

const Paslaugos: React.FC = () => {
  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-32 lg:pt-40">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Mūsų Paslaugos
          </h2>
          <p className="mt-4 text-zinc-400">
            Atraskite mūsų įvairias paslaugas, kurios padės jūsų verslui augti ir pasiekti naujas aukštumas.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="w-16 h-16 flex items-center justify-center border border-zinc-700 rounded-lg bg-transparent icon-container">
                <Icon icon={service.icon} size="2x" color="white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-100">{service.title}</h3>
                <ul className="mt-2 list-disc list-inside text-zinc-400">
                  {service.description.map((item, i) => (
                    <li key={i} className="mt-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Naudojamos Technologijos
          </h2>
          <p className="mt-4 text-zinc-400">
            Mes dirbame su įvairiomis pažangiomis technologijomis, kurios užtikrina mūsų projektų kokybę ir efektyvumą.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundColor: tech.color }}
              >
                <Icon icon={faCode} size="2x" color="white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-zinc-100">
                  {tech.name}
                </h4>
                <p className="text-zinc-400">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Susisiekite su Mumis
          </h2>
          <p className="mt-4 text-zinc-400">
            Norite sužinoti daugiau apie mūsų paslaugas? Susisiekite su mumis šiandien ir aptarkime, kaip galime jums padėti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Paslaugos;