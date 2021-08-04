import Axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

export const instance = Axios.create({
  baseURL: 'https://psyoffice.sixhands.co/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token: string) => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error?.response?.status === 429) {
      console.log('Очень много запросов на сервер. Пожалуйста, подождите');
      return error.response;
    }

    const originalRequest: typeof error.config & { _retry?: boolean } =
      error.config;

    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // const refreshToken = Cookies.get('refresh-token') ?? ''
      //
      // const response = (await securityAPI.refreshToken(refreshToken)) as AxiosResponse
      // if (response.status === 200) {
      //     const { access } = response.data
      //     Cookies.set('access-token', access)
      //     originalRequest.headers['Authorization'] = 'Bearer ' + access
      //     return Axios(originalRequest)
      // }
    }

    return Promise.reject(error.response);
  }
);
