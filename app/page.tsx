"use client";

import React, { useEffect } from 'react';
import styles from './page.module.css'; // Assuming CSS is imported as a module

const ParticleCanvas = () => {
  useEffect(() => {
    // Initialize the particle canvas if needed
    const canvas = document.getElementById('particleCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    // Your particle animation code here
  }, []);

  return <canvas id="particleCanvas" className={styles.particleCanvas} />;
};

const Page = () => {
  return (
    <div>
      <div className={styles.header}>
        <h2>
          <a href="https://codepen.io/RAFA3L" target="_blank" rel="noopener noreferrer">RAFA</a>
        </h2>
        <div className={styles.midSpot} onClick={() => document.body.classList.toggle('gold')}></div>
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
      
      <ParticleCanvas />

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
        <h3 className={styles.title}>Harness. Empower.<br />Unmatched Versatility.</h3>
        <p className={styles.subp}>At the core lies our revolutionary framework, <br />ensuring adaptability across all application architectures.</p>
      </div>
    </div>
  );
};

export default Page;