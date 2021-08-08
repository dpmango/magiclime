import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import { Button } from '@consta/uikit/Button';
import FormikInput from 'components/Common/Controls/Formik/Input';
import { REQUIRED_STRING, validationMessages } from 'utils/formik/validation';
import { changePassword } from 'store/reducers/user';

import useStyles from './styles';

const Profile: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');

  const initialValues = {
    current_password: '',
    new_password: '',
    repeatPassword: '',
  };

  const handleSubmit = (values: typeof initialValues, { resetForm }) => {
    const { current_password, new_password } = values;

    dispatch(
      changePassword({
        data: {
          current_password,
          new_password,
        },
        successCallback: () => {
          resetForm();
          setErrorMessage('');
        },
        errorCallback: (message: string) => setErrorMessage(message),
      })
    );
  };

  const schema = Yup.object({
    current_password: REQUIRED_STRING,
    new_password: REQUIRED_STRING,
    repeatPassword: Yup.string()
      .required(validationMessages.required)
      .oneOf(
        [Yup.ref('new_password'), null],
        validationMessages.passwordRepeat
      ),
  });

  return (
    <div className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        Безопасность
      </Typography>

      {errorMessage && (
        <Typography
          view="alert"
          margin="16px 0 16px"
          align="center"
          weight="semibold"
          size="l"
        >
          {errorMessage}
        </Typography>
      )}

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <div className={styles.section}>
            <div className={styles.inputs}>
              <div className={styles.uiGroup}>
                <FormikInput
                  label="Пароль"
                  name="current_password"
                  isPassword
                />
              </div>
              <div className={styles.uiGroup}>
                <FormikInput
                  label="Новый Пароль"
                  name="new_password"
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
