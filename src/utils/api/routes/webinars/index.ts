import {
  IFilters,
  IWebinar,
} from '../../../../components/pages/Webinars/types';
import { AxiosPromise } from '../../../../types/common';
import { IAxiosPaginatedResponse } from '../../../../types/interfaces/common';
import { instance } from '../../index';

export const getWebinarsList = (
  page: number,
  limit: number,
  queries: any
): AxiosPromise<IAxiosPaginatedResponse<IWebinar>> => {
  return instance.get('/webinars/', {
    params: {
      page: page || null,
      page_size: limit || null,
      search: queries.search || null,
      city: queries.city ? queries.city : null,
      categories: queries.categories.length
        ? queries.categories.join(',')
        : null,
    },
  });
};

export const getWebinar = (id: number): AxiosPromise<IWebinar> => {
  return instance.get(`/webinars/${id}/`);
};
