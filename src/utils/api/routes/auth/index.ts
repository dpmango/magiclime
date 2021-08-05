import { instance } from '../../index';
import { AxiosPromise } from '../../../../types/common';
import { IUser } from '../../../../types/interfaces/user';

export const loginUser = (data: {
  username: string;
  password: string;
}): AxiosPromise<{ refresh: string; access: string }> => {
  return instance.post('/auth/jwt/create/', data);
};

export const getUserProfile = (): AxiosPromise<IUser> => {
  return instance.get('/auth/users/me/');
};

export const refreshAuthToken = (
  refresh: string
): AxiosPromise<{ access: string }> => {
  return instance.post('/auth/jwt/refresh/', { refresh });
};

export const registrationUser = (
  data: Partial<IUser> & { password: string }
): AxiosPromise<Partial<IUser>> => {
  return instance.post('/auth/users/', data);
};
