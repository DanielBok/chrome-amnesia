import { SyncSelectors } from "@/chrome/syncstore";
import React from "react";
import { useSelector } from "react-redux";
import RuleBox from "./RuleBox";
import RuleBoxTitle from "./RuleBox/RuleBoxTitle";
import styles from "./styles.less";

export default () => {
  const rules = useSelector(SyncSelectors.rulesArray);

  return (
    <div className={styles.body}>
      <RuleBoxTitle />
      {rules.map(rule => (
        <RuleBox key={rule} rule={rule} />
      ))}
    </div>
  );
};
