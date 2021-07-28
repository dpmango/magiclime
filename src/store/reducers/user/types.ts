import { IUser } from '../../../types/interfaces/user';

export type LoginPayloadType = {
  password: string;
  login: string;
  successCallback?: VoidFunction;
  errorCallback?: (error: string) => void;
};

export type UpdateProfileType = {
  profile: IUser;
  successCallback?: VoidFunction;
  errorCallback?: (error: string) => void;
};

//export type UpdateType = Pick<IUser, 'email' | 'phone' | 'vk' | 'instagram' | 'telegram'>
