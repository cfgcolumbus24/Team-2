import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('');
        const data = await response.json();

        // Assuming data is an array of patients and mapping image URLs for each patient
        const updatedPatients = data.map((patient, index) => ({
          ...patient,
          avatar: defaultAvatars[index % defaultAvatars.length] // Cycle through the default avatars
        }));

        // first 5 patients
        setPatients(updatedPatients.slice(0, 5));
        
      // setPatients(updatedPatients);
      } catch (error) {
        console.error('Failed to fetch patients:', error);
        setPatients([]);
      }
    };

    fetchPatients();
  }, []);

  // Define a list of default avatars to match patient data with an avatar
  const defaultAvatars = [];

  return (
    <section className={styles.patientList}>
      <h3 className={styles.patientListTitle}>Patients</h3>
      <ul className={styles.patientItems}>
        {patients.map((patient, index) => (
          <li key={index} className={styles.patientItem}>
            <img src={patient.avatar} alt={`${patient.name}'s avatar`} className={styles.patientAvatar} />
            <div className={styles.patientInfo}>
              <h4 className={styles.patientName}>{patient.Name}</h4>
              <time className={styles.lastVisit}>18 March, 2023 | 09:00 PM</time> {/* Replace with actual visit date if available */}
            </div>
            <button className={styles.clinicalRecordBtn}>Clinical Record</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PatientList;
