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
        border-2 border-gradient-to-r from-yellow-400 to-orange-500
        bg-transparent text-transparent
        hover:bg-gradient-to-r hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 hover:text-white
        active:bg-gradient-to-r active:from-orange-500 active:via-orange-600 active:to-orange-700
        focus:outline-none focus:ring-2 focus:ring-orange-400
        transition duration-200
        rounded-md
        border-2 border-transparent
        bg-clip-border
      "
    >
      {children}
    </button>
  );
};

export default GradientButton;