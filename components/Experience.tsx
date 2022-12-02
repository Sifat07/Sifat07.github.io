import React from "react";
import styles from "./Experience.module.scss";

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.company}>
        <h3>ngaze</h3>
        <p>(2021-Today)</p>
      </div>
      <h2>Junior Software Engineer</h2>
      <p>
        Assisted in building beautiful user interfaces for in-house education
        platform without compromising functionality for aesthetics. Worked in an
        agile environment with daily stand-ups, kept track of user stories/bugs
        in Github project.
      </p>
    </div>
  );
};

export default Experience;
