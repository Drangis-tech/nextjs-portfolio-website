// /app/kainos/SubHandler.tsx

import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

interface SubHandlerProps {
  formData: any; // Replace with actual form data type
}

const SubHandler: React.FC<SubHandlerProps> = ({ formData }) => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const sendEmail = async () => {
      try {
        await emailjs.send(
          'service_irgk5fa', // Replace with your actual service ID
          'template_j8cxtj4', // Replace with your actual template ID
          formData,
          'qKc1YJZcUUKBK3uX3' // Replace with your actual user ID
        );
        setMessage('Email sent successfully!');
      } catch (error) {
        console.error('Failed to send email:', error);
        setMessage('Failed to send email. Please try again later.');
      }
    };

    if (formData) {
      sendEmail();
    }
  }, [formData]);

  return <div>{message}</div>;
};

export default SubHandler;