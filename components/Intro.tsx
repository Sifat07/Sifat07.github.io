import React from "react";
import Image from "next/image";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.container}>
      <h1>Hey! </h1>
      <h1>I am Sifat.</h1>
      <h1>I&apos;m a front-end dev.</h1>
    </div>
  );
};

export default Intro;
