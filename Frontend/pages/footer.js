import React from 'react';
import styles from '../styles/footer.module.css';
import Image from 'next/image';
import logo from '../public/footer-logo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Image src={logo} alt="Company Logo" className={styles.footerLogo} />

        <div className={styles.topLinks}>
          <button className={styles.footerButton1}>Find Help</button>
          <button className={styles.footerButton2}>Donate</button>
        </div>
      </div>

      <div className={styles.footerColumns}>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Services</h3>
          <a href="#services" className={styles.footerLink}>Services</a>
          <a href="#careers" className={styles.footerLink}>Careers</a>
          <a href="#about" className={styles.footerLink}>About Us</a>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Crisis Help</h3>
          <a href="#referral" className={styles.footerLink}>How to Make a Referral</a>
          <a href="#crisis-services" className={styles.footerLink}>Crisis Services</a>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Resources</h3>
          <a href="#privacy-statement" className={styles.footerLink}>Netcare Privacy Statement</a>
          <a href="#privacy-practices" className={styles.footerLink}>Notice of Privacy Practices</a>
          <a href="#shelter-info" className={styles.footerLink}>Community Shelter Board Information</a>
          <a href="#formas-espanolas" className={styles.footerLink}>Formas Españolas</a>
          <a href="#faq" className={styles.footerLink}>FAQ</a>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Contact</h3>
          <p className={styles.footerContactInfo}>199 South Central Avenue<br />Columbus, Ohio 43223</p>
          <p className={styles.footerContactInfo}>614-276-CARE (2273)</p>
          <p className={styles.footerContactInfo}>988</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <a href="#link1" className={styles.footerImageLink}>
          <img src="/image1_ADAMH.png" alt="Link 1" className={styles.footerImage} />
        </a>
        <a href="#link2" className={styles.footerImageLink}>
          <img src="/image2_CSB.png" alt="Link 2" className={styles.footerImage} />
        </a>
        <a href="#link3" className={styles.footerImageLink}>
          <img src="/image3_HSC.png" alt="Link 3" className={styles.footerImage} />
        </a>
        <a href="#link4" className={styles.footerImageLink}>
          <img src="/image4_CWC.png" alt="Link 4" className={styles.footerImage} />
        </a>
        <a href="#link5" className={styles.footerImageLink}>
          <img src="/image5_rainbow.png" alt="Link 5" className={styles.footerImage} />
        </a>
      </div>
      <p className={styles.copyright}>© 2024 Netcare Access</p>
    </footer>
  );
}


