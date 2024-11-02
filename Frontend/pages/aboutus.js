import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './dashboard/dashboard.module.css';

export default function AboutUs() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/user'); // Navigates to user.js page
  };

  const handleMissionStatementClick = () => {
    router.push('/missionstatement'); // Navigates to missionstatement.js
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <span className={styles.logoNumber}>
            <Image src="/logo.png" alt="2" width={200} height={200} />
          </span>
        </h1>
        <nav className={styles.nav}>
          <a onClick={() => router.push('/')} className={styles.navItem}>
            Home
          </a>
          <a onClick={() => router.push('/aboutus')} className={`${styles.navItem} ${styles.active}`}>
            About Us
          </a>
          <a onClick={handleMissionStatementClick} className={styles.navItem}>
            Mission Statement
          </a>
        </nav>
        <button className={styles.loginButton} onClick={handleLoginClick}>
          Login
        </button>
      </header>

      <main className={styles.main}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
          <h2 className={styles.welcomeMessage}>ABOUT US</h2>
          <img src="/Logo.png" alt="Logo" width={600} height={600} style={{ marginTop: '15px' }} />
          <h>We champion the swift connection of health data for professionals, fostering productivity and growth in healthcare for the good of the future.          </h>
        </div>
      </main>
    </div>
  );
}
