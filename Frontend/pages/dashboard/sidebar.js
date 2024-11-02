import React from 'react';
import styles from './dashboard.module.css';

const Sidebar = () => {
  return (
    <section className={styles.mainContent}> 
    <div className={styles.sidebarbox}>
      <aside 
        className={styles.sidebar} 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%', 
          textAlign: 'center' 
        }}
      >
        <div className={styles.userProfile} style={{ marginBottom: '20px' }}>
          <img 
            src="" 
            alt="Dr. Jeffery Doe" 
            className={styles.profileImage} 
            style={{ borderRadius: '50%', width: '100px', height: '100px', marginBottom: '10px' }}
          />
          <h2 className={styles.userName}>Dr. Jeffery Doe</h2>
          <div className={styles.userInfo} style={{ marginBottom: '10px' }}>
            <span>25 years old</span>
            <span className={styles.separator}></span>
            <span className={styles.location}>
              <img 
                src="" 
                alt="" 
                className={styles.locationIcon} 
                style={{ marginRight: '5px' }} 
              />
              New York, USA
            </span>
          </div>
          <div className={styles.userStats} style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Blood</span>
              <span className={styles.statValue}>o+</span>
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
          <ul className={`${styles.sidebarNavList} ${styles.navList}`} style={{ padding: 0, listStyle: 'none' }}>
            <li className={`${styles.sidebarNavItem} ${styles.active}`} style={{ marginRight: '20px' }}>Summary</li>
            <li className={styles.sidebarNavItem} style={{ marginRight: '20px' }}>Conditions</li>
            <li className={styles.sidebarNavItem}>Notes</li>
          </ul>
        </nav>
        <p className={styles.userSummary} style={{ textAlign: 'center', marginTop: '20px' }}>
        
        Dr. Jeffery Doe is a healthcare professional specializing in psychological health. At 25 years old, he resides in New York, USA, where he employs a compassionate approach to his practice. Dr. Doe’s profile highlights key health statistics, including a blood type of O+, a height of 176 cm, and a weight of 86 kg. He has a history of seasonal allergies and occasional migraines but currently takes no medications regularly. With a focus on mental well-being, Dr. Doe is dedicated to improving patient outcomes and enhancing accessibility to psychological healthcare services.
        </p>
      </aside>
      </div>
      </section>
  );
};

export default Sidebar;
