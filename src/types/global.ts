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
