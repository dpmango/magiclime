import Axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { refreshAuthToken } from './routes/auth';
import { logoutFunc } from '../helpers/logout';

export const instance = Axios.create({
  baseURL: 'http://178.154.196.41:8081/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token: string) => {
  instance.defaults.headers.Authorization = `JWT ${token}`;
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

    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = Cookies.get('refresh') || '';

      try {
        const response = await refreshAuthToken(refreshToken);
        const { access } = response.data;
        Cookies.set('access', access, { expires: 10 / 24 });
        originalRequest.headers['Authorization'] = 'Bearer ' + access;
        return Axios(originalRequest);
      } catch (err) {
        logoutFunc();
      }
    }

    return Promise.reject(error.response);
  }
);
