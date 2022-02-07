import React from "react";
import styles from "./Education.module.scss";

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.institute}>
          <h3>University Of Dhaka</h3>
          <p>( 2019-2021 )</p>
        </div>
        <h2>Master in Information Technology</h2>
        <p>
          completed Master in Information Technology from University of Dhaka.
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.institute}>
          <h3>American International University-Bangladesh</h3>
          <p>( 2013-2018 )</p>
        </div>
        <h2>Bachelor of Science in Computer Science {"&"} Engineering</h2>
        <p>
          completed Bachelor of Science in Computer Science {"&"} Engineering
          from American International University-Bangladesh.
        </p>
      </div>
    </div>
  );
};

export default Education;
