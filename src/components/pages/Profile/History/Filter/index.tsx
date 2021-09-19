import React, { FC, useState, useCallback, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import cns from 'classnames';
import moment from 'moment';
import { Button } from '@consta/uikit/Button';
import { Calendar } from '@consta/uikit/Calendar';
import { TextField } from '@consta/uikit/TextField';
import { IconCalendar } from '@consta/uikit/IconCalendar';

import Typography from 'components/Common/Typography';
import { useClickOutside } from 'hooks/useClickOutside';

import useStyles from './styles';

const HistoryFilter: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const filtersRef = useRef(null);

  const [date, setDate] = useState<string | null>('');
  const [calendar, setCalendar] = useState<[Date?, Date?]>([
    undefined,
    undefined,
  ]);
  const [calendarActive, setCalendarActive] = useState<boolean>(false);
  const [search, setSearch] = useState<string | null>(null);

  const handleCalendarChange = useCallback(({ value }) => {
    setCalendar(value);
    if (value[0] && value[1]) {
      const start = moment(value[0]).format('DD-MM-YYYY');
      const end = moment(value[1]).format('DD-MM-YYYY');

      setDate(`${start} - ${end}`);
      setCalendarActive(false);
    }
  }, []);

  const handleFiltersReset = useCallback(() => {
    setDate('');
    setCalendar([undefined, undefined]);
    setCalendarActive(false);
  }, []);

  const handleFiltersApply = useCallback(() => {
    console.log({ date });
  }, [date]);

  useClickOutside(filtersRef, () => setCalendarActive(false));

  return (
    <div className={styles.filters} ref={filtersRef}>
      <div className={cns(styles.filtersGroup, 'input')}>
        <Typography view="ghost" margin="0 0 6px" size="s" lineHeight="s">
          {t('profile.balance.history.date.label')}
        </Typography>
        <TextField
          value={date}
          size="s"
          placeholder={t('profile.balance.history.date.placeholder')}
          onChange={({ value }) => setDate(value)}
          onFocus={() => setCalendarActive(true)}
          // onBlur={() => setCalendarActive(false)}
          rightSide={IconCalendar}
        />
        <div className={cns(styles.calendar, calendarActive && 'active')}>
          <Calendar
            type="date-range"
            value={calendar}
            onChange={handleCalendarChange}
          />
        </div>
      </div>
      {/* <div className={cns(styles.filtersGroup, 'input')}>
          <Typography view="ghost" margin="0 0 6px" size="s" lineHeight="s">
            {t('profile.balance.history.pare.label')}
          </Typography>
          <Select
            value={payment}
            size="s"
            onChange={({ value }) => setPayment(value)}
            items={paymentSelectList}
          />
        </div> */}
      <div className={styles.filtersGroup}>
        <Button
          view="secondary"
          size="s"
          label={t('profile.balance.history.actions.reset')}
          onClick={handleFiltersReset}
        />
      </div>
      <div className={cns(styles.filtersGroup, 'input')}>
        <Typography view="ghost" margin="0 0 6px" size="s" lineHeight="s">
          {t('profile.balance.history.search.label')}
        </Typography>
        <TextField
          value={search}
          size="s"
          placeholder={t('profile.balance.history.search.placeholder')}
          onChange={({ value }) => setSearch(value)}
        />
      </div>
      <div className={styles.filtersGroup}>
        <Button
          view="primary"
          size="s"
          label={t('profile.balance.history.actions.search')}
          onClick={handleFiltersApply}
        />
      </div>
    </div>
  );
};

export default HistoryFilter;
