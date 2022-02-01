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
  const [aboutText, setAboutText] = React.useState("Sifat");
  const [workText, setWorkText] = React.useState("I am");
  const [contactText, setContactText] = React.useState("Hey!");

  const showAboutText = () => {
    setAboutText("About");
  };

  const hideAboutText = () => {
    setAboutText("Sifat");
  };

  const showWorkText = () => {
    setWorkText("Work");
  };

  const hideWorkText = () => {
    setWorkText("I am");
  };
  const showContactText = () => {
    setContactText("Contact");
  };

  const hideContactText = () => {
    setContactText("Hey!");
  };

  const changeText = () => {
    showContactText();
    showAboutText();
    showWorkText();
  };

  const changeTextAgain = () => {
    hideContactText();
    hideAboutText();
    hideWorkText();
  };

  const bounceTransition = {
    y: {
      duration: 1,
      yoyo: Infinity,
      ease: "easeOut",
    },
    backgroundColor: {
      duration: 0,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 2,
    },
  };

  return (
    <div
      className={styles.container}
      onTouchStart={() => changeText()}
      onTouchEnd={() => changeTextAgain()}
    >
      <div className={styles.texts}>
        <div className={styles.tagDiv}>
          <p>{"<h1>"}</p>
          <Link href={contactText == "Contact" ? "/contact" : ""} passHref>
            <motion.h1
              whileHover={{ translateX: 20 }}
              onHoverStart={(e) => showContactText()}
              onHoverEnd={(e) => hideContactText()}
              style={{ cursor: "pointer", color: "white" }}
            >
              {contactText}
            </motion.h1>
          </Link>
          <br></br>
          <p>{"</h1>"}</p>
        </div>

        <div className={styles.tagDiv}>
          <p>{"<h1>"}</p>
          <Link href={workText == "Work" ? "/work" : ""} passHref>
            <motion.h1
              whileHover={{ translateX: 20 }}
              onHoverStart={(e) => showWorkText()}
              onHoverEnd={(e) => hideWorkText()}
              style={{ cursor: "pointer" }}
            >
              {workText}
            </motion.h1>
          </Link>
          <br></br>
          <p>{"</h1>"}</p>
        </div>
        <div className={styles.tagDiv}>
          <p>{"<h1>"}</p>
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
          <br></br>
          <p>{"</h1>"}</p>
        </div>
      </div>

      <div className={styles.socials}>
        <motion.a
          whileHover={{ scale: 1.5 }}
          href={"https://github.com/Sifat07"}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub fill="#e8c99b" size="2.5rem" cursor="pointer" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          href="https://www.linkedin.com/in/sifat-jasim-81ab8580/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaLinkedinIn fill="#e8c99b" size="2.5rem" cursor="pointer" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          href="https://twitter.com/Sifat_sr4"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaTwitter fill="#e8c99b" size="2.5rem" cursor="pointer" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          href="https://www.youtube.com/channel/UCnSSV3HEPk-wBm-1c38s5yA"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube fill="#e8c99b" size="2.5rem" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          href="https://www.facebook.com/Madridista.Sifat7/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaFacebook fill="#e8c99b" size="2.5rem" cursor="pointer" />
        </motion.a>
      </div>
      <div className={styles.tapBehavior}>
        <motion.p
          transition={bounceTransition}
          animate={{
            y: ["100%", "-100%"],
            backgroundColor: "transparent",
          }}
        >
          {" "}
          Tap Anywhere
        </motion.p>
      </div>
    </div>
  );
};

export default Intro;
