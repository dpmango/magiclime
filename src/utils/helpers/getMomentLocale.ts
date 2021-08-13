import moment from 'moment';
import 'moment/locale/ru';
import 'moment/locale/en-gb';
import { Language } from '../../types/common';

export const getMomentLocale = () => {
  switch (localStorage.getItem('i18nextLng') as Language) {
    case Language.RU:
      moment.locale('ru');
      break;
    case Language.EN:
      moment.locale('en-gb');
      break;
    default:
      moment.locale('ru');
      break;
  }
};
