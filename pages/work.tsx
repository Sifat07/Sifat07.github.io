import router from "next/router";
import React from "react";
import styles from "./work.module.scss";

const Work = () => {
  return (
    <div className={styles.container}>
      <h1>Work</h1>
      <button onClick={() => router.push("/")}>Home</button>
    </div>
  );
};

export default Work;
