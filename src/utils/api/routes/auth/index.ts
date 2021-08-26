import { instance } from '../../index';
import { AxiosPromise } from '../../../../types/common';
import { IUser } from '../../../../types/interfaces/user';

export const loginUser = (data: {
  email: string;
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
): AxiosPromise<IUser & { refresh: string; access: string }> => {
  return instance.post('/auth/users/', data);
};

export const updateUser = (data: Partial<IUser>): AxiosPromise<IUser> => {
  return instance.patch('/auth/users/me/', data);
};

export const updateUserAvatar = (file: File): AxiosPromise<IUser> => {
  const formData = new FormData();
  formData.append('avatar', file);

  return instance.patch('/auth/users/me/', formData);
};

export const changeUserPassword = (data: {
  current_password: string;
  new_password: string;
}): AxiosPromise => {
  return instance.post('/auth/users/set_password/', data);
};
