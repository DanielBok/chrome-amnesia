import { AnyAction } from "redux";
import * as SyncActions from "./actions";
import * as SyncType from "./types";

const defaultState: SyncType.SyncStore = {
  rules: new Set<string>()
};

export default (
  state: SyncType.SyncStore = defaultState,
  action: AnyAction
) => {
  switch (action.type) {
    case SyncActions.FETCH_RULES: {
      const rules = new Set<string>(action.payload);
      return { ...state, rules };
    }

    case SyncActions.REMOVE_RULE: {
      state.rules.delete(action.payload);
      const rules = new Set([...state.rules]);
      return { ...state, rules };
    }

    default:
      return state;
  }
};
