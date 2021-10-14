import React, { FC, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { Table } from '@consta/uikit/Table';

import Typography from 'components/Common/Typography';

import { formatPrice } from 'utils/helpers/formatPrice';
import { IBonuseHistory } from 'types/interfaces/profile';

import Filters from '../Filter';
import { columns } from './mockData';
import useStyles from '../styles';

interface IProps {
  data: IBonuseHistory[];
}

const HistoryBonuses: FC<IProps> = ({ data }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const [filterQueries, setFilterQueries] = useState({});

  const contentRows = useMemo(() => {
    return data.map((x) => ({
      id: `${x.id}`,
      date: moment(x.date).format('DD.MM.YY HH:mm:ss'),
      price: `${formatPrice(x.amount)}`,
      comment: x.comment,
      balance: `${formatPrice(x.balance)}`,
      // status: x.status,
      // icon: 'TODO',
    }));
  }, [data]);

  return (
    <div>
      <Filters setFilterQueries={setFilterQueries} />

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
    </div>
  );
};

export default HistoryBonuses;
