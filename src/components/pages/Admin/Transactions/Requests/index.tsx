import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { TableColumn } from '@consta/uikit/Table';
import { useTranslation } from 'react-i18next';
import BaseTable from '../../../../Common/BaseTable';
import useStyles from '../styles';
import { IRequest } from '../types';

const Requests: FC<{ search: string }> = ({ search }) => {
  const [data, setData] = useState<IRequest[]>([
    {
      id: '1',
      username: 'Test',
      date: '2021-08-15 15:20:16',
      status: 'Ожидает подтверждения',
      ip: '192.0.0.1',
      count: 190678,
      earned: 190678,
      remainder: 100000,
      withdrew: 90678,
    },
    {
      id: '2',
      username: 'Test',
      date: '2021-08-15 15:20:16',
      status: 'Ожидает подтверждения',
      ip: '192.0.0.1',
      count: 190678,
      earned: 190678,
      remainder: 100000,
      withdrew: 90678,
    },
  ]);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  const styles = useStyles();

  useEffect(() => {}, [search]);

  const Money: FC<{ text: number }> = ({ text }) => <p>{text} BTS</p>;

  const columns: Array<TableColumn<IRequest>> = [
    {
      title: t('admin.transactions.login'),
      accessor: 'username',
    },
    {
      title: t('admin.transactions.time'),
      accessor: 'date',
      renderCell: (row: IRequest) => (
        <p>{moment(row.date).format('DD.MM.YYYY HH:mm:ss')}</p>
      ),
    },
    {
      title: t('admin.transactions.ip'),
      accessor: 'ip',
    },
    {
      title: t('admin.transactions.count'),
      accessor: 'count',
      renderCell: (row: IRequest) => <Money text={row.count} />,
    },
    {
      title: t('admin.transactions.status'),
      accessor: 'status',
      renderCell: (row: IRequest) => (
        <p className={styles.status}>{row.status}</p>
      ),
    },
    {
      title: t('admin.transactions.earned'),
      accessor: 'earned',
      renderCell: (row: IRequest) => <Money text={row.earned} />,
    },
    {
      title: t('admin.transactions.withdrew'),
      accessor: 'withdrew',
      renderCell: (row: IRequest) => <Money text={row.withdrew} />,
    },
    {
      title: t('admin.transactions.remainder'),
      accessor: 'remainder',
      renderCell: (row: IRequest) => <Money text={row.remainder} />,
    },
  ];

  return <BaseTable data={data} columns={columns} loading={loading} />;
};

export default Requests;
