import { ThunkFunctionAsync } from "@/infrastructure/thunk";
import * as SyncActions from "./actions";

const ruleKey = "rules";

export const fetchRules = (): ThunkFunctionAsync => async dispatch => {
  await chrome.storage.sync.get(ruleKey, ({ rules }: { rules?: string[] }) => {
    dispatch({ type: SyncActions.FETCH_RULES, payload: rules });
    console.log(rules);
  });
};
