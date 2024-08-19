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
      className="w-full py-2 px-4 border-2 border-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-semibold rounded-md bg-transparent transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 hover:border-transparent active:from-orange-600 active:to-orange-800 focus:outline-none focus:ring focus:ring-orange-400"
    >
      {children}
    </button>
  );
};

export default GradientButton;