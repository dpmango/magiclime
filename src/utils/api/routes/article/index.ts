import { instance } from 'utils/api/index';
import { AxiosPromise } from 'types/common';
import { IArticle } from 'types/interfaces/article';
import { IAxiosPaginatedResponse } from 'types/interfaces/common';
import { ArticlesPayloadType } from 'store/reducers/article/types';

export const getArticlesService = ({
  page,
  tags,
}: ArticlesPayloadType): AxiosPromise<IAxiosPaginatedResponse<IArticle>> => {
  const convertedTags = tags && tags.length ? tags.join('&tags=') : undefined;

  return instance.get('articles/', {
    params: { page, tags: convertedTags },
  });
};

export const getArticleByIdService = async (
  id: string | number
): Promise<[Error | null, null]> => {
  try {
    const { data } = await instance.get(`articles/${id}/`);

    return [null, data];
  } catch (error: any) {
    return [error, null];
  }
};
