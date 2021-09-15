import { IUserRating } from '../../../../components/pages/Rating/types';
import { AxiosPromise } from '../../../../types/common';
import { IAxiosPaginatedResponse } from '../../../../types/interfaces/common';
import { instance } from '../../index';

export const getRating = (
  username: string
): AxiosPromise<IAxiosPaginatedResponse<IUserRating>> => {
  return instance.get('/ratings/', {
    params: {
      username: username || null,
    },
  });
};
