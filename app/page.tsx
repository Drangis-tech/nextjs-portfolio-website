import React from 'react';
import styles from './CustomPage.module.css';

const Page = () => {
  // JS function for the toggle (equivalent to inline JS)
  const toggleGoldClass = () => {
    document.body.classList.toggle(styles.gold);
  };

  return (
    <>
      <div className={styles.header}>
        <h2>
          <a
            href="https://codepen.io/RAFA3L"
            target="_blank"
            rel="noopener noreferrer"
          >
            RAFA
          </a>
        </h2>
        <div
          className={styles.midSpot}
          onClick={toggleGoldClass}
        ></div>
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
          <h2>Curiosity</h2>
          <h2>Curiosity</h2>
        </div>
      </div>

      <p className={styles.heroP}>
        The world's best platform,
        <br />
        powered by EclipxOS + React.
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
          Harness. Empower.
          <br />
          Unmatched Versatility.
        </h3>
        <p className={styles.subp}>
          At the core lies our revolutionary framework,
          <br />
          ensuring adaptability across all application architectures.
        </p>
      </div>
    </>
  );
};

export default Page;