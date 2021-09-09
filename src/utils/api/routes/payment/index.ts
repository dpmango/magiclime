import { instance as $api } from '../../index';

export interface IRequest {
  amount: string;
}

export const postRefillBalance = async (
  request: IRequest
): Promise<[Error | null, any | null]> => {
  try {
    const { data } = await $api.post('/payments/buy/', request);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
