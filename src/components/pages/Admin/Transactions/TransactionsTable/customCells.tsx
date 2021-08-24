import { Button } from '@consta/uikit/Button';
import { TextField } from '@consta/uikit/TextField';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flex from '../../../../Common/Flex';
import useStyles from '../styles';
import { ITransaction } from '../types';

export const Status: FC<{ row: ITransaction }> = ({ row }) => {
  const { t } = useTranslation();
  const styles = useStyles();

  const checkTransactionStatus = (id: string) => {};

  return (
    <Flex align="center" justify="space-between" padding="0 10px">
      {row.status}
      <Button
        view="primary"
        size="s"
        onClick={() => checkTransactionStatus(row.id)}
        label={t('admin.check')}
        className={styles.checkButton}
      />
    </Flex>
  );
};

export const Accrue: FC<{ row: ITransaction }> = ({ row }) => {
  const [value, setValue] = useState('');
  const { t } = useTranslation();

  const accrueMoney = (money: string, id: string) => {};

  return (
    <Flex align="center">
      <TextField
        value={value}
        type="number"
        onChange={({ value }) => setValue(value || '')}
        placeholder="000.00"
        form="roundClear"
        size="s"
      />
      <Button form="brickRound" size="s" label={t('admin.accrue')} />
    </Flex>
  );
};
