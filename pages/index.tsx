import React from "react";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import styles from "./home.module.scss";
import Image from "next/image";
import bg from "../components/assets/images/IMG_1049.png";
import SEO from "../components/SEO";

const PortfolioHome = () => {
  return (
    <>
      <SEO title="Sifat Jasim | Home" />
      <div className={styles.section1}>
        <Image
          alt="background"
          src={bg}
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          placeholder="blur"
          priority // Prioritize home background
        />
        <Nav />
        <Intro />
      </div>
    </>
  );
};

export default PortfolioHome;
