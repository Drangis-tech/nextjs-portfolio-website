import Image from 'next/image';
import styles from './AnimatedIntro.module.css';

export default function AnimatedIntro() {
  return (
    <div className={styles.container}>
      {/* Logo Animation */}
      <div className={styles.logoWrapper}>
        <Image src="/logo.png" alt="WebForge Logo" width={150} height={150} />
      </div>
      
      {/* Text Animation */}
      <h1 className={styles.text}>WebForge</h1>
    </div>
  );
}