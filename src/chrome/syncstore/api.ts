import SyncFactory from "@/factory/sync";
import { ThunkFunction, ThunkFunctionAsync } from "@/infrastructure/thunk";
import * as SyncActions from "./actions";
import * as SyncSelector from "./selectors";

const ruleKey = "rules";

const syncStore = SyncFactory.getInstance();

export const fetchRules = (): ThunkFunctionAsync => async dispatch => {
  await syncStore.get(ruleKey, ({ rules }: { rules?: string[] }) => {
    dispatch({ type: SyncActions.FETCH_RULES, payload: rules });
  });
};

export const removeRule = (rule: string): ThunkFunction => (
  dispatch,
  getState
) => {
  const rules = SyncSelector.rules(getState());
  if (!rules.hasOwnProperty(rule)) return;

  dispatch({ type: SyncActions.REMOVE_RULE, payload: rule });
};
