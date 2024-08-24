"use client";

import React from 'react';
import styles from '../styles/page.module.css'; // Ensure this path is correct

const Page = () => {
  return (
    <div>
      <h1 className={styles.title}>Hello World</h1>
      <p className={styles.subtitle}>This is a test.</p>
    </div>
  );
};

export default Page;