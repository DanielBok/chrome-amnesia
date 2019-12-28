import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "./rootState";

export type ThunkFunctionAsync<T = void> = (
  dispatch: ThunkDispatch<RootState, void, Action>,
  getState: () => RootState
) => Promise<T>;

export type ThunkFunction<T = void> = (
  dispatch: ThunkDispatch<RootState, void, Action>,
  getState: () => RootState
) => T;
