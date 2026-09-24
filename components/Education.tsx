import React from "react";
import styles from "./Education.module.scss";

import { educationData } from "../data/portfolio";

const Education = () => {
  return (
    <div className={styles.container}>
      {educationData.map((item, index) => (
        <div key={index} className={styles.cards}>
          <div className={styles.institute}>
            <h3>{item.institute}</h3>
            <p>( {item.period} )</p>
          </div>
          <h2>{item.degree}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
