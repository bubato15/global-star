import * as React from "react";
import { AchievementCardProps } from "../types";

export const AchievementCard: React.FC<AchievementCardProps> = ({ count, description }) => {
  return (
    <div 
      className="flex flex-col justify-center p-6 rounded-2xl border border-gray-200 border-solid min-w-[240px] w-[322px] max-md:px-5"
      role="article"
    >
      <div 
        className="text-4xl font-semibold tracking-tighter leading-tight text-stone-950"
        aria-label={`Achievement count: ${count}`}
      >
        {count}
      </div>
      <div className="mt-4 text-base font-medium leading-6 text-gray-500">
        {description}
      </div>
    </div>
  );
};