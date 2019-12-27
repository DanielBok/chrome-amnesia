import { RootState } from "@/infrastructure/rootState";

export const rules = (state: RootState) => state.sync.rules;
