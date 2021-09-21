import React, { FC, useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { Button } from '@consta/uikit/Button';

import Typography from 'components/Common/Typography';
import FormikInput from 'components/Common/Controls/Formik/Input';
import FormikSelect from 'components/Common/Controls/Formik/Select';
import { REQUIRED } from 'utils/formik/validation';
import { postTransferBalance } from 'utils/api/routes/payment';

import useStyles from './styles';

type SelectItem = {
  label: string;
  id: number;
  disabled: boolean;
  icon?: string;
};

const paymentSelectList: SelectItem[] = [
  {
    label: 'USDT',
    icon: '/images/bitlime.svg',
    disabled: true,
    id: 2,
  },
];

const Transfer: FC = () => {
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

    const [err, data] = await postTransferBalance({
      amount: parseFloat(values.amount) / 100000,
      to_user: values.credentials,
    });

    if (err) {
      setError(err);
      toast.error(t('profile.balance.transfer.toast.error'));
      return;
    }

    toast.success(t('profile.balance.transfer.toast.success'));
    resetForm();
  };
  const schema = Yup.object({
    credentials: REQUIRED,
    amount: REQUIRED,
  });

  return (
    <div className={styles.root}>
      <Typography size="xl" weight="semibold" className={styles.title}>
        {t('profile.balance.transfer.title')}
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
              label={t('profile.balance.transfer.payment.label')}
              name="payment"
              isRequired={false}
            />
          </div>
          <div className={styles.uiGroup}>
            <FormikInput
              label={t('profile.balance.transfer.credentials.label')}
              name="credentials"
              placeholder={t(
                'profile.balance.transfer.credentials.placeholder'
              )}
            />
          </div>
          <div className={styles.uiGroup}>
            <FormikInput
              label={t('profile.balance.transfer.amount.label')}
              name="amount"
              placeholder={t('profile.balance.transfer.amount.placeholder')}
              onlyNumbers
            />
          </div>

          <Button
            width="full"
            view="primary"
            type="submit"
            label={t('profile.balance.transfer.cta')}
            className={styles.cta}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default Transfer;
