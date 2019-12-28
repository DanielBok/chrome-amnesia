import React from "react";

import AddButton from "./AddButton";
import ResetButton from "./ResetButton";
import SaveButton from "./SaveButton";
import styles from "./styles.less";

export default () => (
  <div className={styles.footer}>
    <AddButton />
    <ResetButton />
    <SaveButton />
  </div>
);
