import React, { useEffect, useState } from 'react';
import 'vanilla-cookieconsent/dist/cookieconsent.css'; // Import CSS

const CookieConsent = () => {
  const [cookieConsentInitialized, setCookieConsentInitialized] = useState(false);

  useEffect(() => {
    const initialiseCookieConsent = () => {
      if (window.cookieconsent) {
        window.cookieconsent.initialise({
          type: 'opt-in',
          position: 'bottom-right',
          content: {
            header: 'We use cookies!',
            message: 'This website uses cookies to ensure you get the best experience on our website.',
            dismiss: 'Got it!',
            link: 'Learn more',
            href: '/cookie-policy',
          },
          cookie: {
            name: 'cookie-consent',
            path: '/',
            expires: 365,
          },
        });
        setCookieConsentInitialized(true); // Indicate that consent was initialized
      }
    };

    // Check if cookieconsent is available with a delay to ensure script has loaded
    const checkCookieConsent = setInterval(() => {
      if (window.cookieconsent) {
        initialiseCookieConsent();
        clearInterval(checkCookieConsent);
      }
    }, 500); // Check every 500ms

    return () => clearInterval(checkCookieConsent);
  }, []);

  return null; // No visible component output
};

export default CookieConsent;