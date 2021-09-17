import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { Button } from '@consta/uikit/Button';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import FormikInput from 'components/Common/Controls/Formik/Input';
import FormikSelect from 'components/Common/Controls/Formik/Select';
import { REQUIRED } from 'utils/formik/validation';
import { RootState } from 'store/reducers/rootReducer';
import { postRefillBalance } from 'utils/api/routes/payment';
import useStyles from './styles';

type SelectItem = {
  label: string;
  id: number;
  disabled: boolean;
  icon?: string;
};

const currencySelectList: SelectItem[] = [
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

const paymentSelectList: SelectItem[] = [
  {
    label: 'BtcPAY',
    icon: '/images/bitlime.svg',
    disabled: false,
    id: 1,
  },
];

const Refill: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const { profile } = useSelector((state: RootState) => state.user);

  const initialValues = {
    currency: currencySelectList[0],
    payment: paymentSelectList[0],
    amount: '',
  };

  const handleSubmit = async (values: typeof initialValues) => {
    const [err, data] = await postRefillBalance({
      amount: parseFloat(values.amount) / 100000,
    });

    if (err) {
      toast.error(t('profile.balance.refill.toast.error'));
      return;
    }

    // open new window with payment, watch redirect
    toast(t('profile.balance.refill.toast.redirect'));
    window.open(data.url);

    // TODO watch redirect
  };

  const schema = Yup.object({
    amount: REQUIRED,
  });

  return (
    <div className={styles.root}>
      <Typography size="xl" weight="semibold" className={styles.title}>
        {t('profile.balance.refill.title')}
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <div className={styles.uiGroup}>
            <FormikSelect
              items={currencySelectList}
              label={t('profile.balance.refill.inputLabel')}
              name="currency"
              isRequired={false}
            />
          </div>
          <div className={styles.uiGroup}>
            <FormikSelect
              items={paymentSelectList}
              label={t('profile.balance.refill.pamentLabel')}
              name="payment"
              isRequired={false}
            />
          </div>
          <div className={styles.uiGroup}>
            <FormikInput
              label={t('profile.balance.refill.amount.label')}
              name="amount"
              placeholder={t('profile.balance.refill.amount.placeholder')}
              onlyNumbers
            />
          </div>

          <Button
            width="full"
            view="primary"
            type="submit"
            label={t('profile.balance.refill.cta')}
            className={styles.cta}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default Refill;
