import { instance } from 'utils/api/index';
import { AxiosPromise } from 'types/common';
import { IArticle, IArticlesList } from 'types/interfaces/article';

export const getArticlesService = (
  page?: number
): AxiosPromise<IArticlesList> => {
  return instance.get('articles/', {
    params: { page },
  });
};

export const getArticleByIdService = (id: number): AxiosPromise<IArticle> => {
  return instance.get(`articles/${id}/`);
};
