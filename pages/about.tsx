import router from "next/router";
import React from "react";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <button onClick={() => router.push("/")}>Home</button>
    </div>
  );
};

export default About;
