import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './dashboard/dashboard.module.css';

export default function MissionStatement() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/home'); // Navigates to home.js
  };

  const handleAboutUsClick = () => {
    router.push('/aboutus'); // Navigates to aboutus.js
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <span className={styles.logoNumber}>
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </span>
        </h1>
        <nav className={styles.nav}>
          <a onClick={handleHomeClick} className={styles.navItem}>
            Home
          </a>
          <a onClick={handleAboutUsClick} className={styles.navItem}>
            About Us
          </a>
          <a onClick={() => router.push('/missionstatement')} className={`${styles.navItem} ${styles.active}`}>
            Mission Statement
          </a>
        </nav>
        <button className={styles.loginButton} onClick={() => router.push('/user')}>
          Login
        </button>
      </header>

      <main className={styles.main}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
          <h2 className={styles.welcomeMessage}>OUR MISSION</h2>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_-BNDsOwYtg6dYC-pBoR98nx4sQOlBBvxQ&s" 
            alt="Mission Logo" 
            width={500} 
            height={500} 
            className={styles.logoImage} 
          />
          <p className={styles.missionText}>
          <br /> We champion the swift connection of health data for professionals,<br />
            fostering productivity and growth in healthcare for a brighter future.
          </p>

          <div className={styles.missionHighlights}>
            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}><br />Innovation</h3>
              <p> <br />Empowering healthcare through cutting-edge technology.</p>
            </div>
            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}><br />Collaboration</h3>
              <p> <br />Building a connected future in healthcare for all.</p>
            </div>
            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}><br />Growth</h3>
              <p> <br />Supporting professionals in their journey toward excellence.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
