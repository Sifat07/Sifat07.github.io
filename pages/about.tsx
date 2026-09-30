import React, { useState } from "react";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import styles from "./about.module.scss";
import Tabs from "../components/Tab/Tabs";
import Image from "next/image";
import avatarImage from "../components/assets/images/IMG_1050.png";
import GitHubActivity from "../components/GitHubActivity";
import Layout from "../components/Layout";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC;
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
  {
    label: "GitHub",
    index: 4,
    Component: GitHubActivity,
  },
];

const About = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  return (
    <Layout title="About" description="About Sifat Jasim: software engineer with 5 years in SaaS and EdTech, now co-founder and QA engineer at a stealth commerce startup.">
      <div className={styles.container}>
        <div className={styles.aboutContainer}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>
              <Image
                className={styles.avatarImage}
                alt="Sifat Jasim"
                src={avatarImage}
                fill
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 500px"
                priority
                style={{ objectFit: 'cover' }}
                quality={100}
                placeholder="blur"
              />
            </div>
          </div>

          <div className={styles.aboutText}>
            <span className={styles.codeTag}>{"<h1>"}</span>
            <h1>
              Hi, I&apos;m <span>Sifat Jasim</span>
            </h1>
                        <span className={styles.codeTag}>{"</h1>"}</span>
            <div className={styles.bioContent}>
              <span className={styles.codeTag}>{"<p>"}</span>
              <p>
                I&apos;m a software engineer based in Dhaka. After five years at
                <strong> ngaze</strong> building SaaS and EdTech products, I&apos;m now co-founder
                and QA engineer at a stealth commerce startup, hardening a platform written by
                fleets of AI coding agents.
              </p>
              <p>
                I&apos;m a dedicated problem solver and quick learner with high attention 
                to detail. When I&apos;m not writing code, you can find me supporting 
                Real Madrid or exploring the latest in cinematography.
              </p>
              <p>
                I work across the whole stack, from polished interfaces to backend systems,
                and love collaborating on ambitious projects with forward-thinking people.
              </p>
              <span className={styles.codeTag}>{"</p>"}</span>
            </div>

          </div>
        </div>

        <div className={styles.tabSection}>
          <h2 className={styles.sectionTitle}>Details</h2>
          <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
        </div>
      </div>
    </Layout>
  );
};

export default About;
