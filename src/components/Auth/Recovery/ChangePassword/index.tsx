import React, { FC, useCallback } from 'react';
import { Button } from '@consta/uikit/Button';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { SetStateType } from '../../../../types/common';
import { CONFIRM, REGEXP_TEST } from '../../../../utils/formik/validation';
import FormikInput from '../../../Common/Controls/Formik/Input';
import useStyles from '../styles';

const ChangePassword: FC<{ setError: SetStateType<string> }> = ({
  setError,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const initialValues = {
    password: '',
    passwordConfirm: '',
  };

  const schema = Yup.object({
    password: REGEXP_TEST(
      'password',
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      t('auth.signup.validation.password.mask')
    )
      .min(8, t('auth.signup.validation.password.min'))
      .max(30, t('auth.signup.validation.password.max')),
    passwordConfirm: CONFIRM,
  });

  const handleSubmit = useCallback((values: typeof initialValues) => {
    console.log(values);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <div className={styles.field}>
          <FormikInput name="password" placeholder="Новый пароль" isPassword />
        </div>
        <div className={styles.field}>
          <FormikInput
            name="passwordConfirm"
            placeholder="Повторите новый пароль"
            isPassword
          />
        </div>
        <Button label="Подтвердить" width="full" type="submit" />
      </Form>
    </Formik>
  );
};

export default ChangePassword;
