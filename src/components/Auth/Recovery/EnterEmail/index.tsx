import React, { FC, useCallback } from 'react';
import { Button } from '@consta/uikit/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { SetStateType } from '../../../../types/common';
import { EMAIL } from '../../../../utils/formik/validation';
import FormikInput from '../../../Common/Controls/Formik/Input';
import useStyles from '../styles';

const EnterEmail: FC<{ setError: SetStateType<string> }> = ({ setError }) => {
  const styles = useStyles();
  const initialValues = {
    email: '',
  };

  const schema = Yup.object({
    email: EMAIL,
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
          <FormikInput name="email" placeholder="Введите email" />
        </div>
        <Button label="Сбросить пароль" width="full" type="submit" />
      </Form>
    </Formik>
  );
};

export default EnterEmail;
