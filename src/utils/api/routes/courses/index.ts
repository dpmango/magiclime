import { AxiosPromise } from 'types/common';
import { ICourse } from 'types/interfaces/courses';
import { instance as $api } from '../../index';

interface ICoursesResponce {
  count: number;
  next: number | null;
  previous: number | null;
  results: ICourse[];
}

export const getCoursesService = async (
  search?: string
): Promise<[Error | null, ICoursesResponce | null]> => {
  try {
    const { data } = await $api.get('/courses/', { params: { search } });

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
