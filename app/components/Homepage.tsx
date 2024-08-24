import React, { useEffect } from 'react';
import styles from './Homepage.module.css'; // Update the path to match the new CSS file name

const Homepage: React.FC = () => {
  useEffect(() => {
    // JavaScript for animation from CodePen
    const items = document.querySelectorAll(`.${styles.item}`);
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    
    const animateItems = async () => {
      for (const item of items) {
        item.classList.add(styles.in);
        await delay(100); // Delay between each item's animation
      }
    };

    animateItems();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.item}>Paslaugos</div>
      <div className={styles.item}>Kontaktai</div>
      <div className={styles.item}>Kainos</div>
      <div className={styles.item}>Apie Mus</div>
      <div className={styles.item}>Atlikti Darbai</div>
    </div>
  );
};

export default Homepage;