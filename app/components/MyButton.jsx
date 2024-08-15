// app/components/MyButton.jsx
'use client'; // <-- Add this line

import React from 'react';

function MyButton({ label, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default MyButton;