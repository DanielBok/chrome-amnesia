import { SyncApi } from "@/chrome/syncstore";
import styles from "@/Popup/Footer/styles.less";
import { Button, Tooltip } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHasChanges, useNewRulesHaveError } from "./hooks";

const title = "Commits changes permanently";

export default () => {
  const dispatch = useDispatch();
  const hasChanges = useHasChanges();
  const hasError = useNewRulesHaveError();

  return (
    <Tooltip placement="bottom" title={title}>
      <Button
        type="primary"
        icon="save"
        className={styles.footerButton}
        disabled={!hasChanges || hasError}
        onClick={() => dispatch(SyncApi.saveRules())}
      >
        Save
      </Button>
    </Tooltip>
  );
};
