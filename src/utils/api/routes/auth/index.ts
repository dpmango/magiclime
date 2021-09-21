import { instance } from '../../index';
import { AxiosPromise } from '../../../../types/common';
import { IUser } from '../../../../types/interfaces/user';
import endpoints from '../endpoints';

export const loginUser = (data: {
  email: string;
  password: string;
}): AxiosPromise<{ refresh: string; access: string }> => {
  return instance.post(endpoints.auth.create, data);
};

export const getUserProfile = (): AxiosPromise<IUser> => {
  return instance.get(endpoints.users.me);
};

export const getUserProfileById = (id: number): AxiosPromise<IUser> => {
  return instance.get(endpoints.users.byId(id));
};

export const refreshAuthToken = (
  refresh: string
): AxiosPromise<{ access: string }> => {
  return instance.post(endpoints.auth.refresh, { refresh });
};

export const registrationUser = (
  data: Partial<IUser> & { password: string }
): AxiosPromise<IUser & { refresh: string; access: string }> => {
  return instance.post(endpoints.users.root, {
    ...data,
    media_sponsor:
      (data.media_sponsor && data.media_sponsor.trim()) ||
      '9p7cCf3NTmcedrSqvwqcJwfOada2YJVMTiaoEK79',
  });
};

export const updateUser = (data: Partial<IUser>): AxiosPromise<IUser> => {
  return instance.patch(endpoints.users.me, data);
};

export const updateUserAvatar = (file: File | null): AxiosPromise<IUser> => {
  const formData = file ? new FormData() : null;
  if (file) {
    formData!.append('image', file);
  }

  return instance.post(endpoints.profile.options.avatar, formData);
};

export const changeUserPassword = (data: {
  current_password: string;
  new_password: string;
}): AxiosPromise => {
  return instance.post(endpoints.users.password, data);
};

export const getProfilePdf = async (): Promise<[Error | null, any | null]> => {
  try {
    const { data } = await instance.get(endpoints.profile.pdf);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
