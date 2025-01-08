import * as React from "react";
import { TeamMemberProps } from "../types/index.ts";
 
export const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role }) => {
  return (
    <article className="flex flex-col min-w-[240px] w-[276px]">
      <img
        loading="lazy"
        src={image}
        alt={`${name} - ${role} at Global Star`}
        className="object-contain w-full rounded-2xl aspect-[0.94] transition-transform duration-300 ease-in-out hover:scale-110"
        width="276"
        height="260"
      />
      <div className="flex flex-col justify-center self-start mt-4">
        <div className="self-start text-2xl font-semibold text-center text-stone-950">
          {name}
        </div>
        <div className="mt-2 text-base font-medium leading-relaxed text-gray-500">
          {role}
        </div>
      </div>
    </article>
  );
};