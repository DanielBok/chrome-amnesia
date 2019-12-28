import { SyncSelectors, SyncUtil } from "@/chrome/syncstore";
import { useSelector } from "react-redux";

export const useHasChanges = () => {
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

export const useRulesHaveErrors = () => {
  const hasDuplicates = useSelector(SyncSelectors.duplicateRulesPresent);
  const rules = useSelector(SyncSelectors.rules);

  return (
    hasDuplicates ||
    Object.values(rules).reduce(
      (hasError, rule) => hasError || !!SyncUtil.validateRule(rule),
      false as boolean
    )
  );
};
