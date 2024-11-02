import React from 'react';
import styles from '../styles/footer.module.css';
import Image from 'next/image';
import logo from '../public/footer-logo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Image src={logo} alt="Company Logo" className={styles.footerLogo} />

        <div className={styles.topButtons}>
          <button className={styles.footerButton1}>Find Help</button>
          <button className={styles.footerButton2}>Donate</button>
        </div>
      </div>

      <div className={styles.mainLinks}>
        <a href="https://www.netcareaccess.org/services/" target="_blank" className={styles.mainLink}>Services</a>
        <a href="https://www.netcareaccess.org/careers/" target="_blank" className={styles.mainLink}>Careers</a>
        <a href="https://www.netcareaccess.org/about/" target="_blank" className={styles.mainLink}>About Us</a>
      </div>

      <div className={styles.footerColumns}>
        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Crisis Help</h3>
          <a href="https://www.netcareaccess.org/?page_id=971" target="_blank" className={styles.footerLink}>How to Make a Referral</a>
          <a href="https://www.netcareaccess.org/services/crisis-services/" target="_blank" className={styles.footerLink}>Crisis Services</a>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Resources</h3>
          <a href="https://www.netcareaccess.org/footer/resources/netcare-privacy-statement/" target="_blank" className={styles.footerLink}>Netcare Privacy Statement</a>
          <a href="https://www.netcareaccess.org/wp-content/uploads/2020/10/NOPP.pdf" target="_blank" className={styles.footerLink}>Notice of Privacy Practices</a>
          <a href="https://www.netcareaccess.org/footer/resources/community-shelter-board-information/" target="_blank" className={styles.footerLink}>Community Shelter Board Information</a>
          <a href="https://www.netcareaccess.org/footer/resources/formasespanolas/" target="_blank" className={styles.footerLink}>Formas Españolas</a>
          <a href="https://www.netcareaccess.org/footer/resources/faq/" target="_blank" className={styles.footerLink}>FAQ</a>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Contact</h3>
          <p className={styles.contactInfo}>199 South Central Avenue<br />Columbus, Ohio 43223</p>
          <p className={styles.contactInfo}>614-276-CARE (2273)</p>
          <p className={styles.contactInfo}>988</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>© 2024 Netcare Access</p>
        <div className={styles.footerImages}>
          <a href="https://adamhfranklin.org/" target="_blank" className={styles.footerImageLink}>
            <img src="/image1_ADAMH.png" alt="Link 1" className={styles.footerImage} />
          </a>
          <a href="https://www.csb.org/" target="_blank" className={styles.footerImageLink}>
            <img src="/image2_CSB.png" alt="Link 2" className={styles.footerImage} />
          </a>
          <a href="https://humanservicechamber.org/" target="_blank" className={styles.footerImageLink}>
            <img src="/image3_HSC.png" alt="Link 3" className={styles.footerImage} />
          </a>
          <a href="https://www.netcareaccess.org/#" target="_blank" className={styles.footerImageLink}>
            <img src="/image4_CWC.png" alt="Link 4" className={styles.footerImage} />
          </a>
          <a href="https://www.netcareaccess.org/#" target="_blank" className={styles.footerImageLink}>
            <img src="/image5_rainbow.png" alt="Link 5" className={styles.footerImage} />
          </a>
        </div>
      </div>
    </footer>
  );
}








