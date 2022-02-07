import React from "react";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.skill}>
        <h4>GIT</h4>
        <div className={styles.progressBarContainer}>
          <div className={styles.progress} style={{ width: "70%" }}></div>
        </div>
      </div>
      <div className={styles.skill}>
        <h4>CSS3</h4>
        <div className={styles.progressBarContainer}>
          <div className={styles.progress} style={{ width: "90%" }}></div>
        </div>
      </div>
      <div className={styles.skill}>
        <h4>HTML5</h4>
        <div className={styles.progressBarContainer}>
          <div className={styles.progress} style={{ width: "90%" }}></div>
        </div>
      </div>
      <div className={styles.skill}>
        <h4>REACTJS</h4>
        <div className={styles.progressBarContainer}>
          <div className={styles.progress} style={{ width: "65%" }}></div>
        </div>
      </div>
      <div className={styles.skill}>
        <h4>TYPESCRIPT</h4>
        <div className={styles.progressBarContainer}>
          <div className={styles.progress} style={{ width: "60%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
