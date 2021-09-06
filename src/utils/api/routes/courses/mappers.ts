import { IFilter, ICoursesParams } from './index';

export const filterToParams = (filter: IFilter, params: ICoursesParams) => {
  const buildParams = params;

  if (filter) {
    // console.log(filter);
    const { search, categories, difficult, tags } = filter;
    const [level_min, level_max] = filter.lime;
    const [price_min, price_max] = filter.price;

    if (search) {
      buildParams.search = search;
    }

    if (tags && tags.length) {
      console.log('tags', tags);
      buildParams.categories = tags.join(',');
    }

    if (categories && categories.length) {
      buildParams.sub_categories = categories.map((c) => c.id).join(',');
    }

    if (difficult) {
      const mapDifficulty = (name: string): 1 | 2 | 3 | undefined => {
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
        buildParams.student_level = mapDifficulty(difficult);
      }
    }

    if (level_min) {
      buildParams.level_min = level_min;
    }
    if (level_max) {
      buildParams.level_max = level_max;
    }
    if (price_min) {
      buildParams.price_min = price_min;
    }
    if (price_max) {
      buildParams.price_max = price_max;
    }
  }

  return buildParams;
};
