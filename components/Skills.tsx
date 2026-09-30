import React from "react";
import styles from "./Skills.module.scss";
import { skillsData } from "../data/portfolio";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className={styles.skillContainers}>
      <div className={styles.skillGrid}>
        {skillsData.map((skill, index) => (
          <motion.div 
            key={skill.name} 
            className={styles.skill} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <skill.icon fill="#e8c99b" size="2.5rem" className={styles.icon} aria-hidden="true" />
            <span className={styles.name}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default Skills;
