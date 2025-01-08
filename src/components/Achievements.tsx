import * as React from "react";
import { AchievementCard } from "./AchievementCard.tsx";
import { AchievementsData } from "../types";

const achievementsData: AchievementsData = {
  title: "Thành tựu đạt được",
  achievements: [
    {
      count: "10tr+",
      description: "Khách hàng tin tưởng sử dụng dịch vụ."
    },
    {
      count: "20+",
      description: "Giải thưởng danh giá trong lĩnh vực tài chính và viễn thông."
    },
    {
      count: "300+",
      description: "Đối tác lớn trong toàn ngành tài chính và viễn thông hợp tác."
    }
  ]
};

export const Achievements: React.FC = () => {
  return (
    <section id ="partners" className="flex overflow-hidden flex-col justify-center items-center px-20 pt-20 pb-32 bg-white max-md:px-5 max-md:pb-24">
      <div className="flex flex-col items-center max-md:max-w-full">
        <h2 className="text-4xl font-semibold tracking-tighter leading-tight text-center text-stone-950 max-md:max-w-full">
          {achievementsData.title}
        </h2>
        <div className="flex flex-wrap gap-10 items-start mt-14 max-md:mt-10 max-md:max-w-full">
          {achievementsData.achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              count={achievement.count}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};