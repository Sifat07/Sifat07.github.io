import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./contact.module.scss";
import Layout from "../components/Layout";

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "sifatjasim@gmail.com",
      link: "mailto:sifatjasim@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "sifatjasim",
      link: "https://www.linkedin.com/in/sifat-jasim-81ab8580/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "Sifat07",
      link: "https://github.com/Sifat07",
    },
  ];

  return (
    <Layout title="Contact" description="Get in touch with Sifat Jasim for projects, collaborations, or opportunities.">
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <div className={styles.titleWrapper}>
            <span className={styles.codeTag}>{"<h1>"}</span>
            <h1 className={styles.title}>Get in Touch</h1>
            <span className={styles.codeTag}>{"</h1>"}</span>
          </div>
          <div className={styles.descriptionWrapper}>
            <span className={styles.codeTag}>{"<p>"}</span>
            <p className={styles.description}>
              I{"'"}m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <span className={styles.codeTag}>{"</p>"}</span>
          </div>

          <div className={styles.contactGrid}>
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noreferrer"
                className={styles.contactCard}
                whileHover={{ scale: 1.05, borderColor: "#e8c99b" }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.icon}>{method.icon}</div>
                <div className={styles.info}>
                  <span className={styles.label}>{method.label}</span>
                  <span className={styles.value}>{method.value}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Contact;
