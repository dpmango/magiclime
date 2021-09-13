import { AxiosPromise } from '../../../../types/common';
import { instance } from '../../index';
import { IUserListItem } from '../../../../components/pages/Admin/Users/types';
import endpoints from '../endpoints';

export const getUsers = (search: string): AxiosPromise<IUserListItem[]> => {
  return instance.get(endpoints.admin.users, { params: { search } });
};

export const blockUser = (id: string): AxiosPromise => {
  return instance.post(endpoints.admin.blockUser(id), { id });
};

export const exportUsersList = (): AxiosPromise => {
  return instance.get(endpoints.admin.usersExport);
};

export const getWebinars = (search: string): AxiosPromise<any[]> => {
  return instance.get(endpoints.admin.webinars, { params: { search } });
};

export const createWebinar = (data: object): AxiosPromise => {
  return instance.post(endpoints.admin.webinars, data);
};
