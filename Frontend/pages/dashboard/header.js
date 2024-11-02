import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Dashboard.module.css';

const Header = () => {
  const router = useRouter(); // Access the current route
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>
          <img src="/Logo.png" alt="Logo" width={180} height={180} style={{ marginTop: '15px' }} />
        </h1>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={`${styles.navItem} ${router.pathname === '/' ? styles.active : ''}`}>
          Home
        </Link>
        <Link href="/clinical" className={`${styles.navItem} ${router.pathname === '/clinical' ? styles.active : ''}`}>
          Clinical
        </Link>
        <Link href="/financial" className={`${styles.navItem} ${router.pathname === '/financial' ? styles.active : ''}`}>
          Financial
        </Link>
        <Link href="/predictions" className={`${styles.navItem} ${router.pathname === '/predictions' ? styles.active : ''}`}>
        Predictions
        </Link>
      </nav>
      <div className={styles.profileContainer}>
        <img 
          src="https://media.istockphoto.com/id/1311511363/photo/headshot-portrait-of-smiling-male-doctor-with-tablet.jpg?s=612x612&w=0&k=20&c=w5TecWtlA_ZHRpfGh20II-nq5AvnhpFu6BfOfMHuLMA=" 
          className={styles.profileImage} 
          alt="Profile"
          onClick={toggleDropdown} // Toggle dropdown on click
        />
        {dropdownOpen && (
          <div className={styles.dropdown}>
            <p><strong>Name:</strong> Dr. John Doe</p>
            <p><strong>Role:</strong> Clinician</p>
            <p><strong>Email:</strong> johndoe@example.com</p>
            <Link href="/profile" className={styles.dropdownLink}>
              View Profile
            </Link>
            <button onClick={() => alert('Logging out...')} className={styles.logoutButton}>
              Log Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
