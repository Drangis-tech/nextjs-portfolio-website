// app/test/page.tsx
import React from 'react';
import styles from './page.module.css'; // Import the CSS module

const TestPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles['background-container']}>
        <div className={styles['white-dots']}></div>
        <div className={styles['gradient-figures']}>
          <div className={styles.circle}></div> {/* Circle outline */}
          <div className={styles.square}></div> {/* Square outline */}
          <div className={styles.triangle}></div> {/* Triangle outline */}
        </div>
      </div>
      <h1 className={styles.title}>Test Page</h1>
      <p className={styles.description}>This is a test page with custom background effects.</p>
    </div>
  );
};

export default TestPage;