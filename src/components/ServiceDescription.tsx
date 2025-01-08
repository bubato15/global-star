import * as React from "react";
import { ServiceDescriptionProps } from "../types";

export const ServiceDescription: React.FC<ServiceDescriptionProps> = ({
  title,
  description
}) => {
  return (
    <div className="flex flex-col max-w-[486px]">
      <h1 className="text-4xl font-semibold tracking-tighter leading-[52px] text-stone-950 max-md:max-w-full">
        {title}
      </h1>
      <p className="mt-4 text-base font-medium leading-7 text-gray-500">
        {description}
      </p>
    </div>
  );
};