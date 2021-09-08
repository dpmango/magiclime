import { instance as $api } from '../../index';

export interface IRequest {
  storeId: string;
  checkoutQueryString: string;
  currency: string;
}

export const postRefillBalance = async (
  request: IRequest
): Promise<[Error | null, any | null]> => {
  try {
    const { data } = await $api({
      baseURL: 'https://btcpay.magiclime.academy/api/v1',
      url: '/invoices/',
      method: 'post',
      data: request,
    });

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
