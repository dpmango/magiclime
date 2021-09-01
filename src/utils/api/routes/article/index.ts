import { instance } from 'utils/api/index';
import { AxiosPromise } from 'types/common';
import { IArticle } from 'types/interfaces/article';
import { IAxiosPaginatedResponse } from 'types/interfaces/common';

export const getArticlesService = (
  page?: number
): AxiosPromise<IAxiosPaginatedResponse<IArticle>> => {
  return instance.get('articles/', {
    params: { page },
  });
};

export const getArticleByIdService = async (
  id: string | number
): Promise<[Error | null, null]> => {
  try {
    const { data } = await instance.get(`articles/${id}/`);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
