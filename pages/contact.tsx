import router from "next/router";
import React from "react";
import styles from "./contact.module.scss";

const contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contact</h1>
      <button onClick={() => router.push("/")}>Home</button>
    </div>
  );
};

export default contact;
