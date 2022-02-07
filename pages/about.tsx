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
import Image from "next/image";
import avatarImage from "../components/assets/images/IMG_1050.png";

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
      <div className={styles.aboutContainer}>
        <div className={styles.aboutText}>
          <h1>
            <p>{"<p>"}</p>
            <br></br>
            Hi, I{"'"}m Sifat Jasim, working as a Junior Software Engineer for
            ngaze in Dhaka.I have serious passion for minimalistic designs, UI
            effects, animations and creating intuitive, dynamic user
            experiences.
            <br></br>
            <br></br>
            Problem solver, quick learner with high attention to detail. Fan of
            football , a Madridista. When I{"'"}m not working I listen to music
            and watch TV series and movies. <br></br>
            <br></br>
            Interested in the entire frontend spectrum and working on ambitious
            projects with positive people.
            <br></br>
            <br></br>
            <p>{"</p>"}</p>
          </h1>
        </div>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}>
            <Image
              className={styles.avatarImage}
              alt="Sifat Jasim"
              src={avatarImage}
              layout="responsive"
              quality={100}
              placeholder="blur"
            ></Image>
          </div>
        </div>
      </div>

      <div className={styles.tabContainer}>
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </div>
    </div>
  );
};

export default About;
