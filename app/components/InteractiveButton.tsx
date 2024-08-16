import React from 'react';

// Define the props interface
interface InteractiveButtonProps {
  onClick?: () => void; // Define type for onClick (optional function)
  className?: string;   // Define type for className (optional string)
  children?: React.ReactNode; // Define type for children (optional ReactNode)
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default InteractiveButton;