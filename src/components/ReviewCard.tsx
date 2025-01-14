import * as React from "react";
import { ReviewCardProps } from "../types/index.ts";

export const ReviewCard: React.FC<ReviewCardProps> = ({
  image,
  name,
  role,
  review,
}) => {
  return (
    <div className="flex flex-col items-start self-stretch p-10 my-auto rounded-3xl opacity-90 bg-slate-50 min-w-[240px] w-[555px] max-md:px- max-md:max-w-full max-md:w-[100%]">
      <div className="flex gap-5 max-w-full w-[202px]">
        <img
          loading="lazy"
          src={image}
          alt={`Profile picture of ${name}`}
          className="object-contain shrink-0 rounded-full aspect-square w-[60px]"
        />
        <div className="flex flex-col my-auto">
          <div className="text-xl font-bold tracking-tighter leading-tight text-neutral-800">
            {name}
          </div>
          <div className="text-sm leading-loose text-gray-400" style={{width: '300px'}}>{role}</div>
        </div>
      </div>
      <div className="self-stretch mt-6 text-base font-medium leading-6 text-neutral-800">
        {review}
      </div>
      <div className="flex gap-1.5 items-start mt-6">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd0810f9c12436e6f526e11f36004a197d1dc7a947144f018395d7619caf8532?placeholderIfAbsent=true&apiKey=ca0f76b4bd974916a748ef3dbbcaecaf"
            alt=""
            className="object-contain shrink-0 w-5 aspect-square fill-amber-200"
          />
        ))}
      </div>
    </div>
  );
};
