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

export const useNewRulesHaveError = () =>
  Object.values(useSelector(SyncSelectors.rules)).reduce(
    (hasError, rule) => hasError || !!SyncUtil.validateRule(rule),
    false
  );
