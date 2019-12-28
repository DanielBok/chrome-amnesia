import { SyncApi } from "@/chrome/syncstore";
import { useHasChangesHook } from "@/Popup/Footer/hooks";
import styles from "@/Popup/Footer/styles.less";
import { Button, Tooltip } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

const title = "Reverts rules back to original";

export default () => {
  const dispatch = useDispatch();
  const hasChanges = useHasChangesHook();

  return (
    <Tooltip placement="bottom" title={title}>
      <Button
        icon="undo"
        className={styles.footerButton}
        disabled={!hasChanges}
        onClick={() => dispatch(SyncApi.fetchRules())}
      >
        Reset
      </Button>
    </Tooltip>
  );
};
