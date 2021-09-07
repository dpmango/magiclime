import { instance } from 'utils/api/index';
import { AxiosPromise } from 'types/common';
import { IAxiosPaginatedResponse } from 'types/interfaces/common';
import { ICategory, ITag } from 'types/interfaces/meta';

export const getCategoriesService = (
  page?: number
): AxiosPromise<IAxiosPaginatedResponse<ICategory>> => {
  return instance.get('categories/', {
    params: { page },
  });
};

export const getCitiesService = (
  page?: number
): AxiosPromise<IAxiosPaginatedResponse<ICategory>> => {
  return instance.get('cities/', {
    params: { page },
  });
};

export const getCountriesService = (
  page?: number
): AxiosPromise<IAxiosPaginatedResponse<ICategory>> => {
  return instance.get('countries/', {
    params: { page },
  });
};

export const getTagsService = (
  page?: number
): AxiosPromise<IAxiosPaginatedResponse<ITag>> => {
  return instance.get('tags/', {
    params: { page },
  });
};

export const getRatesService = (
  page?: number
): AxiosPromise<{ price: number }> => {
  return instance.get('bitcoin/');
};
