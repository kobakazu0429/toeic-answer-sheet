import React, { FC } from "react";
import { Marks } from "@/components/Mark";
import { DumpButton } from "@/components/DumpButton";

export const TopPage: FC = () => {
  return (
    <div>
      <div className="flex flex-col">
        {[...Array(200).keys()].map(v => (
          <Marks questionNo={v + 1} key={`question-no-${v + 1}`} />
        ))}
      </div>
      <DumpButton />
    </div>
  );
};
