export interface ReviewCardProps {
  image: string;
  name: string;
  role: string;
  review: string;
}

export interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
}

export interface StatisticProps {
  number: string;
  label: string;
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc: string;
}

export interface ServiceDescriptionProps {
  title: string;
  description: string;
}

export interface AchievementCardProps {
  count: string;
  description: string;
}

export interface AchievementsData {
  title: string;
  achievements: AchievementCardProps[];
}