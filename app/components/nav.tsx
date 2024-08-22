// ../components/nav.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  { name: "Atlikti Darbai", href: "/projects" },
  { name: "Paslaugos", href: "/paslaugos" },
  { name: "Apie Mus", href: "/apie-mus" },
  { name: "Kainos", href: "/kainos" },
  { name: "Kontaktai", href: "/contact" },
];

export const Navigation: React.FC<{ isOpen: boolean; onMenuToggle: () => void }> = ({ isOpen, onMenuToggle }) => {
  const handleMenuToggle = () => {
    onMenuToggle();
  };

  return (
    <nav>
      <button onClick={handleMenuToggle} className="md:hidden">
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
      </button>
      <div className={`fixed inset-0 bg-gray-800/75 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center justify-center h-full space-y-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <a className="text-white text-lg" onClick={() => onMenuToggle()}>
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};