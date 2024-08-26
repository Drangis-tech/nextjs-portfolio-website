// components/Layout.tsx
import React from 'react';
import { Navigation } from './nav'; // Adjust the path if necessary

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;