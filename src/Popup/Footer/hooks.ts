import { SyncSelectors } from "@/chrome/syncstore";
import { useSelector } from "react-redux";

export const useHasChangesHook = () => {
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