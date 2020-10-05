import React, { FC, useReducer } from "react";
import { createRouter } from "@/routes";
import { TopPage } from "@/pages/TopPage";

import reducer, { initialState } from "@/reducer/MarkReducer";
import {
  MarkSheetStateContext,
  MarkSheetDispatchContext
} from "@/context/MarkSheetContext";

const routes = [
  {
    exact: true,
    path: "/",
    component: TopPage
  }
];

const Router = createRouter({ routes });

export const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MarkSheetStateContext.Provider value={{ state }}>
      <MarkSheetDispatchContext.Provider value={{ dispatch }}>
        {Router}
      </MarkSheetDispatchContext.Provider>
    </MarkSheetStateContext.Provider>
  );
};
