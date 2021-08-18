import React, { FC, useState } from 'react';
import { Table } from '@consta/uikit/Table';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { Button } from '@consta/uikit/Button';
import Flex from '../../../../Common/Flex';
import useStyles from '../styles';
import { ITransaction } from '../types';
import { TextField } from '@consta/uikit/TextField';

const TransactionsTable: FC<{ data: ITransaction[] }> = ({ data }) => {
  const { t } = useTranslation();
  const styles = useStyles();

  const checkTransactionStatus = (id: string) => {};

  const accrueMoney = (money: string, id: string) => {};

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
      renderCell: (row: ITransaction) => (
        <Flex align={'center'} justify={'space-between'} padding={'0 10px'}>
          {row.status}
          <Button
            view={'primary'}
            size={'s'}
            onClick={() => checkTransactionStatus(row.id)}
            label={t('admin.check')}
            className={styles.checkButton}
          />
        </Flex>
      ),
      align: 'center',
    },
    {
      id: '6',
      title: '',
      accessor: 'id',
      align: 'center',
      width: 300,
      renderCell: (row: ITransaction) => {
        const [value, setValue] = useState('');
        return (
          <Flex align={'center'}>
            <TextField
              value={value}
              type={'number'}
              onChange={({ value }) => setValue(value || '')}
              placeholder="000.00"
              form={'roundClear'}
              size={'s'}
            />
            <Button form="brickRound" size={'s'} label={t('admin.accrue')} />
          </Flex>
        );
      },
    },
  ];

  return (
    <Table
      //@ts-ignore
      columns={columns}
      borderBetweenColumns={true}
      borderBetweenRows={true}
      isResizable={true}
      verticalAlign={'center'}
      rows={data}
    />
  );
};

export default TransactionsTable;
