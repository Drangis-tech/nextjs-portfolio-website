// app/components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};