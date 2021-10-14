import React, { FC, useState, useCallback, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import cns from 'classnames';
import moment from 'moment';
import { Button } from '@consta/uikit/Button';
import { Select } from '@consta/uikit/Select';
import { Calendar } from '@consta/uikit/Calendar';
import { TextField } from '@consta/uikit/TextField';
import { IconCalendar } from '@consta/uikit/IconCalendar';

import Typography from 'components/Common/Typography';
import { useClickOutside } from 'hooks/useClickOutside';
import { SetStateType } from 'types/common';
import { ISelectOption } from 'types/interfaces/common';
import { programOptions } from 'components/pages/Profile/ReferralPartners/functions';

import useStyles from './styles';

const formatMask = 'YYYY-MM-DD';
interface IFilterQueries {
  date?: string; // yyyy-mm-dd
  from_date?: string;
  to_date?: string;
  program?: number;
}

interface IProps {
  setFilterQueries: SetStateType<IFilterQueries>;
}
const HistoryFilter: FC<IProps> = ({ setFilterQueries }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const filtersRef = useRef(null);

  const [date, setDate] = useState<string | null>('');
  const [program, setProgram] = useState<ISelectOption | null>(null);

  const [calendar, setCalendar] = useState<[Date?, Date?]>([
    undefined,
    undefined,
  ]);
  const [calendarActive, setCalendarActive] = useState<boolean>(false);

  const handleCalendarChange = useCallback(({ value }) => {
    setCalendar(value);
    if (value[0] && value[1]) {
      const start = moment(value[0]).format(formatMask);
      const end = moment(value[1]).format(formatMask);

      setDate(`${start} - ${end}`);
      setCalendarActive(false);
    } else if (value[0]) {
      const start = moment(value[0]).format(formatMask);

      setDate(`${start}`);
      setCalendarActive(false);
    }
  }, []);

  const handleFiltersReset = useCallback(() => {
    setFilterQueries({});
    setProgram(null);
    setDate('');
    setCalendar([undefined, undefined]);
    setCalendarActive(false);
  }, []);

  const handleFiltersApply = useCallback(() => {
    let queries = {};

    if (!calendar[1]) {
      queries = {
        date: moment(calendar[0]).format(formatMask),
      };
    } else {
      queries = {
        from_date: moment(calendar[0]).format(formatMask),
        to_date: moment(calendar[1]).format(formatMask),
      };
    }

    if (program && program.id !== 0) {
      queries = {
        ...queries,
        ...{ program: program.id },
      };
    }

    setFilterQueries(queries);
  }, [calendar, program]);

  const handleProgramChange = useCallback((program: ISelectOption | null) => {
    setProgram(program);
  }, []);

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
      <div className={cns(styles.filtersGroup, 'input')}>
        <Typography view="ghost" margin="0 0 6px" size="s" lineHeight="s">
          {t('profile.balance.history.program.label')}
        </Typography>
        <Select
          value={program}
          size="s"
          onChange={({ value }) => handleProgramChange(value)}
          items={[{ id: 0, label: 'Все' }, ...programOptions]}
        />
      </div>
      <div className={styles.filtersGroup}>
        <Button
          view="secondary"
          size="s"
          label={t('profile.balance.history.actions.reset')}
          onClick={handleFiltersReset}
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
