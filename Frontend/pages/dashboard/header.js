import React from 'react';
import styles from './Dashboard.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Net Connect</h1>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.active}`}>Home</li>
          <li className={styles.navItem}>Clinical</li>
          <li className={styles.navItem}>Financial</li>
          <li className={styles.navItem}>Profile</li>
        </ul>
      </nav>
      <div className={styles.userActions}>
        <button className={styles.iconButton} aria-label="Search">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e2809ca0fb07e124eefc9c1f814fd4cea46fe03b936b1689c4daa8176213fb6?placeholderIfAbsent=true&apiKey=48a9e899a224467eb3368bcee0ec70cc" alt="" className={styles.icon} />
        </button>
        <button className={styles.iconButton} aria-label="Notifications">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5897d2569c4fccc7de11f286a16f9f1ac2a2d6213d85efa78c0d1356a45ba4f?placeholderIfAbsent=true&apiKey=48a9e899a224467eb3368bcee0ec70cc" alt="" className={styles.icon} />
        </button>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a6e81d99466deb2a241bb2b59e19f7799389df00037a12de0ed42aa6c7a8dae?placeholderIfAbsent=true&apiKey=48a9e899a224467eb3368bcee0ec70cc" alt="User avatar" className={styles.userAvatar} />
      </div>
    </header>
  );
};

export default Header;