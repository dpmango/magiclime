import { Button } from '@consta/uikit/Button';
import { IconSearch } from '@consta/uikit/IconSearch';
import { TextField } from '@consta/uikit/TextField';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { Tabs } from '@consta/uikit/Tabs';
import { useTranslation } from 'react-i18next';
import { useDebounce } from '../../../../hooks/useDebounce';
import Flex from '../../../Common/Flex';
import Requests from './Requests';
import useStyles from './styles';
import Typography from '../../../Common/Typography';
import TransactionsHistory from './TransactionsHistory';
import Transfers from './Transfers';

const Transactions: FC = () => {
  const { t } = useTranslation();
  const tabs = useMemo(
    () => [
      { id: 1, name: t('admin.transactions.receiptsHistory') },
      { id: 2, name: t('admin.transactions.outputRequest') },
      { id: 3, name: t('admin.transactions.transfers') },
    ],
    []
  );

  const [tab, setTab] = useState(tabs[0]);
  const [search, setSearch] = useState('');
  const styles = useStyles();

  const debouncedSearch = useDebounce(search, 300);

  const renderTable = useCallback(() => {
    switch (tab.id) {
      case 1:
        return <TransactionsHistory search={debouncedSearch} />;
      case 2:
        return <Requests search={debouncedSearch} />;
      case 3:
        return <Transfers search={debouncedSearch} />;
      default:
        return <TransactionsHistory search={debouncedSearch} />;
    }
  }, [tab, debouncedSearch]);

  return (
    <div className={styles.root}>
      <Flex align="center" justify="space-between" margin="0 0 84px">
        <Typography weight="semibold" size="3xl" margin="0 0 24px">
          {t('admin.transactions.title')}
        </Typography>
        <Flex align="center" className={styles.buttonsWrapper}>
          <TextField
            value={search}
            onChange={({ value }) => setSearch(value || '')}
            size="s"
            placeholder={t('common.search')}
            rightSide={IconSearch}
          />
          <Button
            label={t('admin.transactions.setUpCommission')}
            size="s"
            view="primary"
          />
        </Flex>
      </Flex>
      <Tabs
        value={tab}
        onChange={({ value }) => setTab(value)}
        items={tabs}
        getLabel={(item) => item.name}
        size="m"
        className={styles.tabs}
      />
      {renderTable()}
    </div>
  );
};

export default Transactions;
