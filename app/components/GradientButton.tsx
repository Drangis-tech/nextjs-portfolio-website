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
        border-2 border-gradient
        bg-transparent text-white
        font-semibold rounded-md
        hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700
        active:bg-gradient-to-r active:from-orange-600 active:to-orange-800
        focus:outline-none focus:ring-2 focus:ring-orange-400
        transition duration-200
        bg-clip-border
      "
    >
      {children}
    </button>
  );
};

export default GradientButton;