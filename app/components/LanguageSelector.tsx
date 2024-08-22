import React, { useState, useEffect, useRef } from 'react';

interface LanguageSelectorProps {
  language: string;
  onLanguageChange: (value: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onLanguageChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center cursor-pointer" ref={containerRef}>
      <div
        className="language-icon"
        onClick={toggleDropdown}
        style={{
          backgroundImage: `url('/flags/${language === 'LT' ? 'Lithuania' : 'English'}.svg')`,
          width: '32px',
          height: '32px',
          backgroundSize: 'contain',
        }}
      ></div>
      {dropdownOpen && (
        <ul
          className="absolute top-full left-0 mt-2 bg-gray-700 text-white border border-gray-600 rounded px-2 py-1 list-none min-w-max"
          ref={dropdownRef}
        >
          <li
            onClick={() => {
              onLanguageChange('LT');
              setDropdownOpen(false);
            }}
            className="cursor-pointer py-1 flex items-center"
          >
            <div
              className="language-icon"
              style={{
                backgroundImage: `url('/flags/Lithuania.svg')`,
                width: '32px',
                height: '32px',
                backgroundSize: 'contain',
                display: 'inline-block',
                marginRight: '8px'
              }}
            ></div>
            LT
          </li>
          <li
            onClick={() => {
              onLanguageChange('EN');
              setDropdownOpen(false);
            }}
            className="cursor-pointer py-1 flex items-center"
          >
            <div
              className="language-icon"
              style={{
                backgroundImage: `url('/flags/English.svg')`,
                width: '32px',
                height: '32px',
                backgroundSize: 'contain',
                display: 'inline-block',
                marginRight: '8px'
              }}
            ></div>
            EN
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;