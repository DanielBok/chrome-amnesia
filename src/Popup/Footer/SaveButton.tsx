import { SyncApi, SyncSelectors } from "@/chrome/syncstore";
import styles from "@/Popup/Footer/styles.less";
import { Button, Tooltip } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const title = "Commits changes permanently";

const useHasChangesHook = () => {
  const rules = useSelector(SyncSelectors.rules);
  const numOriginalRules = useSelector(SyncSelectors.numRules);

  const numRules = Object.keys(rules).length;

  if (numRules !== numOriginalRules) return true;

  for (const [originalRule, newRule] of Object.entries(rules)) {
    if (originalRule !== newRule) {
      return true;
    }
  }
  return false;
};

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
