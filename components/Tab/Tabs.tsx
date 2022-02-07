import React, { FC } from "react";
import styles from "./Tabs.module.scss";

type TabsProps = {
  tabs: {
    label: string;
    index: number;
    Component: FC<{ index: number }>;
  }[];
  selectedTab: number;
  onClick: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

/**
 * Avalible Props
 * @param className string
 * @param tab Array of object
 * @param selectedTab number
 * @param onClick Function to set the active tab
 * @param orientation Tab orientation Vertical | Horizontal
 */
const Tabs: FC<TabsProps> = ({ tabs = [], selectedTab = 0, onClick }) => {
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            className={
              selectedTab === tab.index ? styles.selectedTab : styles.Tab
            }
            onClick={() => onClick(tab.index)}
            key={tab.index}
            tabIndex={selectedTab === tab.index ? 0 : -1}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className={styles.tabPanel}
        //aria-labelledby={`btn${selectedTab}`}
        //id={`tabpanel${selectedTab}`}
      >
        {Panel && <Panel.Component index={selectedTab} />}
      </div>
    </div>
  );
};
export default Tabs;
