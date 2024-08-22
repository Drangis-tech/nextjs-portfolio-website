import React, { useState } from 'react';

interface LanguageSelectorProps {
  language: string;
  onLanguageChange: (value: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onLanguageChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  return (
    <div className="relative flex items-center cursor-pointer">
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
        <ul className="absolute top-full left-0 mt-2 bg-gray-700 text-white border border-gray-600 rounded px-2 py-1 list-none min-w-max">
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