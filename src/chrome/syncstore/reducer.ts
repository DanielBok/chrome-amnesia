import { AnyAction } from "redux";
import * as SyncActions from "./actions";
import * as SyncType from "./types";

const defaultState: SyncType.SyncStore = {
  rules: []
};

export default (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case SyncActions.FETCH_RULES:
      return { ...state, rules: action.payload };
    default:
      return state;
  }
};
