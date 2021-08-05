import React, { FC, useCallback, useState } from 'react';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { TextField } from '@consta/uikit/TextField';
import { Checkbox } from '@consta/uikit/Checkbox';
import { useHistory } from 'react-router-dom';
import { IconClose } from '@consta/uikit/IconClose';
import { useDispatch } from 'react-redux';
import PasswordInput from '../../Common/Controls/PasswordInput';
import useStyles from './styles';
import { IBaseAuthProps } from '../types';
import Flex from '../../Common/Flex';
import Typography from '../../Common/Typography';
import SocialNetworks from '../SocialNetworks';
import { login } from '../../../store/reducers/user';

const Login: FC<IBaseAuthProps> = ({ closeModal, setAuthType }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [rememberUser, setRememberUser] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = useCallback(
    (name: keyof typeof form, value: string | null) => {
      setForm({ ...form, [name]: value as string });
    },
    [form]
  );

  const handleSubmit = () => {
    dispatch(
      login({
        ...form,
        remember: rememberUser,
        successCallback: () => history.push('/'),
        errorCallback: (message: string) => setErrorMessage(message),
      })
    );
  };

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
            view={'alert'}
            margin={'0 0 15px'}
            align={'center'}
            weight={'semibold'}
            size={'l'}
          >
            {errorMessage}
          </Typography>
        )}
        <TextField
          className={styles.field}
          placeholder="Ваш логин"
          value={form.username}
          onChange={({ value }) => handleChange('username', value)}
        />
        <PasswordInput
          className={styles.field}
          placeholder="Ваш пароль"
          value={form.password}
          onChange={({ value }) => handleChange('password', value)}
        />
        <Flex align="center" justify="space-between" margin="0 0 16px">
          <Checkbox
            label="Запомнить меня"
            checked={rememberUser}
            onClick={() => setRememberUser(!rememberUser)}
          />
          <Text
            size="s"
            view="link"
            onClick={() => setAuthType('pass_recovery')}
          >
            Забыли пароль?
          </Text>
        </Flex>
        <Button
          label="Войти"
          width="full"
          onClick={handleSubmit}
          disabled={!form.username || !form.password}
        />
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
