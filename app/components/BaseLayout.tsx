// components/BaseLayout.tsx
import React from 'react';
import { Navigation } from './nav'; // Correct path to Navigation component

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => (
  <div className="relative">
    <Navigation />
    <main className="pt-16">{children}</main>
  </div>
);

export default BaseLayout;