import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/user'); // This navigates to the user.js page
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
          <a href="#" className={`${styles.navItem} ${styles.active}`}>Home</a>
          <a href="#" className={styles.navItem}>About Us</a>
          <a href="#" className={styles.navItem}>Mission Statement</a>
        </nav>
        <button className={styles.loginButton} onClick={handleLoginClick}>
          Login
        </button>
      </header>

      <main className={styles.main}>
        <h2 className={styles.welcomeText}>Welcome <span className={styles.professionals}>Healthcare Professionals</span></h2>
        <div className={styles.icon}><span>🩺</span></div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <Image src="/b.png" alt="Review Patient Data" width={200} height={200} />
            <h3>Review Patient Data on the Go</h3>
          </div>

          <div className={styles.card}>
            <Image src="/a.png" alt="Connecting Multiple Databases" width={200} height={200} />
            <h3>Connecting Multiple Databases</h3>
          </div>

          <div className={styles.card}>
            <Image src="/c.png" alt="Quick and Secure" width={200} height={200} />
            <h3>Quickly and Securely find Patient Information</h3>
          </div>

          <div className={styles.card}>
            <Image src="/d.png" alt="Healthcare for the Future" width={200} height={200} />
            <h3>Healthcare for the Future</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
