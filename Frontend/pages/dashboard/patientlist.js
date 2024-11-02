import React from 'react';
import styles from './dashboard.module.css';

const PatientList = () => {
  const patients = [
    { name: "George Hill", avatar: "" },
    { name: "Jane Doe", avatar: "" },
    { name: "Maria Cruz", avatar: "" },
    { name: "John Lewis", avatar: "" },
    { name: "Peter Parker", avatar: "" },
    { name: "Greg Kaufman", avatar: "" },
    { name: "Miles Carter", avatar: "" },
    { name: "Amy Adams", avatar: "" },
    { name: "John Johnson", avatar: "" }
  ];

  return (
    <section className={styles.patientList}>
      <h3 className={styles.patientListTitle}>Patients</h3>
      <ul className={styles.patientItems}>
        {patients.map((patient, index) => (
          <li key={index} className={styles.patientItem}>
            <img src={patient.avatar} alt={`${patient.name}'s avatar`} className={styles.patientAvatar} />
            <div className={styles.patientInfo}>
              <h4 className={styles.patientName}>{patient.name}</h4>
              <time className={styles.lastVisit}>18 March, 2023 | 09:00 PM</time>
            </div>
            <button className={styles.clinicalRecordBtn}>Clinical Record</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PatientList;