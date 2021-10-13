import React, { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';

import FormikCheckbox from 'components/Common/Controls/Formik/Checkbox';
import FormikInput from 'components/Common/Controls/Formik/Input';
import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';
import { login } from 'store/reducers/user';
import { setAuthType, setAuthOpen, setAuth } from 'store/reducers/settings';
import { EMAIL, REQUIRED } from 'utils/formik/validation';
import { SetStateType } from '../../../types/common';

import useStyles from './styles';
import SocialNetworks from '../SocialNetworks';

const Login: FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const closeModal = useCallback(() => {
    dispatch(setAuthOpen(false));
  }, []);

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
        successCallback: () => {
          dispatch(setAuth({ opened: false, type: 'sign_in' }));
          history.push('/profile/me');
        },
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
              <FormikInput name="email" placeholder="Ваш E-mail" />
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
                size="xs"
                view="link"
                onClick={() => dispatch(setAuthType('recovery'))}
                className={styles.recovery}
              >
                Забыли пароль?
              </Text>
            </Flex>
            <Button label="Войти" width="full" type="submit" />
          </Form>
        </Formik>
        {/* <Typography align="center" margin="16px 0 8px"> */}
        {/*  Или с помощью */}
        {/* </Typography> */}
        {/* <SocialNetworks /> */}
        <Typography margin="16px auto 0" size="xs" className={styles.license}>
          При авторизации вы принимаете условия
          <Link to="/home/info/rules" onClick={closeModal}>
            <Text view="link" size="xs">
              Пользовательского соглашения
            </Text>
          </Link>
        </Typography>
      </div>
      <Button
        className={styles.registration}
        label="Регистрация"
        view="clear"
        width="full"
        onClick={() => dispatch(setAuthType('sign_up'))}
      />
    </div>
  );
};

export default Login;
