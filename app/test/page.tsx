// app/test/page.tsx
import React from 'react';
import styles from './page.module.css'; // Import the updated CSS module

const TestPage = () => {
  return (
    <div className={styles['background-container']}>
      <div className={styles['shape'] + ' ' + styles.circle}></div> {/* Circle outline */}
      <div className={styles['shape'] + ' ' + styles.square}></div> {/* Square outline */}
      <div className={styles['shape'] + ' ' + styles.triangle}></div> {/* Triangle outline */}
      <h1 className={styles.title}>Test Page</h1>
      <p className={styles.description}>This is a test page with custom background effects.</p>
    </div>
  );
};

export default TestPage;