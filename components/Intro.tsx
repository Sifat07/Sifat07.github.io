import React from "react";
import Image from "next/image";
import styles from "./Intro.module.scss";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const Intro = () => {
  const [aboutText, setAboutText] = React.useState("Hey");
  const [workText, setWorkText] = React.useState("I am");
  const [skillText, setSkillText] = React.useState("Sifat");
  const [contactText, setContactText] = React.useState("A Front-End Dev");

  const showAboutText = () => {
    setAboutText("About");
  };

  const hideAboutText = () => {
    setAboutText("Hey!");
  };

  const showWorkText = () => {
    setWorkText("Work");
  };

  const hideWorkText = () => {
    setWorkText("I am");
  };
  const showSkillText = () => {
    setSkillText("Skills");
  };

  const hideSkillText = () => {
    setSkillText("Sifat");
  };
  const showContactText = () => {
    setContactText("Contact");
  };

  const hideContactText = () => {
    setContactText("A Front-End Dev");
  };

  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <Link href={aboutText == "About" ? "/about" : ""} passHref>
          <motion.h1
            whileHover={{ translateX: 20 }}
            onHoverStart={(e) => showAboutText()}
            onHoverEnd={(e) => hideAboutText()}
            style={{ cursor: "pointer" }}
          >
            {aboutText}
          </motion.h1>
        </Link>
        <Link href={workText == "Work" ? "/work" : ""} passHref>
          <motion.h2
            whileHover={{ translateX: 20 }}
            onHoverStart={(e) => showWorkText()}
            onHoverEnd={(e) => hideWorkText()}
            style={{ cursor: "pointer" }}
          >
            {workText}
          </motion.h2>
        </Link>
        <Link href={skillText == "Skills" ? "/skills" : ""} passHref>
          <motion.h2
            whileHover={{ translateX: 20 }}
            onHoverStart={(e) => showSkillText()}
            onHoverEnd={(e) => hideSkillText()}
            style={{ cursor: "pointer" }}
          >
            {skillText}
          </motion.h2>
        </Link>
        <Link href={contactText == "Contact" ? "/contact" : ""} passHref>
          <motion.h3
            whileHover={{ translateX: 20 }}
            onHoverStart={(e) => showContactText()}
            onHoverEnd={(e) => hideContactText()}
            style={{ cursor: "pointer" }}
          >
            {contactText}
          </motion.h3>
        </Link>
      </div>

      <div className={styles.socials}>
        <motion.a
          whileHover={{ scale: 1.5 }}
          href={"https://github.com/Sifat07"}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub fill="#66fcf1" size="2.5rem" cursor="pointer" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          href="https://www.linkedin.com/in/sifat-jasim-81ab8580/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaLinkedinIn fill="#66fcf1" size="2.5rem" cursor="pointer" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          href="https://twitter.com/Sifat_sr4"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaTwitter fill="#66fcf1" size="2.5rem" cursor="pointer" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          href="https://www.youtube.com/channel/UCnSSV3HEPk-wBm-1c38s5yA"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube fill="#66fcf1" size="2.5rem" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          href="https://www.facebook.com/Madridista.Sifat7/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaFacebook fill="#66fcf1" size="2.5rem" cursor="pointer" />
        </motion.a>
      </div>
    </div>
  );
};

export default Intro;
