import { GitHubCalendar } from "react-github-calendar";
import styles from "./GitHubActivity.module.scss";
import { motion } from "framer-motion";

const GitHubActivity = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <h2 className={styles.title}>GitHub Contributions</h2>
      <div className={styles.calendarWrapper}>
        <GitHubCalendar 
          username="Sifat07" 
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          theme={{
            light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
        />
      </div>
      <div className={styles.stats}>
        <p>Hasta El Finale — Coding with passion and persistence.</p>
      </div>
    </motion.div>
  );
};

export default GitHubActivity;
