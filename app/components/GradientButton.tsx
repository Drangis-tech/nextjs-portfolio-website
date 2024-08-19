// GradientButton.tsx
import React from 'react';

interface GradientButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const GradientButton: React.FC<GradientButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full py-2 px-4
        border-2 border-transparent
        bg-gradient-to-r from-yellow-400 to-orange-500
        text-transparent bg-clip-text
        hover:bg-gradient-to-r hover:from-yellow-300 hover:to-orange-400
        hover:text-white
        active:from-yellow-500 active:to-orange-600
        focus:outline-none focus:ring-2 focus:ring-yellow-300
        transition duration-200
        rounded-md
      "
    >
      {children}
    </button>
  );
};

export default GradientButton;