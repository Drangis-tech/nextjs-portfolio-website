// components/BaseLayout.tsx
import React from 'react';
import { Navigation } from './nav'; // Correctly import from /components/nav

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => (
  <div className="relative">
    <Navigation />
    <main className="pt-16">{children}</main> {/* Adjust padding if necessary */}
  </div>
);

export default BaseLayout;