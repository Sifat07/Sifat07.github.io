import React from "react";
import styles from "./Experience.module.scss";

import { experienceData } from "../data/portfolio";

const Experience = () => {
  return (
    <div className={styles.container}>
      {experienceData.map((item, index) => (
        <div key={index} className={styles.experienceItem}>
          <div className={styles.company}>
            <h3>{item.company}</h3>
            <p>({item.period})</p>
          </div>
          <h2>{item.role}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
