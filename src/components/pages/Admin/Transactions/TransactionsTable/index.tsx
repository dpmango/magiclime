import React, { FC, useState } from 'react';
import { Table } from '@consta/uikit/Table';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { Button } from '@consta/uikit/Button';
import { TextField } from '@consta/uikit/TextField';
import Flex from '../../../../Common/Flex';
import { ITransaction } from '../types';
import { Accrue, Status } from './customCells';

const TransactionsTable: FC<{ data: ITransaction[] }> = ({ data }) => {
  const { t } = useTranslation();

  const columns = [
    {
      id: '1',
      title: t('admin.userId'),
      accessor: 'user_id',
      align: 'center',
    },
    {
      id: '2',
      title: t('admin.transactionTime'),
      accessor: 'date',
      align: 'center',
      renderCell: (row: ITransaction) => (
        <p>{moment(row.date).format('DD.MM.YYYY HH:mm')}</p>
      ),
    },
    {
      id: '3',
      title: t('admin.login'),
      accessor: 'username',
      align: 'center',
    },
    {
      id: '4',
      title: t('admin.address'),
      accessor: 'address',
      align: 'center',
    },
    {
      id: '5',
      title: t('admin.status'),
      accessor: 'status',
      renderCell: (row: ITransaction) => <Status row={row} />,
      align: 'center',
    },
    {
      id: '6',
      title: '',
      accessor: 'id',
      align: 'center',
      width: 300,
      renderCell: (row: ITransaction) => <Accrue row={row} />,
    },
  ];

  return (
    <Table
      // @ts-ignore
      columns={columns}
      borderBetweenColumns
      borderBetweenRows
      isResizable
      verticalAlign="center"
      rows={data}
    />
  );
};

export default TransactionsTable;
