import React, { FC, useContext } from "react";
import {
  MarkSheetDispatchContext,
  MarkSheetStateContext
} from "@/context/MarkSheetContext";
import { AnswerType } from "../type";

const BaseButtonCss = `delay-75 rounded-full text-3xl p-1 text-red-400 border-2 cursor-pointer select-none`;

export const Mark: FC<{
  questionNo: number;
  text: AnswerType;
}> = props => {
  const ctx = useContext(MarkSheetDispatchContext);
  const ctx1 = useContext(MarkSheetStateContext);
  const id = `toeic-q-${props.questionNo}-${props.text}`;
  return (
    <div>
      <input type="radio" id={id} className="hidden" />
      <label
        className={`${BaseButtonCss} ${
          ctx1.state.answers[props.questionNo]?.answer === props.text
            ? "bg-gray-600 border-gray-600"
            : "bg-white border-red-400"
        }`}
        htmlFor={id}
        onClick={() => {
          ctx.dispatch({
            type: "ANSWER",
            payload: {
              questionNo: props.questionNo,
              answer: props.text,
              withFeeling:
                ctx1.state.answers[props.questionNo]?.withFeeling ?? false
            }
          });
        }}
      >
        <span>{props.text}</span>
      </label>
    </div>
  );
};

export const MarkFeeling: FC<{ questionNo: number }> = props => {
  const ctx = useContext(MarkSheetDispatchContext);
  const ctx1 = useContext(MarkSheetStateContext);
  const id = `toeic-q-${props.questionNo}-with-feeling`;
  return (
    <div>
      <input
        type="checkbox"
        className="hidden"
        id={id}
        checked={ctx1.state.answers[props.questionNo]?.withFeeling ?? false}
        onChange={e => {
          ctx.dispatch({
            type: "ANSWER",
            payload: {
              ...ctx1.state.answers[props.questionNo],
              questionNo: props.questionNo,
              withFeeling: e.target.checked
            }
          });
        }}
      />
      <label
        className={`${BaseButtonCss} ${
          ctx1.state.answers[props.questionNo]?.withFeeling
            ? "bg-gray-600 border-gray-600"
            : "bg-white border-red-400"
        }`}
        htmlFor={id}
      >
        <span>?</span>
      </label>
    </div>
  );
};

export const Marks: FC<{
  questionNo: number;
}> = ({ questionNo }) => {
  return (
    <div className="inline-grid grid-cols-6 gap-x-6 max-w-xs mt-2 mb-2">
      <span className="text-3xl text-right">{questionNo}</span>
      <Mark questionNo={questionNo} text="A" />
      <Mark questionNo={questionNo} text="B" />
      <Mark questionNo={questionNo} text="C" />
      <Mark questionNo={questionNo} text="D" />
      <MarkFeeling questionNo={questionNo} />
    </div>
  );
};
