// components/BaseLayout.tsx
import { Navigation } from './Navigation';
import React from 'react';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => (
  <div className="relative">
    <Navigation />
    <main className="pt-16">{children}</main> {/* Adjust pt-16 based on the header height */}
  </div>
);

export default BaseLayout;