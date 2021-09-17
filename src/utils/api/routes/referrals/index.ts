import { AxiosPromise } from 'types/common';
import { IReferralTree } from 'types/interfaces/referrals';
import { instance } from '../../index';
import endpoints from '../endpoints';

export const getReferralsService = (data: {
  id: number | string;
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

  return instance.get(endpoints.referrals.list, {
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
    const { data } = await instance.post(endpoints.referrals.buy, null, {
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
