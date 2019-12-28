import { SyncApi, SyncSelectors } from "@/chrome/syncstore";
import styles from "@/Popup/Footer/styles.less";
import { Button, Tooltip } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const title = "Adds a new rule";

export default () => {
  const dispatch = useDispatch();
  const disabled = useSelector(SyncSelectors.hasExistingNewRule);

  return (
    <Tooltip placement="bottom" title={title}>
      <Button
        icon="plus"
        className={styles.footerButton}
        disabled={disabled}
        onClick={() => dispatch(SyncApi.addNewEmptyRule())}
      >
        Add
      </Button>
    </Tooltip>
  );
};
