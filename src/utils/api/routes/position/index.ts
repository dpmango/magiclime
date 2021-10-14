import { AxiosPromise } from 'types/common';
import {
  IApplicationOutcoming,
  IApplicationIncoming,
} from 'types/interfaces/profile';
import { getErrorMessage } from 'utils/helpers/getErrorMessage';
import { instance as $api } from '../../index';
import endpoints from '../endpoints';

export const getOutcomingApplicationsService = async (): Promise<
  [string | null, IApplicationOutcoming[] | null]
> => {
  try {
    const { data } = await $api.get(endpoints.position.outcoming);

    return [null, data];
  } catch (error: any) {
    return [getErrorMessage(error), null];
  }
};

export const getIncomingApplicationsService = async (): Promise<
  [string | null, IApplicationIncoming[] | null]
> => {
  try {
    const { data } = await $api.get(endpoints.position.incoming);

    return [null, data];
  } catch (error: any) {
    return [getErrorMessage(error), null];
  }
};

export const postApplicationService = async (req: {
  from_user: number;
  to_user?: number;
  level: number;
  program: number;
}): Promise<[string | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.position.post, {
      from_user: req.from_user,
      to_user: req.to_user,
      level: req.level,
      program: req.program,
    });

    return [null, data];
  } catch (error: any) {
    return [getErrorMessage(error), null];
  }
};

export const approveApplicationService = async (
  id: number
): Promise<[string | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.position.approve(id));

    return [null, data];
  } catch (error: any) {
    return [getErrorMessage(error), null];
  }
};

export const rejectApplicationService = async (
  id: number
): Promise<[string | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.position.reject(id));

    return [null, data];
  } catch (error: any) {
    return [getErrorMessage(error), null];
  }
};

export const getActiveIncomingApplicationsService = (): AxiosPromise<
  IApplicationIncoming[]
> => {
  return $api.get(endpoints.position.activeIncoming);
};
