import React from "react";
import { Logo } from "./Logo";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.navMenu}>
        <a>Home</a>
        <a>Work</a>
        <a>Skill</a>
        <a>Contact</a>
      </div>
    </div>
  );
};

export default Nav;
