// app/test/page.tsx
import React from 'react';
import styles from './page.module.css'; // Import the CSS module

const TestPage = () => {
  return (
    <div className={styles['background-container']}>
      <div className={styles['gradient-border']}>
        Gradient Border
      </div>
      <div className={`${styles['shape']} ${styles.circle}`} style={{ top: '20%', left: '10%' }}></div> {/* Circle outline */}
      <div className={`${styles['shape']} ${styles.square}`} style={{ top: '40%', left: '50%' }}></div> {/* Square outline */}
      <div className={`${styles['shape']} ${styles.triangle}`} style={{ bottom: '10%', right: '10%' }}></div> {/* Triangle outline */}
    </div>
  );
};

export default TestPage;