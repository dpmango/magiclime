import { AxiosPromise } from 'types/common';
import { IAxiosPaginatedResponse } from 'types/interfaces/common';
// import { IBalance } from 'types/interfaces/profile';
import { getErrorMessage } from 'utils/helpers/getErrorMessage';
import { instance as $api } from '../../index';
import endpoints from '../endpoints';

export const getApplicationsService = async (): Promise<
  [string | null, any | null]
> => {
  try {
    const { data } = await $api.get(endpoints.position.get);

    return [null, data];
  } catch (error) {
    return [getErrorMessage(error), null];
  }
};

export const postApplicationService = async (req: {
  from_user: number;
  to_user: number;
}): Promise<[string | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.position.post, {
      from_user: req.from_user,
      to_user: req.to_user,
    });

    return [null, data];
  } catch (error) {
    return [getErrorMessage(error), null];
  }
};
