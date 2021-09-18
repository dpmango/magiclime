import { Button } from '@consta/uikit/Button';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flex from '../../../../../Common/Flex';
import useStyles from '../../styles';
import { ITransaction } from '../../types';

interface IProps {
  row: ITransaction;
  openManagement: VoidFunction;
}

export const Status: FC<IProps> = ({ row, openManagement }) => {
  const { t } = useTranslation();
  const styles = useStyles();

  const checkTransactionStatus = (id: string) => {};

  return (
    <Flex align="center" justify="space-between" padding="0 10px">
      <Flex align="center">
        <p className={styles.status}>{row.status}</p>
        <Button
          view="secondary"
          size="s"
          onClick={() => checkTransactionStatus(row.id)}
          label={t('admin.transactions.check')}
          className={styles.checkButton}
        />
      </Flex>
      <Button
        view="primary"
        size="s"
        label={t('admin.transactions.accountManagement')}
        onClick={openManagement}
      />
    </Flex>
  );
};
