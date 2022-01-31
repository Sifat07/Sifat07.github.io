import React from "react";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import styles from "./index.module.scss";
import Image from "next/image";
import bg from "../components/assets/images/IMG_1049.png";

const index = () => {
  return (
    <div>
      <div className={styles.section1}>
        <Image
          alt="Mountains"
          src={bg}
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
        <Nav />
        <Intro />
      </div>
    </div>
  );
};

export default index;
