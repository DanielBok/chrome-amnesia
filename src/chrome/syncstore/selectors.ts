import { RootState } from "@/infrastructure/rootState";
import * as SyncActions from "./actions";

export const rules = (state: RootState) => state.sync.rules;

export const rulesArray = (state: RootState) => Object.keys(state.sync.rules);

export const numRules = (state: RootState) => state.sync.numOriginalRules;

export const hasExistingNewRule = (state: RootState) =>
  state.sync.rules.hasOwnProperty(SyncActions.ADD_NEW_RULE);

export const duplicateRulesPresent = (state: RootState) => {
  const newRules = Object.values(state.sync.rules);

  return new Set(newRules).size !== newRules.length;
};

export const ruleHasDuplicates = (rule: string) => (state: RootState) =>
  Object.values(state.sync.rules).reduce(
    (counter, existingRule) => (rule === existingRule ? counter + 1 : counter),
    0
  ) > 1;
