import React, { FC, useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { Button } from '@consta/uikit/Button';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import FormikInput from 'components/Common/Controls/Formik/Input';
import FormikSelect from 'components/Common/Controls/Formik/Select';
import { REQUIRED } from 'utils/formik/validation';
import { postWithdrawalBalance } from 'utils/api/routes/payment';

import useStyles from './styles';

type SelectItem = {
  label: string;
  id: number;
  disabled: boolean;
  icon?: string;
};

const paymentSelectList: SelectItem[] = [
  {
    label: 'Бонусы',
    icon: '/images/bitlime.svg',
    disabled: false,
    id: 1,
  },
  // {
  //   label: 'USDT',
  //   icon: '/images/bitlime.svg',
  //   disabled: true,
  //   id: 2,
  // },
  // {
  //   label: 'RUB',
  //   icon: '/images/bitlime.svg',
  //   disabled: true,
  //   id: 3,
  // },
];

const Withdrawal: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const [error, setError] = useState<string>('');

  const initialValues = {
    payment: paymentSelectList[0],
    credentials: '',
    amount: '',
  };

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    setError('');

    const [err, data] = await postWithdrawalBalance({
      amount: parseFloat(values.amount) / 100000,
      wallet: values.credentials,
    });

    if (err) {
      setError(err);
      toast.error(t('profile.balance.withdrawal.toast.error'));
      return;
    }

    toast.success(t('profile.balance.withdrawal.toast.success'));
    resetForm();
  };

  const schema = Yup.object({
    credentials: REQUIRED,
    amount: REQUIRED,
  });

  return (
    <div className={styles.root}>
      <Typography size="xl" weight="semibold" className={styles.title}>
        {t('profile.balance.withdrawal.title')}
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <Typography
            view="alert"
            align="center"
            weight="semibold"
            margin="0 0 12px"
          >
            {error}
          </Typography>

          <div className={styles.uiGroup}>
            <FormikSelect
              items={paymentSelectList}
              label={t('profile.balance.withdrawal.payment.label')}
              name="payment"
              isRequired={false}
            />
          </div>
          <div className={styles.uiGroup}>
            <FormikInput
              label={t('profile.balance.withdrawal.credentials.label')}
              name="credentials"
              placeholder={t(
                'profile.balance.withdrawal.credentials.placeholder'
              )}
            />
          </div>
          <div className={styles.uiGroup}>
            <FormikInput
              label={t('profile.balance.withdrawal.amount.label')}
              name="amount"
              placeholder={t('profile.balance.withdrawal.amount.placeholder')}
              onlyNumbers
            />
          </div>

          <Button
            width="full"
            view="primary"
            type="submit"
            label={t('profile.balance.withdrawal.cta')}
            className={styles.cta}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default Withdrawal;
