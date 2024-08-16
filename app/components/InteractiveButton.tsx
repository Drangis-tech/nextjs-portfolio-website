// app/components/InteractiveButton.tsx
'use client';

import React from 'react';

const InteractiveButton = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default InteractiveButton;