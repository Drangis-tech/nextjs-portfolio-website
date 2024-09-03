import React, { useEffect } from 'react';
import Head from 'next/head'; // Ensure this is imported

export default function Home() {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    const preventDefault = (e: Event) => e.preventDefault();
    document.body.addEventListener('touchmove', preventDefault, { passive: false });

    const script = document.createElement("script");
    script.src = "/canvasAnimation.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.classList.remove('no-scroll');
      document.body.removeEventListener('touchmove', preventDefault);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Home | brandforge.lt</title> {/* Set the title for the page */}
      </Head>
      <div>
        {/* Your content here */}
      </div>
    </>
  );
}