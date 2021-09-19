import { AxiosPromise } from 'types/common';
import { IAxiosPaginatedResponse } from 'types/interfaces/common';
import {
  IBalance,
  IBalanceHistory,
  IBonuseHistory,
} from 'types/interfaces/profile';
import { getErrorMessage } from 'utils/helpers/getErrorMessage';
import { instance as $api } from '../../index';
import endpoints from '../endpoints';

export interface IRequestRefill {
  amount: number;
}

export interface IRequestWithdrawal {
  amount: number;
  wallet: string;
}

export interface IRequestTransfer {
  amount: number;
  to_user: string;
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

export const getBonuseHistoryService = (
  page: number,
  limit: number,
  queries: any
): AxiosPromise<IAxiosPaginatedResponse<IBonuseHistory>> => {
  return $api.get(endpoints.payments.bonuseHistory, {
    params: {
      page: page || null,
      page_size: limit || null,
    },
  });
};

export const postRefillBalance = async (
  request: IRequestRefill
): Promise<[string | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.payments.buy, request);

    return [null, data];
  } catch (error) {
    return [getErrorMessage(error), null];
  }
};

export const postWithdrawalBalance = async (
  request: IRequestWithdrawal
): Promise<[string | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.payments.sell, request);

    return [null, data];
  } catch (error) {
    return [getErrorMessage(error), null];
  }
};

export const postTransferBalance = async (
  request: IRequestTransfer
): Promise<[string | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.payments.transfer, request);

    return [null, data];
  } catch (error) {
    console.log(error);

    return [getErrorMessage(error), null];
  }
};
