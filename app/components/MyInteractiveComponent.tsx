// components/MyInteractiveComponent.tsx

'use client';

import React from 'react';

interface MyInteractiveComponentProps {
  label: string;
  onClick: () => void; // onClick is required
  className?: string; // className is optional
}

const MyInteractiveComponent: React.FC<MyInteractiveComponentProps> = ({ label, onClick, className }) => {
  const handleClick = () => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      (window as any).typeform.open({
        url: 'https://yq77d7pl1b3.typeform.com/to/mCUWpQQh', // Replace with your Typeform URL
      });
    };

    script.onload = () => {
      document.body.removeChild(script);
    };

    onClick(); // Call the onClick prop
  };

  return (
    <button onClick={handleClick} className={className}>
      {label}
    </button>
  );
};

export default MyInteractiveComponent;