import { instance as $api } from '../../index';
import endpoints from '../endpoints';

export interface IRequest {
  amount: number;
}

export const getBalance = async (): Promise<[Error | null, any | null]> => {
  try {
    const { data } = await $api.get(endpoints.payments.balance);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};

export const postRefillBalance = async (
  request: IRequest
): Promise<[Error | null, any | null]> => {
  try {
    const { data } = await $api.post(endpoints.payments.buy, request);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
