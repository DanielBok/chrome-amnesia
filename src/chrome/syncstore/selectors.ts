import { RootState } from "@/infrastructure/rootState";

export const rules = (state: RootState) => state.sync.rules;
export const rulesArray = (state: RootState) => Object.keys(state.sync.rules);
export const numRules = (state: RootState) => state.sync.numOriginalRules;
