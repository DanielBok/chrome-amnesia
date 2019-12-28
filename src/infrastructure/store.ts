import { SyncApi } from "@/chrome/syncstore";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

function configureStore() {
  let middleware = applyMiddleware(thunk);
  if (process.env.NODE_ENV === "development") {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, middleware);
  dispatchStartupCalls(store);

  return store;
}

async function dispatchStartupCalls(store: Store) {
  const dispatch = (action: any) => store.dispatch(action);

  await dispatch(SyncApi.fetchRules());
}

export default configureStore();
