// app/test/page.tsx
import React from 'react';
import styles from './page.module.css'; // Import the CSS module

const TestPage = () => {
  return (
    <div className={styles['background-container']}>
      {/* Circle */}
      <div 
        className={`${styles['shape']} ${styles['circle']}`} 
      ></div>
      
      {/* Square */}
      <div 
        className={`${styles['shape']} ${styles['square']}`} 
      ></div>
      
      {/* Triangle */}
      <div 
        className={`${styles['shape']} ${styles['triangle']}`} 
      ></div>
    </div>
  );
};

export default TestPage;