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
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, // Use environment variable
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, // Use environment variable
          formData,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string // Use environment variable
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