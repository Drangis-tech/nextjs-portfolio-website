// app/test/page.tsx
import React from 'react';
import styles from './page.module.css'; // Import the CSS module

const TestPage = () => {
  return (
    <div className={styles['background-container']}>
      <div className={styles['gradient-border']}>
        Animated <br />CSS<br />Gradient Border
      </div>
      <div className={`${styles['shape']} ${styles.circle}`}></div> {/* Circle outline */}
      <div className={`${styles['shape']} ${styles.square}`}></div> {/* Square outline */}
      <div className={`${styles['shape']} ${styles.triangle}`}></div> {/* Triangle outline */}
    </div>
  );
};

export default TestPage;