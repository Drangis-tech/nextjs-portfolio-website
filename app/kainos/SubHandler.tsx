import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

interface SubHandlerProps {
  formData: any; // Replace with actual form data type
}

const SubHandler: React.FC<SubHandlerProps> = ({ formData }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const sendEmail = async () => {
      if (!formData) return;

      setLoading(true);
      setMessage(null); // Reset message before sending

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          formData,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
        );
        setMessage('Užklausa sėkmingai buvo išsiųsta.');
      } catch (error: any) {
        console.error('Failed to send email:', error);
        setMessage(error.message || 'Nepavyko išsiųsti užklausos. Pabandykite dar karta vėliau arba susisiekite per el. paštą - info@brandforge.lt');
      } finally {
        setLoading(false);
      }
    };

    if (formData) {
      sendEmail();
    }
  }, [formData]);

  return (
    <div>
      {loading ? (
        <p>Siunčiama...</p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default SubHandler;