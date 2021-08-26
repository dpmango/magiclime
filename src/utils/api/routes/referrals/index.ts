import { AxiosPromise } from 'types/common';
import { IReferralTree } from 'types/interfaces/referrals';
import { instance } from '../../index';

export const getReferralsService = (data: {
  id: number;
  level: number;
  program: number;
}): AxiosPromise<IReferralTree> => {
  return instance.get(`/auth/users/me/referrals/`, {
    params: {
      matrixUserId: data.id,
      level: data.level,
      program: data.program,
    },
  });
};
