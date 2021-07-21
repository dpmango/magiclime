import Axios, { AxiosResponse } from 'axios';
import { instance } from '../../index';

type AxiosPromise<T = any> = Promise<AxiosResponse<T>>;

export const loginUser = (data: {
  email: string;
  password: string;
}): AxiosPromise<{ refresh: string; access: string }> => {
  return instance.post('/', data);
};
