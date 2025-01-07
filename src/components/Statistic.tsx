import * as React from "react";
import { StatisticProps } from "../types/index.ts";

export const Statistic: React.FC<StatisticProps> = ({ number, label }) => {
  return (
    <div className="flex flex-col justify-center self-stretch my-auto">
      <div className="text-4xl font-semibold tracking-tighter leading-tight">
        {number}
      </div>
      <div className="mt-1 text-xs">{label}</div>
    </div>
  );
};
