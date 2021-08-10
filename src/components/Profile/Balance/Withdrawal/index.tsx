import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@consta/uikit/Button';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import FormikInput from 'components/Common/Controls/Formik/Input';
import FormikSelect from 'components/Common/Controls/Formik/Select';
import { REQUIRED_STRING } from 'utils/formik/validation';

import useStyles from './styles';

type SelectItem = {
  label: string;
  id: number;
  disabled: boolean;
  icon?: string;
};

const paymentSelectList: SelectItem[] = [
  {
    label: 'Bitcoin',
    icon: '/images/bitcoin.svg',
    disabled: false,
    id: 1,
  },
  {
    label: 'USDT',
    icon: '/images/bitlime.svg',
    disabled: true,
    id: 2,
  },
  {
    label: 'RUB',
    icon: '/images/bitlime.svg',
    disabled: true,
    id: 3,
  },
];

const Withdrawal: FC = () => {
  const styles = useStyles();

  const initialValues = {
    payment: paymentSelectList[0],
    credentials: '',
    amount: '',
  };

  const handleSubmit = (values: typeof initialValues) => {
    // eslint-disable-next-line no-console
    console.log('TODO - form submit', values);
  };

  const schema = Yup.object({
    credentials: REQUIRED_STRING,
    amount: REQUIRED_STRING,
  });

  return (
    <div className={styles.root}>
      <Typography size="xl" weight="semibold" className={styles.title}>
        Вывод средств
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <div className={styles.uiGroup}>
            <FormikSelect
              items={paymentSelectList}
              label="Выберите валюту"
              name="payment"
              isRequired={false}
            />
          </div>
          <div className={styles.uiGroup}>
            <FormikInput
              label="Адрес вывода"
              name="credentials"
              placeholder="Введите адрес кошелька"
            />
          </div>
          <div className={styles.uiGroup}>
            <FormikInput
              label="Запросить вывод"
              name="amount"
              placeholder="Введите сумму"
            />
          </div>

          <Button
            width="full"
            view="primary"
            type="submit"
            label="Запросить вывод"
            className={styles.cta}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default Withdrawal;
