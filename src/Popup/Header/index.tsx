import { useMatchingRuleHook } from "@/Popup/Header/hooks";
import { Layout } from "antd";
import React from "react";

import PromoIcon from "./PromoIcon";
import styles from "./styles.less";

export default () => (
  <Layout.Header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>Chrome Amnesia</div>
        <RuleMatch />
      </div>
      <div className={styles.iconContent}>
        <PromoIcon
          type="github"
          href="https://github.com/DanielBok/chrome-amnesia"
        />
      </div>
    </div>
  </Layout.Header>
);

const RuleMatch = () => {
  const rule = useMatchingRuleHook();

  if (rule === undefined) {
    return <div>Domain does not match any rules</div>;
  }
  return (
    <div>
      Domain matches rule: <code>${rule}</code>
    </div>
  );
};
