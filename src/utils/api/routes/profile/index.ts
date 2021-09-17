import { AxiosPromise } from 'types/common';
import { IAxiosPaginatedResponse } from 'types/interfaces/common';
import { IAchievement } from 'types/interfaces/profile';
import { instance as $api } from '../../index';
import endpoints from '../endpoints';

export const getAchivementsService = (): AxiosPromise<
  IAxiosPaginatedResponse<IAchievement>
> => {
  return $api.get(endpoints.profile.achievements);
};

export const getEventsService = (): AxiosPromise<any> => {
  return $api.get(endpoints.profile.events);
};
