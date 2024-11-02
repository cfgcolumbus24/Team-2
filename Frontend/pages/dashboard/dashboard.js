import React from 'react';
import styles from './dashboard.module.css';
import Header from './header';
import Sidebar from './sidebar';
import MainContent from './maincontent';
import Calendar from './calendar';
import PatientList from './patientlist';

const dashboard = () => {
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