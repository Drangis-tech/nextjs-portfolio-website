// app/paslaugos/page.tsx

import React from 'react';
import { Navigation } from '../components/nav';
import Icon from '../components/Icon';
import MyInteractiveComponent from '../components/MyInteractiveComponent'; // Import the new component
import { faCode, faPalette, faBullhorn, faChartLine, faLaptopCode, faUserCog } from '@fortawesome/free-solid-svg-icons';

// Define the services array
const services = [
  {
    title: 'Web Development',
    icon: faCode,
    description: [
      'Custom website development',
      'Responsive design',
      'E-commerce solutions',
    ],
  },
  {
    title: 'Graphic Design',
    icon: faPalette,
    description: [
      'Logo design',
      'Brand identity',
      'Marketing materials',
    ],
  },
  {
    title: 'Digital Marketing',
    icon: faBullhorn,
    description: [
      'SEO optimization',
      'Social media management',
      'Content creation',
    ],
  },
  // Add more services as needed
];

// Define the technology stack
const technologies = [
  { name: 'React', category: 'Frontend', color: '#61DAFB' },
  { name: 'Node.js', category: 'Backend', color: '#8CC84B' },
  // Add more technologies as needed
];

const Paslaugos: React.FC = () => {
  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-24 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-32 lg:pt-40">
        {/* Hero Section */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Mūsų Paslaugos
          </h2>
          <p className="mt-4 text-zinc-400">
            Atraskite mūsų įvairias paslaugas, kurios padės jūsų verslui augti ir pasiekti naujas aukštumas.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Service Categories */}
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

        {/* Technology Stack */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Naudojamos Technologijos
          </h2>
          <p className="mt-4 text-zinc-400">
            Mes dirbame su įvairiomis pažangiomis technologijomis, kurios
            užtikrina mūsų projektų kokybę ir efektyvumą.
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Susisiekite su Mumis
          </h2>
          <p className="mt-4 text-zinc-400">
            Norite sužinoti daugiau apie mūsų paslaugas? Susisiekite su mumis
            šiandien ir aptarkime, kaip galime jums padėti.
          </p>
          <MyInteractiveComponent
            label="Susisiekite"
            className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Paslaugos;