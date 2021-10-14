import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import React, { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setAuthOpen, setAuthType } from '../../../store/reducers/settings';
import Typography from '../../Common/Typography';
import ChangePassword from './ChangePassword';
import EnterEmail from './EnterEmail';
import useStyles from './styles';

const Recovery: FC = () => {
  const styles = useStyles({});
  const dispatch = useDispatch();
  const { uid, token } = useParams<{ uid?: string; token?: string }>();
  const [errorMessage, setErrorMessage] = useState('');

  const closeModal = useCallback(() => {
    dispatch(setAuthOpen(false));
  }, []);

  return (
    <div className={styles.container}>
      <Button
        className={styles.closeBtn}
        onClick={closeModal}
        label="Закрыть"
        size="s"
        view="clear"
        iconLeft={IconClose}
        onlyIcon
      />
      <div className={styles.form}>
        <Typography
          size="2xl"
          align="center"
          margin="0 0 24px"
          weight="semibold"
        >
          Восстановление пароля
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
        {uid && token ? (
          <ChangePassword
            setError={setErrorMessage}
            uid={uid as string}
            token={token as string}
          />
        ) : (
          <EnterEmail setError={setErrorMessage} />
        )}
      </div>
      <Button
        className={styles.login}
        label="Вход"
        view="clear"
        width="full"
        onClick={() => dispatch(setAuthType('sign_in'))}
      />
    </div>
  );
};

export default Recovery;
