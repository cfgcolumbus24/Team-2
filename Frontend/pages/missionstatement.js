import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

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
            <Image src="/logo.png" alt="2" width={200} height={200} />
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
        <h1>Hello World MS</h1>
      </main>
    </div>
  );
}
