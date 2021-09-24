import { instance as $api } from '../../index';

interface IBitcoinResponce {
  price: number;
}

export const getBitcoinService = async (): Promise<
  [Error | null, IBitcoinResponce | null]
> => {
  try {
    const { data } = await $api.get('/bitcoin/');

    return [null, data];
  } catch (error: any) {
    return [error, null];
  }
};
