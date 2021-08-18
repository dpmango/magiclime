import React, { FC, useState } from 'react';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import Typography from '../../../Common/Typography';
import { Tabs } from '@consta/uikit/Tabs';
import { ITransaction } from './types';
import TransactionsTable from './TransactionsTable';

const Transactions: FC = () => {
  const { t } = useTranslation();
  const tabs = [
    { id: 1, name: t('admin.receiptsHistory') },
    { id: 2, name: t('admin.outputRequest') },
  ];

  const [tab, setTab] = useState(tabs[0]);
  const [transactions, setTransactions] = useState<ITransaction[]>([
    {
      id: '1',
      username: 'Test',
      date: '2021-08-15 15:20',
      status: 'Ожидает подтверждения',
      address: 'bitcoin000',
      user_id: 'user_3892',
    },
    {
      id: '2',
      username: 'Test',
      date: '2021-08-15 15:20',
      status: 'Ожидает подтверждения',
      address: 'bitcoin000',
      user_id: 'user_3892',
    },
  ]);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Typography weight={'semibold'} size={'3xl'} margin={'0 0 24px'}>
        {t('admin.transactions')}
      </Typography>
      <Tabs
        value={tab}
        onChange={({ value }) => setTab(value)}
        items={tabs}
        getLabel={(item) => item.name}
        size="m"
        className={styles.tabs}
      />
      <TransactionsTable data={transactions} />
    </div>
  );
};

export default Transactions;
