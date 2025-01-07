import * as React from "react";
import { TestimonialProps } from "../types";

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  avatarSrc
}) => {
  return (
    <div className="flex flex-col w-full text-base max-w-[466px] max-md:mt-10 max-md:max-w-full">
      <div className="font-medium leading-7 text-stone-950 max-md:max-w-full">
        {quote}
      </div>
      <div className="flex gap-4 items-center self-start mt-6 leading-tight">
        <img
          loading="lazy"
          src={avatarSrc}
          alt={`${author}'s profile`}
          className="object-contain shrink-0 self-stretch my-auto w-14 rounded-full aspect-square"
        />
        <div className="flex flex-col justify-center self-stretch my-auto">
          <div className="font-semibold text-stone-950">{author}</div>
          <div className="mt-1 font-medium text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
};