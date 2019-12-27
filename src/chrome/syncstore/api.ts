import SyncFactory from "@/factory/sync";
import { ThunkFunctionAsync } from "@/infrastructure/thunk";
import * as SyncActions from "./actions";

const ruleKey = "rules";

const syncStore = SyncFactory.getInstance();

export const fetchRules = (): ThunkFunctionAsync => async dispatch => {
  await syncStore.get(ruleKey, ({ rules }: { rules?: string[] }) => {
    dispatch({ type: SyncActions.FETCH_RULES, payload: rules });
    console.log(rules);
  });
};
