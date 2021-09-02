import { ICourse } from '../../../../components/pages/Admin/Courses/types';
import { IWebinar } from '../../../../components/pages/Admin/Webinars/types';
import { AxiosPromise } from '../../../../types/common';
import { IAxiosPaginatedResponse } from '../../../../types/interfaces/common';
import { instance } from '../../index';
import { IUserListItem } from '../../../../components/pages/Admin/Users/types';

export const getUsers = (
  search: string,
  page?: number,
  limit?: number
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
  search: string,
  page?: number,
  limit?: number
): AxiosPromise<IAxiosPaginatedResponse<IWebinar>> => {
  return instance.get('/admin/webinars/', {
    params: { search: search || null },
  });
};

export const createWebinar = (data: object): AxiosPromise => {
  return instance.post('/admin/webinars', data);
};

export const getCourses = (
  search: string,
  page?: number,
  limit?: number
): AxiosPromise<IAxiosPaginatedResponse<ICourse>> => {
  return instance.get('/admin/courses/', {
    params: { search: search || null },
  });
};
