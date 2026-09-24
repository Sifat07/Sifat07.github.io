import React from "react";
import Nav from "./Nav";
import SEO from "./SEO";
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <div className="layout-container">
        <Nav />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.main>
      </div>
      <style jsx global>{`
        .layout-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
        }
      `}</style>
    </>
  );
};

export default Layout;
