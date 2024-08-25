// Import React and necessary libraries
import React from 'react';
import styles from './CustomPage.module.css'; // Importing the CSS module

const Page: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Header section */}
      <header className={styles.header}>
        <h1>Welcome to My Custom Page</h1>
      </header>

      {/* Main content section */}
      <main className={styles.mainContent}>
        <section className={styles.introSection}>
          <h2>Introduction</h2>
          <p>
            This is a demo page using Next.js and CSS modules. The layout is styled using modular and scoped CSS.
          </p>
        </section>

        <section className={styles.contentSection}>
          <h2>Main Content</h2>
          <p>
            Here is the main content of the page. You can add more sections or components here as needed.
          </p>
        </section>

        <section className={styles.buttonSection}>
          <h2>Action Section</h2>
          <button className={styles.primaryButton}>Click Me</button>
        </section>
      </main>

      {/* Footer section */}
      <footer className={styles.footer}>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;