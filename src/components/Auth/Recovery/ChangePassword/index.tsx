import { AxiosError } from 'axios';
import React, { FC, useCallback, useState } from 'react';
import { Button } from '@consta/uikit/Button';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { SetStateType } from '../../../../types/common';
import { resetPasswordConfirm } from '../../../../utils/api/routes/auth';
import { CONFIRM, REGEXP_TEST } from '../../../../utils/formik/validation';
import FormikInput from '../../../Common/Controls/Formik/Input';
import Typography from '../../../Common/Typography';
import useStyles from '../styles';

interface IProps {
  setError: SetStateType<string>;
  uid: string;
  token: string;
}

const ChangePassword: FC<IProps> = ({ setError, uid, token }) => {
  const [message, setMessage] = useState('');
  const styles = useStyles({
    success: !!message,
  });
  const { t } = useTranslation();
  const initialValues = {
    uid,
    token,
    new_password: '',
    re_new_password: '',
  };

  const schema = Yup.object({
    new_password: REGEXP_TEST(
      'new_password',
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      t('auth.signup.validation.password.mask')
    )
      .min(8, t('auth.signup.validation.password.min'))
      .max(30, t('auth.signup.validation.password.max')),
    re_new_password: CONFIRM('new_password'),
  });

  const handleSubmit = useCallback((values: typeof initialValues) => {
    setError('');
    resetPasswordConfirm(values)
      .then(() => {
        setError('');
        setMessage('Пароль успешно изменён!');
      })
      .catch((err: AxiosError) => {
        setError(
          'Ошибка! Убедитесь в правильности ссылки и попробуйте ещё раз!'
        );
      });
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {message ? (
        <Typography className={styles.message} align="center" size="l">
          {message}
        </Typography>
      ) : (
        <Form>
          <div className={styles.field}>
            <FormikInput
              name="new_password"
              placeholder="Новый пароль"
              isPassword
            />
          </div>
          <div className={styles.field}>
            <FormikInput
              name="re_new_password"
              placeholder="Повторите новый пароль"
              isPassword
            />
          </div>
          <Button label="Подтвердить" width="full" type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default ChangePassword;
