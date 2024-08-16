import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  icon?: IconProp;  // Optional icon prop
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className, icon }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />} {/* Added icon rendering */}
      {label}
    </button>
  );
};

export default Button;