import { ICourse } from '../../../../components/pages/Admin/Courses/types';
import { IWebinar } from '../../../../components/pages/Admin/Webinars/types';
import { AxiosPromise } from '../../../../types/common';
import { IAxiosPaginatedResponse } from '../../../../types/interfaces/common';
import { instance } from '../../index';
import { IUserListItem } from '../../../../components/pages/Admin/Users/types';
import endpoints from '../endpoints';

export const getUsers = (
  search: string,
  page?: number,
  limit?: number
): AxiosPromise<IAxiosPaginatedResponse<IUserListItem>> => {
  return instance.get(endpoints.admin.users, { params: { search } });
};

export const blockUser = (id: string): AxiosPromise => {
  return instance.post(endpoints.admin.blockUser(id), { id });
};

export const exportUsersList = (): AxiosPromise => {
  return instance.get(endpoints.admin.usersExport);
};

export const getWebinars = (
  search: string,
  page?: number,
  limit?: number
): AxiosPromise<IAxiosPaginatedResponse<IWebinar>> => {
  return instance.get(endpoints.admin.webinars, { params: { search } });
};

export const createWebinar = (data: object): AxiosPromise => {
  return instance.post(endpoints.admin.webinars, data);
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
