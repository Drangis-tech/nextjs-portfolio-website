// /app/kainos/SubHandler.tsx

import { useState } from 'react';
import emailjs from 'emailjs-com';

const SubHandler: React.FC<{ formData: any }> = ({ formData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const sendEmail = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      console.log('Email sent successfully:', result);
      setSuccess(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send the email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Trigger sendEmail function when component mounts or formData changes
  useEffect(() => {
    if (formData) {
      sendEmail();
    }
  }, [formData]);

  return (
    <div>
      {loading && <p>Sending your request...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p>Email sent successfully!</p>}
    </div>
  );
};

export default SubHandler;