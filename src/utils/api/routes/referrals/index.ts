import { AxiosPromise } from 'types/common';
import { IAxiosPaginatedResponse } from 'types/interfaces/common';
import { IReferralTree, IRererralHistory } from 'types/interfaces/referrals';
import { instance as $api } from '../../index';
import endpoints from '../endpoints';

export const getReferralsService = (data: {
  id?: number | string;
  level: number;
  program: number;
}): AxiosPromise<IReferralTree> => {
  let params: {
    matrixUserId?: number | string;
    level: number;
    program: number;
  } = {
    level: data.level,
    program: data.program,
  };

  if (data.id && data.id !== 'me') {
    params = {
      ...params,
      matrixUserId: data.id,
    };
  }

  return $api.get(endpoints.referrals.list, {
    params,
  });
};

export const buyMatricesService = async ({
  level,
  program,
  matrixUserId,
}: {
  level: number;
  program: number;
  matrixUserId?: number;
}): Promise<[{ status: number } | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.referrals.buy, null, {
      params: {
        level,
        program,
        matrixUserId,
      },
    });
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};

export const getMatricesHistoryService = (
  page: number,
  limit: number,
  queries: any
): AxiosPromise<IAxiosPaginatedResponse<IRererralHistory>> => {
  return $api.get(endpoints.referrals.history, {
    params: {
      page: page || null,
      page_size: limit || null,
    },
  });
};
