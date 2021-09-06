import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@consta/uikit/Button';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import FormikInput from 'components/Common/Controls/Formik/Input';
import FormikSelect from 'components/Common/Controls/Formik/Select';
import { REQUIRED_STRING } from 'utils/formik/validation';
import { useTranslation } from 'react-i18next';

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
        {t('profile.balance.transfer.title')}
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
