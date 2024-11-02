import React from 'react';
import Header from './dashboard/header';
import Sidebar from './dashboard/sidebar';
import MainContent from './dashboard/maincontent';
import Calendar from './dashboard/calendar';
import PatientList from './dashboard/patientlist';
import styles from './dashboard/dashboard.module.css';

const Profile = () => {
  return (
    <div 
      style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' // Full viewport height
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h2 className={styles.welcomeMessage}>Profile</h2>
        <Sidebar />
      </div>
    </div>
  );
};

export default Profile;
