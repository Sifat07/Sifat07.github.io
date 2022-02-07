import Link from "next/link";
import router from "next/router";
import React from "react";
import { Logo } from "../components/Logo";
import styles from "./work.module.scss";

const Work = () => {
  return (
    <div className={styles.container}>
      <button onClick={() => router.push("/")}>
        <Logo />
      </button>
    </div>
  );
};

export default Work;
