import { AxiosPromise } from 'types/common';
import { IBalance } from 'types/interfaces/profile';
import { instance as $api } from '../../index';
import endpoints from '../endpoints';

export interface IRequestRefill {
  amount: number;
}

export interface IRequestWithdrawal {
  amount: number;
}

export const getBalanceService = (): AxiosPromise<IBalance> => {
  return $api.get(endpoints.payments.balance);
};

export const postRefillBalance = async (
  request: IRequestRefill
): Promise<[Error | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.payments.buy, request);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};

export const postWithdrawalBalance = async (
  request: IRequestWithdrawal
): Promise<[Error | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.payments.sell, request);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
