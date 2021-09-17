import { AxiosPromise } from 'types/common';
import { ICourse, ICourseRecommended } from 'types/interfaces/courses';
import { ICourseFull } from 'components/pages/CourseTask/types';
import { IAxiosPaginatedResponse } from 'types/interfaces/common';
import { instance as $api } from '../../index';
import { filterToParams } from './mappers';
import endpoints from '../endpoints';

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

  return $api.get(endpoints.courses.root, {
    params: {
      page: page || null,
      page_size: limit || null,
      ...params,
    },
  });
};

export const getRecommendedCourseService = async (): Promise<
  [Error | null, ICourseRecommended[] | null]
> => {
  try {
    const { data } = await $api.get(endpoints.courses.recommended);
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};

export const getCourseModule = async (
  id: string
): Promise<[Error | null, ICourseFull | null]> => {
  try {
    const { data } = await $api.get(endpoints.courses.byId(id));

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};

export const buyCourseService = async (
  id: number | string
): Promise<[Error | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.courses.buy(id));

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
