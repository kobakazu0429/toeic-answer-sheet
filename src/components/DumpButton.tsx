import React, { FC, useContext } from "react";
import { MarkSheetStateContext } from "@/context/MarkSheetContext";
import { MarkSheetType } from "../type";

const HEAD = `"questionNo","answer","withFeeling"`;

const json2csv = (data: MarkSheetType) => {
  const answers = Object.entries(data)
    .map(v => v[1])
    .sort((a, b) => a.questionNo - b.questionNo);
  const datacsv = answers
    .map(v =>
      [v.questionNo, v.answer, v.withFeeling].map(c => `"${c ?? ""}"`).join(",")
    )
    .join("\n");
  const csv = HEAD + "\n" + datacsv;
  console.log(csv);
  return csv;
};

export const DumpButton: FC = () => {
  const ctx = useContext(MarkSheetStateContext);

  return (
    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      onClick={_ => {
        const csv = json2csv(ctx.state.answers);
        const csvContent = `data:text/csv;charset=utf-8,${csv}`;
        const encodedUri = encodeURI(csvContent);
        window.open(encodedUri);
      }}
    >
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span>Dump</span>
    </button>
  );
};
