import React from 'react';
import styles from './Dashboard.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>
          <img src="/Logo.png" alt="2" width={180} height={180} style={{ marginTop: '15px' }} />
        </h1>
      </div>
      <nav className={styles.nav}>
        <a href="#" className={`${styles.navItem} ${styles.active}`}>Home</a>
        <a href="#" className={styles.navItem}>Clinical</a>
        <a href="#" className={styles.navItem}>Financial</a>
      </nav>
      <a href="https://media.istockphoto.com/id/1311511363/photo/headshot-portrait-of-smiling-male-doctor-with-tablet.jpg?s=612x612&w=0&k=20&c=w5TecWtlA_ZHRpfGh20II-nq5AvnhpFu6BfOfMHuLMA=" target="_blank" rel="noopener noreferrer">
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
