import React, { FC, useEffect, useState, useCallback } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@consta/uikit/Button';
import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';
import ConstaIcons from 'assets/icons/ConstaIcons';
import FormikInput from 'components/Common/Controls/Formik/Input';
import { useTranslation } from 'react-i18next';
import { EMAIL } from 'utils/formik/validation';

import useStyles from './styles';

const Subscribe: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const initialValues = {
    email: '',
  };

  const handleSubmit = (values: typeof initialValues) => {
    const { email } = values;
    // dispatch(
    //   SubscribeEmail({
    //     payload: { email },
    //     successCallback: () => setErrorMessage(''),
    //     errorCallback: (message: string) => setErrorMessage(message),
    //   })
    // );
  };

  const schema = Yup.object({
    email: EMAIL,
  });

  return (
    <div className={styles.root}>
      <Typography size="s" lineHeight="m" className={styles.title}>
        Будьте в курсе новостей платформы и обновлений системы
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ touched }) => (
          <Form className={styles.form}>
            <Flex align="center">
              <FormikInput
                name="email"
                size="s"
                placeholder={t('landing.footer.subscribe.email')}
                isRequired={false}
              />
              <Button
                view="primary"
                type="submit"
                size="s"
                disabled={Object.keys(touched).length === 0}
                label={t('landing.footer.subscribe.cta')}
              />
            </Flex>
          </Form>
        )}
      </Formik>

      <Typography
        size="s"
        lineHeight="m"
        view="ghost"
        className={styles.agreement}
      >
        Я соглашаюсь получать рекламные и иные сообщения от СБЕР на условиях{' '}
        <a href="http://google.com/" target="_blank" rel="noreferrer">
          Политики конфиденциальности СБЕР
        </a>
      </Typography>
    </div>
  );
};

export default Subscribe;
