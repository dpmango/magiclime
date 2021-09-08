import { AxiosPromise } from 'types/common';
import { ICourse } from 'types/interfaces/courses';
import { ICourseFull } from 'components/pages/CourseTask/types';
import { instance as $api } from '../../index';
import { filterToParams } from './mappers';

interface ICoursesResponce {
  count: number;
  next: number | null;
  previous: number | null;
  results: ICourse[];
}

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
  // todo - education types
  price_max?: string;
  price_min?: string;
  level_max?: string;
  level_min?: string;
}

export const getCoursesService = async (
  filter: IFilter
): Promise<[Error | null, ICoursesResponce | null]> => {
  try {
    const params: ICoursesParams = filterToParams(filter, {});

    const { data } = await $api.get('/courses/', { params });

    return [null, data];
  } catch (error) {
    return [error, null];
  }
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
