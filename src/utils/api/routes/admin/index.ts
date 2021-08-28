import { AxiosPromise } from '../../../../types/common';
import { IAxiosPaginatedResponse } from '../../../../types/interfaces/common';
import { instance } from '../../index';
import { IUserListItem } from '../../../../components/pages/Admin/Users/types';

export const getUsers = (
  search: string
): AxiosPromise<IAxiosPaginatedResponse<IUserListItem>> => {
  return instance.get('/admin/users/', { params: { search: search || null } });
};

export const blockUser = (id: string): AxiosPromise => {
  return instance.post(`/admin/users/${id}/block`, { id });
};

export const exportUsersList = (): AxiosPromise => {
  return instance.get('/admin/users/export');
};

export const getWebinars = (
  search: string
): AxiosPromise<IAxiosPaginatedResponse> => {
  return instance.get('/admin/webinars/', { params: { search } });
};

export const createWebinar = (data: object): AxiosPromise => {
  return instance.post('/admin/webinars', data);
};
