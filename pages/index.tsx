import React from "react";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import styles from "./index.module.scss";

const index = () => {
  return (
    <div>
      <div className={styles.section1}>
        <Nav />
        <Intro />
      </div>
    </div>
  );
};

export default index;
