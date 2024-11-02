import React from 'react';
import styles from './dashboard.module.css';
import Header from './header';
import Sidebar from './sidebar';
import MainContent from './maincontent';
import Calendar from './calendar';
import PatientList from './patientlist';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Header />
      <div className={styles.mainContentContainer}>
        <Sidebar />
        <div className={styles.contentWrapper}>
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;