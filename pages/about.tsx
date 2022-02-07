import Link from "next/link";
import router from "next/router";
import React from "react";
import Education from "../components/Education";
import Experience from "../components/Experience";
import { Logo } from "../components/Logo";
import Skills from "../components/Skills";
import Tab from "../components/Tabs/Tab";
import Tabs from "../components/Tabs/Tabs";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <button onClick={() => router.push("/")}>
        <Logo />
      </button>

      <div className={styles.tabContainer}>
        <Tabs>
          <Tab title="Experience">
            <Experience />
          </Tab>
          <Tab title="Education">
            <Education />
          </Tab>
          <Tab title="Skills">
            <Skills />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default About;
