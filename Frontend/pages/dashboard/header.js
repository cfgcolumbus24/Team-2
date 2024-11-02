import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Dashboard.module.css';

const Header = () => {
  const router = useRouter(); // Access the current route

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>
          <img src="/Logo.png" alt="Logo" width={180} height={180} style={{ marginTop: '15px' }} />
        </h1>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={`${styles.navItem} ${router.pathname === '/' ? styles.active : ''}`}>
          Home
        </Link>
        <Link href="/clinical" className={`${styles.navItem} ${router.pathname === '/clinical' ? styles.active : ''}`}>
          Clinical
        </Link>
        <Link href="/financial" className={`${styles.navItem} ${router.pathname === '/financial' ? styles.active : ''}`}>
          Financial
        </Link>
      </nav>
      <a 
        href="https://media.istockphoto.com/id/1311511363/photo/headshot-portrait-of-smiling-male-doctor-with-tablet.jpg?s=612x612&w=0&k=20&c=w5TecWtlA_ZHRpfGh20II-nq5AvnhpFu6BfOfMHuLMA=" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src="https://media.istockphoto.com/id/1311511363/photo/headshot-portrait-of-smiling-male-doctor-with-tablet.jpg?s=612x612&w=0&k=20&c=w5TecWtlA_ZHRpfGh20II-nq5AvnhpFu6BfOfMHuLMA=" 
          className={styles.profileImage} 
          alt="Profile"
        />
      </a>
    </header>
  );
};

export default Header;
