import { SyncApi, SyncSelectors, SyncUtil } from "@/chrome/syncstore";
import { Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles.less";

type RuleInputProps = {
  rule: string;
};

export default ({ rule }: RuleInputProps) => {
  const dispatch = useDispatch();
  const ruleValue = useSelector(SyncSelectors.rules)[rule];

  const error = useErrorHook(rule);

  return (
    <>
      <Input
        value={ruleValue}
        onChange={e => dispatch(SyncApi.updateRule(rule, e.target.value))}
      />
      {error && (
        <div
          className={styles.errorInput}
          dangerouslySetInnerHTML={{ __html: error }}
        />
      )}
    </>
  );
};

const useErrorHook = (rule: string) => {
  const ruleValue = useSelector(SyncSelectors.rules)[rule];
  const hasDuplicates = useSelector(SyncSelectors.ruleHasDuplicates(ruleValue));

  const error = SyncUtil.validateRule(ruleValue);
  if (error !== undefined) return error;

  if (hasDuplicates) return `Rule has duplicates. Remove or change this rule.`;
};
