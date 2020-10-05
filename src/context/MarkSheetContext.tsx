import { createContext } from "react";
import { StoreType, ActionType, initialState } from "../reducer/MarkReducer";

export const MarkSheetStateContext = createContext<{
  state: StoreType;
}>({ state: initialState });

export const MarkSheetDispatchContext = createContext<{
  dispatch: (action: ActionType) => void;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
}>({ dispatch: () => {} });
