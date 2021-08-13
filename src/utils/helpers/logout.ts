import Cookies from 'js-cookie';
import { deleteAuthHeader } from '../api';
import { logout } from '../../store/reducers/user';
import { store } from '../../store/store';

export const logoutFunc = () => {
  Cookies.remove('access');
  Cookies.remove('refresh');
  deleteAuthHeader();
  store.dispatch(logout());
  window.location.pathname = '/home';
};
