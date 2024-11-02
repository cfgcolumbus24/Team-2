import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function AboutUs() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/user'); // Navigates to user.js page
  };

  const handleHomeClick = () => {
    router.push('/'); // Navigates back to home.js (root path)
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
        <a onClick={router.push('/home')} className={styles.navItem}>
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
        <h1>Hello World</h1>
      </main>
    </div>
  );
}
