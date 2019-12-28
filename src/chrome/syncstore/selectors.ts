import { RootState } from "@/infrastructure/rootState";

export const rules = (state: RootState) => state.sync.rules;
export const rulesArray = (state: RootState) => [...state.sync.rules];
