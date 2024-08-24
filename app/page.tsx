"use client";

// pages/page.tsx
import React from 'react';
import styles from '../styles/page.module.css'; // Import the CSS module here

const App: React.FC = () => {
  // Function to handle the 'gold' class toggle
  const toggleGoldMode = () => {
    document.body.classList.toggle('gold');
  };

  return (
    <div>
      <div className={styles.header}>
        <h2>
          <a href="https://codepen.io/RAFA3L" target="_blank" rel="noopener noreferrer">
            RAFA
          </a>
        </h2>
        <div className={styles.midSpot} onClick={toggleGoldMode}></div>
        <button className={styles.contactBtn}>
          <span className={styles.glow}></span>
          <span className={styles.contactBtnContent}>Contact Us</span>
        </button>
        <div className={styles.spotlight}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <canvas id="particleCanvas"></canvas>

      <div className={styles.accentLines}>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className={styles.heroSubP}>
        <p>Introducing</p>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroT}>
          <h2>BrandForge</h2>
          <h2>Brandforge</h2>
        </div>
      </div>

      <p className={styles.heroP}>
        Mes padedame verslams augti <br />
        naudojant inovatyvius IT sprendimus.
      </p>

      <div className={styles.mountains}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={styles.heroSpacer}></div>

      <div className={styles.contentSection}>
        <div className={styles.contentAcc}>
          <div></div>
          <div></div>
        </div>
        <p className={styles.subt}>Revolutionary by design</p>
        <h3 className={styles.title}>
          Harness. Empower.<br />
          Unmatched Versatility.
        </h3>
        <p className={styles.subp}>
          At the core lies our revolutionary framework, <br />
          ensuring adaptability across all application architectures.
        </p>
      </div>
    </div>
  );
};

export default App;