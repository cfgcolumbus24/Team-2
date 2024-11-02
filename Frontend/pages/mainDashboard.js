import React from 'react';
import styles from './dashboard/dashboard.module.css';
import Header from './dashboard/header';
import Sidebar from './dashboard/sidebar';
import MainContent from './dashboard/maincontent';
import Calendar from './dashboard/calendar';
import PatientList from './dashboard/patientlist';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Header />
      <h2 className={styles.welcomeMessage}>Welcome Dr. Doe!</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.sidebarAndMain}>
          <Sidebar />
          <MainContent />
        </div>
        <div className={styles.bottomSection}>
          <Calendar />
          <PatientList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
