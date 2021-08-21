import { AxiosPromise } from 'types/common';
import { IReferralTree } from 'types/interfaces/referrals';
import { instance } from '../../index';

export const getReferralsService = (data: {
  id: number;
  level: number;
  program: number;
}): AxiosPromise<IReferralTree> => {
  return instance.get(`/auth/users/${data.id}/referrals/`, {
    params: {
      ...data,
    },
  });
};
