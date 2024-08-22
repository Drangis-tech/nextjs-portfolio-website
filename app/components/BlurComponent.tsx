import React from 'react';

interface BlurComponentProps {
  isActive: boolean;
}

const BlurComponent: React.FC<BlurComponentProps> = ({ isActive }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800/50 ${isActive ? 'blur-md' : 'hidden'}`}
      style={{ zIndex: -10 }} // Ensure the blur is behind other content
    ></div>
  );
};

export default BlurComponent;