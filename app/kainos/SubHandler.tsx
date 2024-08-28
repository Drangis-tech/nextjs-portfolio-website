import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function SubHandler({ pages, design, ecommerce, seo, contentCreation, mobileResponsive, comments, calculatePrice, email }: any) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      pages,
      design_complexity: design === 500 ? 'Paprastas' : design === 1000 ? 'Vidutinis' : 'Sudėtingas',
      ecommerce_functionality: ecommerce ? 'Taip' : 'Ne',
      seo_optimization: seo ? 'Taip' : 'Ne',
      content_creation: contentCreation ? 'Taip' : 'Ne',
      mobile_responsive: mobileResponsive ? 'Taip' : 'Ne',
      additional_comments: comments,
      calculated_price: calculatePrice(),
      email,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Užklausa sėkmingai išsiųsta!');
      }, (error) => {
        console.error('FAILED...', error);
        alert('Nepavyko išsiųsti užklausos.');
      });
  };

  return (
    <button
      onClick={handleSubmit}
      className="w-full py-2 px-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-semibold rounded-md hover:from-orange-500 hover:to-orange-700 active:from-orange-600 active:to-orange-800 focus:outline-none focus:ring focus:ring-orange-400 transition duration-200"
    >
      Siųsti užklausą
    </button>
  );
}