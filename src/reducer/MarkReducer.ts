// action type

import { MarkType, MarkSheetType } from "../type";

const ANSWER = "ANSWER";

const actionTypes = {
  ANSWER
} as const;

// action

const answerMark = (answer: MarkType) => ({
  type: actionTypes.ANSWER,
  payload: answer
});

export const actions = {
  answerMark
};

export type ActionType = ReturnType<typeof answerMark>;

// store
export type StoreType = {
  answers: MarkSheetType;
};

export const initialState: StoreType = {
  answers: {}
};

export default (state: StoreType, action: ActionType): StoreType => {
  switch (action.type) {
    case "ANSWER":
      state.answers[action.payload.questionNo] = action.payload;
      return { ...state };
    default:
      throw new Error("Unexpected Action Type");
  }
};
