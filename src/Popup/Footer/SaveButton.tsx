import { SyncApi } from "@/chrome/syncstore";
import styles from "@/Popup/Footer/styles.less";
import { Button, Tooltip } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHasChangesHook } from "./hooks";

const title = "Commits changes permanently";

export default () => {
  const dispatch = useDispatch();
  const hasChanges = useHasChangesHook();

  return (
    <Tooltip placement="bottom" title={title}>
      <Button
        type="primary"
        icon="save"
        className={styles.footerButton}
        disabled={!hasChanges}
        onClick={() => dispatch(SyncApi.saveRules())}
      >
        Save
      </Button>
    </Tooltip>
  );
};
