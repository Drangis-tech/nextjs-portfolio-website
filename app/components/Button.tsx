// app/components/Button.tsx
import React from 'react';

// Define the component props including className
interface ButtonProps {
  label: string;
  onClick?: () => void;  // onClick is optional
  className?: string;    // className is optional
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}> {/* Apply className here */}
      {label}
    </button>
  );
};

export default Button;