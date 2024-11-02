import React from 'react';
import styles from './dashboard.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfbd4a20ba4144b2fff5a8d60357fa4d47521b2029df5796c4bfb7dabf9dd1eb?placeholderIfAbsent=true&apiKey=48a9e899a224467eb3368bcee0ec70cc" alt="Company logo" className={styles.companyLogo} />
      <div className={styles.userProfile}>
        <img src="" alt="Dr. Jeffery Doe" className={styles.profileImage} />
        <h2 className={styles.userName}>Dr. Jeffery Doe</h2>
        <div className={styles.userInfo}>
          <span>25 years old</span>
          <span className={styles.separator}></span>
          <span className={styles.location}>
            <img src="" alt="" className={styles.locationIcon} />
            New York, USA
          </span>
        </div>
        <div className={styles.userStats}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Blood</span>
            <span className={styles.statValue}>0+</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Height</span>
            <span className={styles.statValue}>176cm</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Weight</span>
            <span className={styles.statValue}>86kg</span>
          </div>
        </div>
      </div>
      <nav className={styles.sidebarNav}>
        <ul className={styles.sidebarNavList}>
          <li className={`${styles.sidebarNavItem} ${styles.active}`}>Summary</li>
          <li className={styles.sidebarNavItem}>Conditions</li>
          <li className={styles.sidebarNavItem}>Notes</li>
        </ul>
      </nav>
      <p className={styles.userSummary}>
        James is a 32-year-old male with no known allergies or drug sensitivities. He has a history of seasonal allergies and occasional migraines. He takes no medications regularly.
      </p>
    </aside>
  );
};

export default Sidebar;