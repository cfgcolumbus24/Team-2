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
      <main className={styles.mainContent}>
        <Sidebar />
        <div className={styles.contentWrapper}>
          <MainContent />
          <div className={styles.bottomSection}>
            <Calendar />
            <PatientList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;