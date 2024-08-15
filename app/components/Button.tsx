// components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string; // Add className prop here
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-lg ${className}`} // Use className here
    >
      {label}
    </button>
  );
};

export default Button;