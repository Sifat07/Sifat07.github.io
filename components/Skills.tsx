import React from "react";
import {
  SiCss3,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiStorybook,
  SiTypescript,
} from "react-icons/si";
import styles from "./Skills.module.scss";
import { DiBootstrap, DiResponsive } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { CgFramer } from "react-icons/cg";

const Skills = () => {
  return (
    <div className={styles.skillContainers}>
      <div className={styles.skillContainer1}>
        <div className={styles.skill}>
          <SiCss3 fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <SiHtml5 fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <FaSass fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <DiResponsive fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "70%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <SiStorybook fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "50%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <SiFramer fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>
      <div className={styles.skillContainer2}>
        <div className={styles.skill}>
          <DiBootstrap fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "70%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <SiGit fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "70%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <SiJavascript fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "65%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <SiReact fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "65%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <SiTypescript fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "60%" }}></div>
          </div>
        </div>
        <div className={styles.skill}>
          <SiNextdotjs fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
