// components/MyInteractiveComponent.tsx

import { useEffect } from 'react';

const MyInteractiveComponent: React.FC = () => {
  useEffect(() => {
    // Dynamically load Typeform script
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      data-tf-live="01J5B1P15D8B95QYH2RCVG9G7F"
      style={{ width: '100%', height: '500px' }} // Adjust the height as needed
    ></div>
  );
};

export default MyInteractiveComponent;