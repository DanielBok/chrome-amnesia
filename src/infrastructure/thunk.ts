import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "./rootState";

export type ThunkFunctionAsync = (
  dispatch: ThunkDispatch<RootState, void, Action>,
  getState: () => RootState
) => Promise<void>;
