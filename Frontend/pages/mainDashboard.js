import React from 'react';
import Header from './dashboard/header';
import Sidebar from './dashboard/sidebar';
import MainContent from './dashboard/maincontent';
import Calendar from './dashboard/calendar';
import PatientList from './dashboard/patientlist';
import styles from './dashboard/dashboard.module.css';

const mainDashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', }}>
      <Header />
      <h2 className={styles.welcomeMessage}>Welcome Dr. Doe!</h2>
      <div style={{ display: 'flex', flexGrow: 1, padding: '20px',  }}>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <Calendar />
          <MainContent />
          <PatientList />
        </div>
      </div>
    </div>
  );
};

export default mainDashboard;
