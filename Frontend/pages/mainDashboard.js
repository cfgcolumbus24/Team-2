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
        {/* Add space before the Sidebar */}
        <div style={{ marginBottom: '20px' }}></div>
        <Sidebar />
        
        {/* Add space between Sidebar and MainContent */}
        <div style={{ marginBottom: '20px' }}></div>
        <MainContent />
        
        <div className={styles.bottomSection}>
          {/* Add space before the Calendar */}
          <div style={{ marginBottom: '20px' }}></div>
          <Calendar />
          
          {/* Add space between Calendar and PatientList */}
          <div style={{ marginBottom: '20px' }}></div>
          <PatientList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
