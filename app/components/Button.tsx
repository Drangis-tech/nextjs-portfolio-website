import React from 'react';

// Define the component props if needed
interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {label}
    </button>
  );
};

export default Button;