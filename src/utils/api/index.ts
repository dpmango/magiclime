import Axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { refreshAuthToken } from './routes/auth';

export const instance = Axios.create({
  baseURL: ' http://178.154.196.41:8081/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token: string) => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const deleteAuthHeader = () => {
  delete instance.defaults.headers.Authorization;
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

    if (
      error?.response?.status === 401 &&
      !originalRequest._retry &&
      originalRequest.headers.Authorization
    ) {
      originalRequest._retry = true;

      const refreshToken = Cookies.get('refresh') || '';

      const response = await refreshAuthToken(refreshToken);
      if (response.status === 200) {
        const { access } = response.data;
        Cookies.set('access', access);
        originalRequest.headers['Authorization'] = 'Bearer ' + access;
        return Axios(originalRequest);
      }
    }

    return Promise.reject(error.response);
  }
);
