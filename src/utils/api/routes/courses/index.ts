import { AxiosPromise } from 'types/common';
import { ICourse } from 'types/interfaces/courses';
import { instance as $api } from '../../index';

interface ICoursesResponce {
  count: number;
  next: number | null;
  previous: number | null;
  results: ICourse[];
}

interface IFilter {
  search?: string;
  categories: { id: number; title: string }[];
  lime: [string, string];
  price: [string, string];
  difficult: string;
}

export const getCoursesService = async (
  filter: IFilter
): Promise<[Error | null, ICoursesResponce | null]> => {
  try {
    const params: any = {};

    if (filter) {
      console.log(filter);
      const { search, categories, difficult } = filter;
      const [level_min, level_max] = filter.lime;
      const [price_min, price_max] = filter.price;

      if (search) {
        params.search = search;
      }

      if (categories && categories.length) {
        params.categories = filter.categories.map((c) => c.id).join(',');
      }

      if (difficult) {
        const mapDifficulty = (name: string): number | undefined => {
          switch (name) {
            case 'JUNIOR':
              return 1;
            case 'MIDDLE':
              return 2;
            case 'SENIOR':
              return 3;
            default:
              return undefined;
          }
        };

        if (mapDifficulty(difficult)) {
          params.student_level = mapDifficulty(difficult);
        }
      }

      if (level_min) {
        params.level_min = level_min;
      }
      if (level_max) {
        params.level_max = level_max;
      }
      if (price_min) {
        params.price_min = price_min;
      }
      if (price_max) {
        params.price_max = price_max;
      }
    }
    const { data } = await $api.get('/courses/', { params });

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
