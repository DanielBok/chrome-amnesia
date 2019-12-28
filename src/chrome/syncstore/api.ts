import SyncFactory from "@/factory/sync";
import { ThunkFunction, ThunkFunctionAsync } from "@/infrastructure/thunk";
import * as SyncActions from "./actions";
import * as SyncSelector from "./selectors";

const ruleKey = "rules";

const syncStore = SyncFactory.getInstance();

/**
 * Fetches rules from the Chrome sync store
 */
export const fetchRules = (): ThunkFunctionAsync => async dispatch => {
  await syncStore.get(ruleKey, ({ rules }: { rules?: string[] }) => {
    dispatch({ type: SyncActions.FETCH_RULES, payload: rules });
  });
};

/**
 * Removes the rule temporarily in the redux store. Call save to commit the changes to the chrome store
 *
 * @param rule rule to remove
 */
export const removeRule = (rule: string): ThunkFunction => (
  dispatch,
  getState
) => {
  const rules = SyncSelector.rules(getState());
  if (!rules.hasOwnProperty(rule)) return;

  dispatch({ type: SyncActions.REMOVE_RULE, payload: rule });
};

/**
 * Updates the rule temporarily in the redux store. Call save to commit the changes to the chrome store
 *
 * @param currentRule the current rule (this rule still applies until changes are committed)
 * @param tentativeRule rule that will be committed into the chrome store to replace the current rule when save is called
 */
export const updateRule = (
  currentRule: string,
  tentativeRule: string
): ThunkFunction => (dispatch, getState) => {
  const rules = SyncSelector.rules(getState());
  if (!rules.hasOwnProperty(currentRule)) return;

  dispatch({
    type: SyncActions.UPDATE_RULE,
    payload: { currentRule, tentativeRule }
  });
};
