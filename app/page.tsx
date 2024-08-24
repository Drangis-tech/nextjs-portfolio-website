// app/page.tsx
import React from 'react';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to the Home Page</h1>
        <p>This is the content of the home page.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;