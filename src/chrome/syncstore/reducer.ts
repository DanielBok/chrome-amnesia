import { AnyAction } from "redux";
import * as SyncActions from "./actions";
import * as SyncType from "./types";

const defaultState: SyncType.SyncStore = {
  rules: {}
};

export default (
  state: SyncType.SyncStore = defaultState,
  action: AnyAction
) => {
  switch (action.type) {
    case SyncActions.FETCH_RULES: {
      const rules = (action.payload as string[]).reduce(
        (acc, x) => ({ ...acc, [x]: x }),
        {} as Record<string, string>
      );

      return { ...state, rules };
    }

    case SyncActions.REMOVE_RULE: {
      const ruleToRemove = action.payload;
      const rules = Object.entries(state.rules)
        .filter(([key, _]) => key !== ruleToRemove)
        .reduce(
          (acc, [rule, value]) => ({ ...acc, [rule]: value }),
          {} as Record<string, string>
        );

      return { ...state, rules };
    }

    default:
      return state;
  }
};
