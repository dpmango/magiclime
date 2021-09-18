import moment, { Moment } from 'moment';
import i18n from 'i18n';

export const isToday = (date: Moment): boolean =>
  moment().diff(date, 'days') === 0;

export const timeToTimeStamp = (time: Date | string, month = 'MMM'): string => {
  const djsTime = moment(time);
  let mask = `DD ${month}, HH:mm`;

  if (isToday(djsTime)) {
    mask = `${i18n.t('common.dates.today')} HH:mm`;
  } else if (moment().year() !== djsTime.year()) {
    mask = `DD ${month} YYYY, HH:mm`;
  }

  return djsTime.format(mask);
};

export const timeToHHMM = (time: Date | string) => {
  return moment(time).format('HH:mm');
};
