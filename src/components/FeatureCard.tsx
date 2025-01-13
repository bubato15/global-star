import * as React from "react";
import { FeatureCardProps } from "../types/index.ts";
import '../style/featureCard.css';

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-wrap gap-6 items-start p-6 w-full max-md:px-5 max-md:max-w-full responsive-layout">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-14 aspect-square rounded-[100px]"
      />
      <div className="flex flex-col grow shrink min-w-[240px] w-[399px]">
        <div className="text-base font-bold text-stone-950">{title}</div>
        <div className="mt-4 text-sm font-medium leading-5 text-gray-500">
          {description}
        </div>
      </div>
    </div>
  );
};
