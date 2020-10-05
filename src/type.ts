export type AnswerType = "A" | "B" | "C" | "D";

export type MarkType = {
  questionNo: number;
  answer: AnswerType;
  withFeeling: boolean;
};

export type MarkSheetType = {
  [key in number]: MarkType;
};
