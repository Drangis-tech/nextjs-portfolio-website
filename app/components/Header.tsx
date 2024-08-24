import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const handleToggleGold = () => {
    document.body.classList.toggle('gold');
  };

  return (
    <div className={styles.header}>
      <h2>
        <a href="https://codepen.io/RAFA3L" target="_blank" rel="noopener noreferrer">RAFA</a>
      </h2>
      <div className={styles.midSpot} onClick={handleToggleGold}></div>
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
  );
};

export default Header;