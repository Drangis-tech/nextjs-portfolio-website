import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface NavigationProps {
  isOpen: boolean;
  onMenuToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onMenuToggle }) => {
  return (
    <nav className="relative">
      <button
        onClick={onMenuToggle}
        className="text-white focus:outline-none"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>
      {isOpen && (
        <div className="absolute top-0 right-0 bg-gray-800 text-white p-4">
          {/* Menu items */}
        </div>
      )}
    </nav>
  );
};

export default Navigation;