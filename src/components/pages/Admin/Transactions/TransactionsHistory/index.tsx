import React, { FC, useEffect, useState } from 'react';
import { TableColumn } from '@consta/uikit/Table';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import BaseModal from '../../../../Common/BaseModal';
import BaseTable from '../../../../Common/BaseTable';
import AccountManagement from '../AccountManagement';
import { ITransaction } from '../types';
import { Status } from './Status';

const TransactionsHistory: FC<{ search: string }> = ({ search }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<ITransaction[]>([
    {
      id: '1',
      username: 'Test',
      date: '2021-08-15 15:20:16',
      status: 'Ожидает подтверждения',
      address: 'bitcoin000',
      user_id: 'user_3892',
    },
    {
      id: '2',
      username: 'Test',
      date: '2021-08-15 15:20:19',
      status: 'Ожидает подтверждения',
      address: 'bitcoin000',
      user_id: 'user_3892',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {}, [search]);

  const columns: Array<TableColumn<ITransaction>> = [
    {
      title: t('admin.transactions.userId'),
      accessor: 'user_id',
    },
    {
      title: t('admin.transactions.time'),
      accessor: 'date',
      renderCell: (row: ITransaction) => (
        <p>{moment(row.date).format('DD.MM.YYYY HH:mm:ss')}</p>
      ),
    },
    {
      title: t('admin.transactions.login'),
      accessor: 'username',
    },
    {
      title: t('admin.transactions.address'),
      accessor: 'address',
    },
    {
      title: t('admin.transactions.status'),
      accessor: 'status',
      renderCell: (row: ITransaction) => (
        <Status row={row} openManagement={() => setOpen(true)} />
      ),
      width: 600,
    },
  ];

  return (
    <>
      <BaseTable data={data} columns={columns} loading={loading} />
      <BaseModal
        title={t('admin.transactions.accountManagement')}
        isOpen={open}
        setModalOpen={setOpen}
        dynamicSize
      >
        <AccountManagement />
      </BaseModal>
    </>
  );
};

export default TransactionsHistory;
