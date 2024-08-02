import React from 'react';

const ApieMus: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Apie Mus</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-md hover:bg-opacity-75 transition duration-300 ease-in-out">
          <h2 className="text-xl font-semibold mb-2">Mūsų Komanda</h2>
          <p className="text-gray-700">Aprašymas apie komandą.</p>
        </div>
        <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-md hover:bg-opacity-75 transition duration-300 ease-in-out">
          <h2 className="text-xl font-semibold mb-2">Mūsų Tikslai</h2>
          <p className="text-gray-700">Aprašymas apie tikslus.</p>
        </div>
        <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-md hover:bg-opacity-75 transition duration-300 ease-in-out">
          <h2 className="text-xl font-semibold mb-2">Mūsų Vertybės</h2>
          <p className="text-gray-700">Aprašymas apie vertybes.</p>
        </div>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default ApieMus;