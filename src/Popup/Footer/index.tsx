import { Button } from "antd";
import React from "react";
import styles from "./styles.less";

import ResetButton from "./ResetButton";
import SaveButton from "./SaveButton";

export default () => (
  <div className={styles.footer}>
    <Button icon="plus" className={styles.footerButton}>
      Add
    </Button>
    <ResetButton />
    <SaveButton />
  </div>
);
