import React, { FC, useCallback, useState } from 'react';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { TextField } from '@consta/uikit/TextField';
import PasswordInput from '../../Common/Controls/PasswordInput';
import useStyles from './styles';
import { IconClose } from '@consta/uikit/IconClose';
import { IBaseAuthProps } from '../types';
import Flex from '../../Common/Flex';
import { Checkbox } from '@consta/uikit/Checkbox';
import Typography from '../../Common/Typography';
import SocialNetworks from '../SocialNetworks';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/reducers/user';
import { useHistory } from 'react-router-dom';

const Login: FC<IBaseAuthProps> = ({ closeModal, setAuthType }) => {
  const [form, setForm] = useState({
    login: '',
    password: '',
  });
  const [rememberUser, setRememberUser] = useState(true);
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
        successCallback: () => history.push('/'),
      })
    );
  };

  return (
    <div className={styles.container}>
      <Button
        className={styles.closeBtn}
        onClick={closeModal}
        label={'Закрыть'}
        size={'s'}
        view={'clear'}
        iconLeft={IconClose}
        onlyIcon
      />
      <div className={styles.form}>
        <Typography
          size={'3xl'}
          align={'center'}
          margin={'0 0 24px'}
          weight={'semibold'}
        >
          Вход
        </Typography>
        <TextField
          className={styles.field}
          placeholder={'Ваш логин'}
          value={form.login}
          onChange={({ value }) => handleChange('login', value)}
        />
        <PasswordInput
          className={styles.field}
          placeholder={'Ваш пароль'}
          value={form.password}
          onChange={({ value }) => handleChange('password', value)}
        />
        <Flex align={'center'} justify={'space-between'} margin={'0 0 24px'}>
          <Checkbox
            label="Запомнить меня"
            checked={rememberUser}
            onClick={() => setRememberUser(!rememberUser)}
          />
          <Text view={'link'} onClick={() => setAuthType('pass_recovery')}>
            Забыли пароль?
          </Text>
        </Flex>
        <Button label={'Войти'} width="full" onClick={handleSubmit} />
        <Typography align={'center'} margin={'24px 0 12px'}>
          Или с помощью
        </Typography>
        <SocialNetworks />
        <Typography
          align={'center'}
          margin={'16px auto 0'}
          className={styles.license}
        >
          При авторизации через социальную сеть, вы принимаете условия
          <Text view={'link'} as={'a'}>
            Пользовательского соглашения
          </Text>
        </Typography>
      </div>
      <Button
        className={styles.registration}
        label={'Регистрация'}
        view={'clear'}
        width={'full'}
        onClick={() => setAuthType('sign_up')}
      />
    </div>
  );
};

export default Login;
