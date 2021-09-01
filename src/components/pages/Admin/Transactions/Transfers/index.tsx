import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { TableColumn } from '@consta/uikit/Table';
import { useTranslation } from 'react-i18next';
import BaseTable from '../../../../Common/BaseTable';
import useStyles from '../styles';
import { ITransfer } from '../types';

const Transfers: FC<{ search: string }> = ({ search }) => {
  const [data, setData] = useState<ITransfer[]>([
    {
      id: '1',
      sender: 'Test',
      date: '2021-08-15 15:20:16',
      status: 'Ожидает',
      recipient: 'User',
      count: 190678,
      pin: 190678,
    },
    {
      id: '2',
      sender: 'Test',
      date: '2021-08-15 15:20:16',
      status: 'Ожидает',
      recipient: 'User',
      count: 190678,
      pin: 190678,
    },
  ]);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  const styles = useStyles();

  useEffect(() => {}, [search]);

  const columns: Array<TableColumn<ITransfer>> = [
    {
      title: t('admin.transactions.sender'),
      accessor: 'sender',
    },
    {
      title: t('admin.transactions.recipient'),
      accessor: 'recipient',
    },
    {
      title: t('admin.transactions.count'),
      accessor: 'count',
      renderCell: (row: ITransfer) => <p>{row.count} BTS</p>,
    },
    {
      title: t('admin.transactions.date'),
      accessor: 'date',
      renderCell: (row: ITransfer) => (
        <p>{moment(row.date).format('DD.MM.YYYY')}</p>
      ),
    },
    {
      title: t('admin.transactions.status'),
      accessor: 'status',
      renderCell: (row: ITransfer) => (
        <p className={styles.status}>{row.status}</p>
      ),
    },
    {
      title: t('admin.transactions.pin'),
      accessor: 'pin',
      renderCell: (row: ITransfer) => (
        <pre>
          <p>{row.pin.toString().replace(/\d/g, '$&   ')}</p>
        </pre>
      ),
    },
  ];

  return <BaseTable data={data} columns={columns} loading={loading} />;
};

export default Transfers;
