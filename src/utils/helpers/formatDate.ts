import moment, { Moment } from 'moment';

export const isToday = (date: Moment): boolean =>
  moment().diff(date, 'days') === 0;

export const timeToTimeStamp = (time: Date): string => {
  const djsTime = moment(time);
  let mask = 'DD MMM, HH:mm';

  if (isToday(djsTime)) {
    mask = 'сегодня HH:mm';
  } else if (moment().year() !== djsTime.year()) {
    mask = 'DD MMM YYYY, HH:mm';
  }

  return djsTime.format(mask);
};

export const timeToHHMM = (time: Date) => {
  return moment(time).format('HH:mm');
};
