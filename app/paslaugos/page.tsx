// pages/Paslaugos.tsx
import React from 'react';
import TestIcons from '../components/TestIcons'; // Import the test component
import { Navigation } from '../components/nav';

const Paslaugos: React.FC = () => {
  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      {/* Other sections */}
      <TestIcons /> {/* Add this for testing */}
      {/* Other sections */}
    </div>
  );
};

export default Paslaugos;