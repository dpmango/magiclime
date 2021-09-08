import { AxiosPromise } from 'types/common';
import { ICourse } from 'types/interfaces/courses';
import { ICourseFull } from 'components/pages/CourseTask/types';
import { IAxiosPaginatedResponse } from 'types/interfaces/common';
import { instance as $api } from '../../index';
import { filterToParams } from './mappers';

export interface IFilter {
  search?: string;
  tags: number[];
  categories: { id: number; title: string }[];
  lime: [string, string];
  price: [string, string];
  difficult: string;
}

export interface ICoursesParams {
  search?: string;
  categories?: string;
  sub_categories?: string;
  student_level?: 1 | 2 | 3;
  price_max?: string;
  price_min?: string;
  level_max?: string;
  level_min?: string;
}

export const getCoursesService = (
  page: number,
  limit: number,
  queries: IFilter
): AxiosPromise<IAxiosPaginatedResponse<ICourse>> => {
  const params: ICoursesParams = filterToParams(queries, {});

  return $api.get('/courses/', {
    params: {
      page: page || null,
      page_size: limit || null,
      ...params,
    },
  });
};

export const getCourseModule = async (
  id: string
): Promise<[Error | null, ICourseFull | null]> => {
  try {
    const { data } = await $api.get(`/courses/${id}/`);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
