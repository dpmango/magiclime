import { AxiosError } from 'axios';
import React, { FC, useCallback, useState } from 'react';
import { Button } from '@consta/uikit/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { SetStateType } from '../../../../types/common';
import { sendMailForRecovery } from '../../../../utils/api/routes/auth';
import { EMAIL } from '../../../../utils/formik/validation';
import FormikInput from '../../../Common/Controls/Formik/Input';
import Typography from '../../../Common/Typography';
import useStyles from '../styles';

const EnterEmail: FC<{ setError: SetStateType<string> }> = ({ setError }) => {
  const [message, setMessage] = useState('');
  const styles = useStyles({
    success: !!message,
  });
  const initialValues = {
    email: '',
  };

  const schema = Yup.object({
    email: EMAIL,
  });

  const handleSubmit = useCallback((values: typeof initialValues) => {
    sendMailForRecovery(values.email)
      .then(() => {
        setError('');
        setMessage(
          'Письмо успешно отправлено на почту! Перейдите по ссылке, чтобы сбросить пароль'
        );
      })
      .catch((err: AxiosError) => {
        setError('Ошибка! Указанный email не найден в системе!');
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
            <FormikInput name="email" placeholder="Введите email" />
          </div>
          <Button label="Сбросить пароль" width="full" type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default EnterEmail;
