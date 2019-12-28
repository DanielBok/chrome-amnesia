import { Button } from "antd";
import React from "react";
import styles from "./styles.less";

import SaveButton from "./SaveButton";

export default () => {
  return (
    <div className={styles.footer}>
      <Button icon="plus" className={styles.footerButton}>
        Add
      </Button>
      <Button icon="undo" className={styles.footerButton}>
        Reset
      </Button>
      <SaveButton />
    </div>
  );
};
