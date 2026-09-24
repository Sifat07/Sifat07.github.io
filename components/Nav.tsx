import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Logo } from "./Logo";
import styles from "./Nav.module.scss";

const Nav = () => {
  const router = useRouter();
  const pathname = router ? router.pathname : "";

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logoLink} aria-label="Home">
        <Logo />
      </Link>

      <div className={styles.navMenu}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
