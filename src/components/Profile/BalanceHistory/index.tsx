import React, { FC, useState, useCallback, useRef } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Table } from '@consta/uikit/Table';
import { Button } from '@consta/uikit/Button';
import { Calendar } from '@consta/uikit/Calendar';
import { TextField } from '@consta/uikit/TextField';
import { Select } from '@consta/uikit/Select';
import { IconCalendar } from '@consta/uikit/IconCalendar';
import { useClickOutside } from 'hooks/useClickOutside';
import cns from 'classnames';
import moment from 'moment';

import { columns, content } from './mockData';
import useStyles from './styles';

type SelectItem = {
  label: string;
  id: number;
};

const paymentSelectList: SelectItem[] = [
  {
    label: 'Все способы оплаты',
    id: 1,
  },
  {
    label: 'BitLime',
    id: 2,
  },
  {
    label: 'BitBox',
    id: 3,
  },
];

const BalanceHistory: FC = () => {
  const styles = useStyles();

  const filtersRef = useRef(null);

  const [date, setDate] = useState<string | null>('');
  const [calendar, setCalendar] = useState<[Date?, Date?]>([
    undefined,
    undefined,
  ]);
  const [calendarActive, setCalendarActive] = useState<boolean>(false);
  const [payment, setPayment] = useState<SelectItem | null>(
    paymentSelectList[0]
  );

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
    setPayment(paymentSelectList[0]);
  }, []);

  const handleFiltersApply = useCallback(() => {
    console.log({ date, payment });
  }, [date, payment]);

  useClickOutside(filtersRef, () => setCalendarActive(false));

  return (
    <div className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        История пополнений
      </Typography>

      <div className={styles.filters} ref={filtersRef}>
        <div className={cns(styles.filtersGroup, 'input')}>
          <Typography view="ghost" margin="0 0 6px" size="s" lineHeight="s">
            Дата
          </Typography>
          <TextField
            value={date}
            size="s"
            placeholder="Выберите дату"
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
            Пара
          </Typography>
          <Select
            value={payment}
            size="s"
            onChange={({ value }) => setPayment(value)}
            items={paymentSelectList}
          />
        </div>
        <div className={styles.filtersGroup}>
          <Button
            view="secondary"
            size="s"
            label="Сброс"
            onClick={handleFiltersReset}
          />
        </div>
        <div className={styles.filtersGroup}>
          <Button
            view="primary"
            size="s"
            label="Поиск"
            onClick={handleFiltersApply}
          />
        </div>
      </div>
      <Table
        borderBetweenColumns
        borderBetweenRows
        columns={columns}
        rows={content}
        className={styles.table}
        emptyRowsPlaceholder={
          <Typography weight="semibold" size="xl">
            Здесь пока нет данных
          </Typography>
        }
      />
    </div>
  );
};

export default BalanceHistory;
