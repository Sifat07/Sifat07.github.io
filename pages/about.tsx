import Link from "next/link";
import router from "next/router";
import React, { useState } from "react";
import Education from "../components/Education";
import Experience from "../components/Experience";
import { Logo } from "../components/Logo";
import Skills from "../components/Skills";
import styles from "./about.module.scss";
import TabC from "../components/Tab/Tabs";
import Tabs from "../components/Tab/Tabs";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Experience",
    index: 1,
    Component: Experience,
  },
  {
    label: "Education",
    index: 2,
    Component: Education,
  },
  {
    label: "Skills",
    index: 3,
    Component: Skills,
  },
];

const About = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  return (
    <div className={styles.container}>
      <button onClick={() => router.push("/")}>
        <Logo />
      </button>

      {/* <div className={styles.tabContainer}>
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
      </div> */}
      <div className={styles.tabContainer}>
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </div>
    </div>
  );
};

export default About;
