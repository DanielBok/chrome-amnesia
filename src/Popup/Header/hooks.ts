import { SyncSelectors } from "@/chrome/syncstore";
import { useSelector } from "react-redux";

export const useMatchingRuleHook = () => {
  const rules = useSelector(SyncSelectors.rulesArray);
  return rules.find(rule => {
    if (!rule.startsWith("^")) rule = "^" + rule;
    return window.location.href.match(new RegExp(rule)) !== null;
  });
};
