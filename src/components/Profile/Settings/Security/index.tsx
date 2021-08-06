import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import { Button } from '@consta/uikit/Button';
import FormikInput from 'components/Common/Controls/Formik/Input';
import { REQUIRED_STRING, validationMessages } from 'utils/formik/validation';

import useStyles from './styles';

const Profile: FC = () => {
  const styles = useStyles();

  const initialValues = {
    oldPassword: '1234556',
    newPassword: '',
    repeatPassword: '',
  };

  const handleSubmit = (values: typeof initialValues) => {
    // eslint-disable-next-line no-console
    console.log('TODO - form submit', values);
  };

  const schema = Yup.object({
    oldPassword: REQUIRED_STRING,
    newPassword: REQUIRED_STRING,
    repeatPassword: Yup.string()
      .required(validationMessages.required)
      .oneOf([Yup.ref('newPassword'), null], validationMessages.passwordRepeat),
  });

  return (
    <div className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        Безопасность
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <div className={styles.section}>
            <div className={styles.inputs}>
              <div className={styles.uiGroup}>
                <FormikInput label="Пароль" name="oldPassword" isPassword />
              </div>
              <div className={styles.uiGroup}>
                <FormikInput
                  label="Новый Пароль"
                  name="newPassword"
                  isPassword
                />
              </div>
              <div className={styles.uiGroup}>
                <FormikInput
                  label="Новый Пароль еще раз"
                  name="repeatPassword"
                  isPassword
                />
              </div>
            </div>
          </div>

          <Button view="secondary" type="submit" label="Сохранить изменения" />
        </Form>
      </Formik>
    </div>
  );
};

export default Profile;
