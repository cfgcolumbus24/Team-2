import React from 'react';
import styles from './dashboard.module.css';

const MainContent = () => {
  return (
    <div className={styles.maincontentbox}>
      <div className={styles.dailyRead}>
        <h3 className={styles.sectionTitle}>Daily Read</h3>
        <article className={styles.articlePreview}>
          <img src="" alt="DNA origami vaccine" className={styles.articleImage} />
          <div className={styles.articleContent}>
            <p className={styles.articleSummary}>
              DNA origami vaccine DoriVac paves way for personalised cancer immunotherapy.
            </p>
            <a href="#" className={styles.readMore}>Read more</a>
          </div>
        </article>
      </div>
      <div className={styles.todaysTasks}>
        <h3 className={styles.sectionTitle}>Today's Tasks <span className={styles.taskCount}>12</span></h3>
        <ul className={styles.taskList}>
          {[
            { icon: "", title: "Consultation with George Gill", time: "11:30 AM" },
            { icon: "", title: "Medication Review for Laura Lewis", time: "11:30 AM" },
            { icon: "", title: "Check Mary Clark test results", time: "11:30 AM" }
          ].map((task, index) => (
            <li key={index} className={styles.taskItem}>
              <img src={task.icon} alt="" className={styles.taskIcon} />
              <div className={styles.taskDetails}>
                <h4 className={styles.taskTitle}>{task.title}</h4>
                <span className={styles.taskTime}>{task.time}</span>
              </div>
              <button className={styles.taskAction} aria-label="Task options">
                <img src="" alt="" />
              </button>
            </li>
          ))}
        </ul>
        <a href="#" className={styles.viewAllTasks}>View All</a>
      </div>
      <div className={styles.statistics}>
        {[
          { value: "50", label: "Residential Client Served" },
          { value: "64", label: "Calls Handled" },
          { value: "10", label: "Patients Satisfied" }
        ].map((stat, index) => (

          <div key={index} className={styles.statcard}>
            <section className={styles.mainContent}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
            </section>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default MainContent;