import React, { FC, useMemo, memo } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { Table } from '@consta/uikit/Table';

import Typography from 'components/Common/Typography';
import { IRererralHistory } from 'types/interfaces/referrals';

import { columns } from './mockData';
import useStyles from '../styles';

interface IProps {
  data: IRererralHistory[];
}

const HistoryOperations: FC<IProps> = ({ data }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const contentRows = useMemo(() => {
    return data.map((x) => ({
      id: `${x.id}`,
      date: moment(x.date).format('DD.MM.YY HH:mm:ss'),
      action: x.comment,
    }));
  }, [data]);

  return (
    <Table
      borderBetweenColumns
      borderBetweenRows
      // @ts-ignore
      columns={columns}
      rows={contentRows}
      className={styles.table}
      emptyRowsPlaceholder={
        <Typography weight="semibold" size="xl">
          {t('profile.balance.history.empty')}
        </Typography>
      }
    />
  );
};

export default memo(HistoryOperations);
