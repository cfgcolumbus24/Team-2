import React from 'react';
import styles from './dashboard.module.css';

const Calendar = () => {
  const appointments = [
    { icon: "", title: "Consultation", patient: "Sam Lewis", time: "09:20 AM - 11:30 AM" },
    { icon: "", title: "Consultation", patient: "Suzie Smith", time: "11:40 AM - 1:30 PM" },
    { icon: "", title: "Joint Consultation for Brian Jones", patient: "with Brain Damage Team", time: "3:00 PM - 4:00 PM" },
    { icon: "", title: "MRI Results", patient: "Carl Friederman", time: "4:30 PM - 5:15 PM" }
  ];

  return (
    <section className={styles.calendar}>
      <header className={styles.calendarHeader}>
        <h3 className={styles.calendarTitle}>October 2024</h3>
        <button className={styles.addReminder}>Add reminder</button>
      </header>
      <div className={styles.calendarDays}>
        {['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div key={index} className={`${styles.calendarDay} ${day === 'Sat' ? styles.active : ''}`}>
            <span className={styles.dayName}>{day}</span>
            <span className={styles.dayNumber}>{index +1}</span>
          </div>
        ))}
      </div>
      <ul className={styles.appointmentList}>
        {appointments.map((appointment, index) => (
          <li key={index} className={styles.appointmentItem}>
            <img src={appointment.icon} alt="" className={styles.appointmentIcon} />
            <div className={styles.appointmentDetails}>
              <h4 className={styles.appointmentTitle}>{appointment.title}</h4>
              <p className={styles.appointmentPatient}>{appointment.patient}</p>
              <time className={styles.appointmentTime}>{appointment.time}</time>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Calendar;