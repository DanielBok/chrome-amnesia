import { SyncApi } from "@/chrome/syncstore";
import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  dispatchStartupCalls(store);

  return store;
}

async function dispatchStartupCalls(store: Store) {
  const dispatch = (action: any) => store.dispatch(action);

  await dispatch(SyncApi.fetchRules());
}

export default configureStore();
