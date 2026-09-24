import React from "react";
import styles from "./Intro.module.scss";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import router from "next/router";

// Our custom easing
const easing: [number, number, number, number] = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Intro = () => {
  const [isRevealed, setIsRevealed] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const toggleReveal = () => setIsRevealed(!isRevealed);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleReveal();
    }
  };

  const sections = [
    {
      id: "contact",
      default: "Hey!",
      active: "Contact",
      path: "/contact",
    },
    {
      id: "work",
      default: "I am",
      active: "Work",
      path: "/work",
    },
    {
      id: "about",
      default: "Sifat",
      active: "About",
      path: "/about",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Sifat07", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sifat-jasim-81ab8580/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/Sifat_sr4", label: "Twitter" },
    { icon: FaYoutube, href: "https://www.youtube.com/channel/UCnSSV3HEPk-wBm-1c38s5yA", label: "YouTube" },
    { icon: FaFacebook, href: "https://www.facebook.com/Madridista.Sifat7/", label: "Facebook" },
  ];

  const bounceTransition = {
    y: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeOut" as const,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className={styles.container}
      onClick={toggleReveal}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label="Click to reveal navigation"
    >
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className={styles.texts}
      >
        <motion.div variants={stagger} className={styles.contentWrapper}>
          {sections.map((section, index) => {
            const isSectionActive = isRevealed || hoveredIndex === index;
            const displayText = isSectionActive ? section.active : section.default;

            return (
              <div key={section.id} className={styles.tagDiv}>
                <span className={styles.codeTag}>{"<h1>"}</span>
                <motion.h1
                  variants={fadeInUp}
                  whileHover={{ translateX: 20 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  style={{ 
                    cursor: "pointer", 
                    color: isSectionActive && section.id === 'contact' ? "white" : undefined 
                  }}
                  onClick={(e) => {
                    if (isSectionActive) {
                      e.stopPropagation();
                      router.push(section.path);
                    }
                  }}
                >
                  {displayText}
                </motion.h1>
                <span className={styles.codeTag}>{"</h1>"}</span>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      <div className={styles.socials}>
        {socialLinks.map((social) => (
          <motion.a
            key={social.label}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={social.label}
          >
            <social.icon fill="#e8c99b" size="2.5rem" />
          </motion.a>
        ))}
      </div>

      <div className={styles.tapBehavior}>
        <span className={styles.codeTag}>{"<p>"}</span>
        <motion.p
          transition={bounceTransition}
          animate={{
            y: [0, -10, 0],
          }}
        >
          {isRevealed ? "Tap to hide" : "Tap Anywhere"}
        </motion.p>
        <span className={styles.codeTag}>{"</p>"}</span>
      </div>
    </motion.div>
  );
};


export default Intro;
