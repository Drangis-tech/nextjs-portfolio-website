// GradientButton.tsx
import React from 'react';

type GradientButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const GradientButton: React.FC<GradientButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-full py-2 px-4 text-white font-semibold rounded-md bg-transparent border-2 border-transparent transition-all duration-300 ease-in-out hover:border-transparent focus:outline-none focus:ring focus:ring-orange-400"
    >
      <span className="absolute inset-0 rounded-md border-2 border-gradient bg-transparent"></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GradientButton;