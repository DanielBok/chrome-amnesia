import { SyncApi, SyncSelectors } from "@/chrome/syncstore";
import { Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type RuleInputProps = {
  rule: string;
};

export default ({ rule }: RuleInputProps) => {
  const dispatch = useDispatch();
  const ruleValue = useSelector(SyncSelectors.rules)[rule];

  return (
    <>
      <Input
        value={ruleValue}
        onChange={e => dispatch(SyncApi.updateRule(rule, e.target.value))}
      />
    </>
  );
};
