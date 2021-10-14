import { AxiosPromise } from 'types/common';
import { ICourse, ICourseRecommended } from 'types/interfaces/courses';
import { ICourseFull, IChapter } from 'components/pages/CourseTask/types';
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
  queries: any
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
  [any | null, ICourseRecommended[] | null]
> => {
  try {
    const { data } = await $api.get(endpoints.courses.recommended);
    return [null, data];
  } catch (error: any) {
    return [error, null];
  }
};

export const buyCourseService = async (
  id: number | string
): Promise<[any | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.courses.buy(id));

    return [null, data];
  } catch (error: any) {
    return [error, null];
  }
};

// courseTask actions
export const getCourseService = async (
  id: string
): Promise<[any | null, ICourseFull | null]> => {
  try {
    const { data } = await $api.get(endpoints.courses.byId(id));

    return [null, data];
  } catch (error: any) {
    return [error, null];
  }
};

export const getCourseChapterService = async (
  id: number
): Promise<[any | null, IChapter | null]> => {
  try {
    const { data } = await $api.get(endpoints.courses.currentChapter(id));

    return [null, data];
  } catch (error: any) {
    return [error, null];
  }
};

export const completeCourseService = async (
  id: number
): Promise<[any | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.courses.completeCourse(id));

    return [null, data];
  } catch (error: any) {
    return [error, null];
  }
};

export const completeChapterService = async (
  id: number
): Promise<[any | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.courses.completeChapter(id));

    return [null, data];
  } catch (error: any) {
    return [error, null];
  }
};

export const completeExerciseService = async (
  id: number
): Promise<[any | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.courses.completeExercise(id));

    return [null, data];
  } catch (error: any) {
    return [error, null];
  }
};
