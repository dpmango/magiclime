import { INewsItem } from '../../../../components/pages/News/types';
import { AxiosPromise } from '../../../../types/common';
import { IAxiosPaginatedResponse } from '../../../../types/interfaces/common';
import { instance } from '../../index';

export const getNews = (): AxiosPromise<IAxiosPaginatedResponse<INewsItem>> => {
  return instance.get('/news/');
};
