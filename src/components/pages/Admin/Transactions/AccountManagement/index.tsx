import { Button } from '@consta/uikit/Button';
import { TextField } from '@consta/uikit/TextField';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flex from '../../../../Common/Flex';
import useStyles from './styles';

const AccountManagement: FC = () => {
  const [accrueValue, setAccrueValue] = useState('');
  const [toAccrueValue, setToAccrueValue] = useState('');
  const { t } = useTranslation();
  const styles = useStyles();

  const accrueMoney = (money: string, id: string) => {};

  return (
    <div className={styles.root}>
      <Flex align="center" margin="44px 0 24px" justify="center">
        <TextField
          value={toAccrueValue}
          type="number"
          onChange={({ value }) => setToAccrueValue(value || '')}
          placeholder="000.00 BTL"
          form="roundClear"
        />
        <Button
          view="secondary"
          className={styles.manageBtn}
          form="brickRound"
          label={t('admin.transactions.toAccrue')}
        />
      </Flex>
      <Flex align="center" justify="center">
        <TextField
          value={accrueValue}
          type="number"
          onChange={({ value }) => setAccrueValue(value || '')}
          placeholder="000.00 BTL"
          form="roundClear"
        />
        <Button
          view="secondary"
          className={styles.manageBtn}
          form="brickRound"
          label={t('admin.transactions.accrue')}
        />
      </Flex>
    </div>
  );
};

export default AccountManagement;
