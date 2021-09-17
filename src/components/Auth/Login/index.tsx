import React, { FC, useCallback, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { EMAIL, REQUIRED } from '../../../utils/formik/validation';
import FormikCheckbox from '../../Common/Controls/Formik/Checkbox';
import FormikInput from '../../Common/Controls/Formik/Input';
import useStyles from './styles';
import { IBaseAuthProps } from '../types';
import Flex from '../../Common/Flex';
import Typography from '../../Common/Typography';
import SocialNetworks from '../SocialNetworks';
import { login } from '../../../store/reducers/user';

const Login: FC<IBaseAuthProps> = ({ closeModal, setAuthType }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    email: '',
    password: '',
    remember: true,
  };

  const schema = Yup.object({
    email: REQUIRED,
    password: REQUIRED,
  });

  const handleSubmit = useCallback((values: typeof initialValues) => {
    dispatch(
      login({
        ...values,
        successCallback: () => history.push('/'),
        errorCallback: (message: string) => setErrorMessage(message),
      })
    );
  }, []);

  return (
    <div className={styles.container}>
      <Button
        className={styles.closeBtn}
        onClick={closeModal}
        label="Закрыть"
        size="m"
        view="clear"
        iconLeft={IconClose}
        onlyIcon
      />
      <div className={styles.form}>
        <Typography
          size="3xl"
          align="center"
          margin="0 0 24px"
          weight="semibold"
        >
          Вход
        </Typography>
        {errorMessage && (
          <Typography
            view="alert"
            margin="0 0 15px"
            align="center"
            weight="semibold"
            size="l"
          >
            {errorMessage}
          </Typography>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className={styles.field}>
              <FormikInput name="email" placeholder="Ваш логин" />
            </div>
            <div className={styles.field}>
              <FormikInput
                name="password"
                isPassword
                placeholder="Ваш пароль"
              />
            </div>
            <Flex align="center" justify="space-between" margin="0 0 16px">
              <FormikCheckbox name="remember" label="Запомнить меня" />
              <Text
                size="s"
                view="link"
                onClick={() => setAuthType('pass_recovery')}
              >
                Забыли пароль?
              </Text>
            </Flex>
            <Button label="Войти" width="full" type="submit" />
          </Form>
        </Formik>
        <Typography align="center" margin="16px 0 8px">
          Или с помощью
        </Typography>
        <SocialNetworks />
        <Typography
          align="center"
          margin="16px auto 0"
          size="s"
          className={styles.license}
        >
          При авторизации через социальную сеть, вы принимаете условия
          <Text view="link" as="a" size="s">
            Пользовательского соглашения
          </Text>
        </Typography>
      </div>
      <Button
        className={styles.registration}
        label="Регистрация"
        view="clear"
        width="full"
        onClick={() => setAuthType('sign_up')}
      />
    </div>
  );
};

export default Login;
