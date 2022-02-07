import React, { useCallback } from "react";
import styles from "./Tabs.module.scss";

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li className={styles.tabTitle}>
      <button onClick={onClick} className={styles.tabButtons}>
        {title}
      </button>
    </li>
  );
};

export default TabTitle;
