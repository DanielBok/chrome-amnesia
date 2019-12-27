import SyncReducer from "@/chrome/syncstore/reducer";

import { RootState } from "@/infrastructure/rootState";
import { combineReducers } from "redux";

export default combineReducers<RootState>({
  sync: SyncReducer
});
