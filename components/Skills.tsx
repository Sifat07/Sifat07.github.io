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
            title={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <skill.icon fill="#e8c99b" size="2.5rem" className={styles.icon} aria-hidden="true" />
            <div className={styles.progressBarContainer}>
              <motion.div 
                className={styles.progress} 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.05, ease: "easeOut" }}
                viewport={{ once: true }}
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} proficiency`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default Skills;
