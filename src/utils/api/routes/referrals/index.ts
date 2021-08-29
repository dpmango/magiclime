import { AxiosPromise } from 'types/common';
import { IReferralTree } from 'types/interfaces/referrals';
import { instance } from '../../index';

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

  return instance.get(`/auth/users/me/referrals/`, {
    params,
  });
};
