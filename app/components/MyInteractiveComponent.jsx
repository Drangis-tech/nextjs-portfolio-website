// components/MyInteractiveComponent.jsx

'use client';

import React from 'react';

const MyInteractiveComponent = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default MyInteractiveComponent;