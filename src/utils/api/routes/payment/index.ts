import { AxiosPromise } from 'types/common';
import { IAxiosPaginatedResponse } from 'types/interfaces/common';
import { IBalance, IBalanceHistory } from 'types/interfaces/profile';
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

export const getBalanceHistoryService = (
  page: number,
  limit: number,
  queries: any
): AxiosPromise<IAxiosPaginatedResponse<IBalanceHistory>> => {
  return $api.get(endpoints.payments.balanceHistory, {
    params: {
      page: page || null,
      page_size: limit || null,
    },
  });
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
