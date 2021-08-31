import React, { FC, useEffect, useState } from 'react';
import { TableColumn } from '@consta/uikit/Table';
import { useTranslation } from 'react-i18next';
import BaseTable from '../../../../Common/BaseTable';
import { IRequest } from '../types';

const TransactionsHistory: FC<{ search: string }> = ({ search }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<IRequest[]>([]);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {}, [search]);

  const Money: FC<{ text: number }> = ({ text }) => <p>{text} BTS</p>;

  const columns: Array<TableColumn<IRequest>> = [
    {
      title: t('admin.transactions.login'),
      accessor: 'username',
    },
    {
      title: t('admin.transactions.login'),
      accessor: 'count',
      renderCell: (row: IRequest) => <Money text={row.count} />,
    },
    {
      title: t('admin.transactions.status'),
      accessor: 'status',
      renderCell: (row: IRequest) => <p>{row.status}</p>,
    },
    {
      title: t('admin.transactions.userId'),
      accessor: 'earned',
      renderCell: (row: IRequest) => <Money text={row.earned} />,
    },
    {
      title: t('admin.transactions.address'),
      accessor: 'withdrew',
      renderCell: (row: IRequest) => <Money text={row.withdrew} />,
    },
    {
      title: t('admin.transactions.address'),
      accessor: 'remainder',
      renderCell: (row: IRequest) => <Money text={row.remainder} />,
    },
  ];

  return <BaseTable data={data} columns={columns} loading={loading} />;
};

export default TransactionsHistory;
