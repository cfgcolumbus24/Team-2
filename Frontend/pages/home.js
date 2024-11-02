import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  // Only redirect if user is explicitly null (not undefined or any other value)
  useEffect(() => {
    if (user === null) {
      router.push('/login');
    }
  }, [user, router]);

  console.log('User object:', user);

  // Avoid rendering if user is null since we're redirecting
  if (user === null) return null;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <span className={styles.logoNumber}>
            <Image src="/logo.png" alt="Logo" width={200} height={200} />
          </span>
        </h1>
        <nav className={styles.nav}>
          <a href="#" className={`${styles.navItem} ${styles.active}`}>Home</a>
          <a href="#" className={styles.navItem}>About Us</a>
          <a href="#" className={styles.navItem}>Mission Statement</a>
        </nav>

        {user ? (
          <p className={styles.userName}>Welcome, {user.name}!</p>
        ) : (
          <Link href="/login">
            <button className={styles.loginButton}>Login</button>
          </Link>
        )}
      </header>

      <main className={styles.main}>
        {user ? (
          <h2 className={styles.welcomeText}>
            Welcome, <span className={styles.professionals}>{user.name}</span>!
          </h2>
        ) : (
          <h2 className={styles.welcomeText}>
            Welcome <span className={styles.professionals}>Healthcare Professionals</span>
          </h2>
        )}
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
            <h3>Quickly and Securely Find Patient Information</h3>
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