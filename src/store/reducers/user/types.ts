import { IUser } from '../../../types/interfaces/user';

export type LoginPayloadType = {
  password: string;
  email: string;
  remember: boolean;
  successCallback?: VoidFunction;
  errorCallback?: (error: string) => void;
};

export type RegistrationPayloadType = Partial<IUser> & {
  successCallback?: VoidFunction;
  errorCallback?: (error: string) => void;
  password: string;
};

export type UpdateProfileType = {
  profile: Partial<IUser>;
  successCallback?: VoidFunction;
  errorCallback?: (error: string) => void;
};

export type ChangePasswordType = {
  data: {
    current_password: string;
    new_password: string;
  };
  successCallback?: VoidFunction;
  errorCallback?: (error: string) => void;
};
// export type UpdateType = Pick<IUser, 'email' | 'phone' | 'vk' | 'instagram' | 'telegram'>
