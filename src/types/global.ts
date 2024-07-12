export type TQueryParam = {
  [key: string]: string | number | boolean;
};

export type TUserType = {
  _id: string;
  name: string;
  currentRole: string;
  email: string;
  password: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export interface IUserLoginInput {
  email: string;
  password: string;
}

export type UserRegisterType = {
  name: string;
  currentRole: string;
  email: string;
  password: string;
  phone: string;
};

export type ExperienceType = {
  _id: string;
  timeFrame: string;
  role: string;
  company: string;
  location: string;
  createdAt: string;
  updatedAt: string;
};

export type SkillType = {
  _id: string;
  skill: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
};

export type BadgeType = {
  _id: string;
  title: string;
  link: string;
};

export type ProjectType = {
  _id: string;
  title: string;
  description: string;
  imageSrc: string;
  badges: BadgeType[];
  createdAt: string;
  updatedAt: string;
};

export type BlogType = {
  _id: string;
  title: string;
  content: string;
  author: string;
  coverImage: string;
  createdAt: string;
  updatedAt: string;
};
