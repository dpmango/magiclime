import { AxiosPromise } from 'types/common';
import { IAxiosPaginatedResponse } from 'types/interfaces/common';
import { IAchievement, IEvent } from 'types/interfaces/profile';
import { IProgram } from '../../../../components/pages/Profile/types';
import { instance as $api } from '../../index';
import endpoints from '../endpoints';

export const getAchivementsService = (): AxiosPromise<
  IAxiosPaginatedResponse<IAchievement>
> => {
  return $api.get(endpoints.profile.achievements);
};

export const getEventsService = (): AxiosPromise<
  IAxiosPaginatedResponse<IEvent>
> => {
  return $api.get(endpoints.profile.events);
};

export const getProgramsService = (): AxiosPromise<
  IAxiosPaginatedResponse<IEvent>
> => {
  return $api.get(endpoints.profile.options.programs);
};

export const getProgramsList = (): AxiosPromise<IProgram[]> => {
  return $api.get(endpoints.profile.programsList);
};

export const getUserProgramLevel = (
  program: number
): AxiosPromise<{
  max_level: number | null;
}> => {
  return $api.get(endpoints.profile.getLevel, { params: { program } });
};
