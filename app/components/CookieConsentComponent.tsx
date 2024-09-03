// components/CookieConsentComponent.tsx
import React from 'react';

const CookieConsentComponent = () => {
  return (
    <div className="cookie-consent">
      <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
      <div className="cc-btns">
        <button onClick={() => {/* Handle accept */}}>Accept</button>
        <button onClick={() => {/* Handle decline */}}>Decline</button>
      </div>
    </div>
  );
};

export default CookieConsentComponent;