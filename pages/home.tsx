import React from "react";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import styles from "./home.module.scss";
import Image from "next/image";
import bg from "../components/assets/images/IMG_1049.png";

const Home = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <div className={styles.section1}>
        <Image
          alt="background"
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

export default Home;
