import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';
import FormikInput from 'components/Common/Controls/Formik/Input';
import FormikSwitch from 'components/Common/Controls/Formik/Switch';
import { REQUIRED_STRING, EMAIL, PHONE } from 'utils/formik/validation';
import cns from 'classnames';
import { RootState } from 'store/reducers/rootReducer';
import { updateProfile, logout } from 'store/reducers/user';
import Cookies from 'js-cookie';
import { deleteAuthHeader } from 'utils/api';

import useStyles from './styles';

const Account: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [errorMessage, setErrorMessage] = useState('');
  const { profile } = useSelector((state: RootState) => state.user);

  const initialValues = {
    login: 'api TODO',
    sponsor: 'api TODO',
    email: profile.email,
    phone: profile.phone,
    switch1: false,
    switch2: true,
  };

  const handleSubmit = (values: typeof initialValues) => {
    const { phone } = values;
    dispatch(
      updateProfile({
        profile: {
          phone,
        },
        successCallback: () => setErrorMessage(''),
        errorCallback: (message: string) => setErrorMessage(message),
      })
    );
  };

  const schema = Yup.object({
    login: REQUIRED_STRING,
    email: EMAIL,
    phone: PHONE,
  });

  const handleLogoutClick = () => {
    Cookies.remove('access');
    Cookies.remove('refresh');
    deleteAuthHeader();
    dispatch(logout());
    history.push('/landing');
  };

  return (
    <div className={styles.root}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ touched }) => (
          <Form>
            <Flex align="center" justify="space-between">
              <Typography
                margin="0 24px 0 0"
                weight="semibold"
                lineHeight="s"
                size="2xl"
              >
                Аккаунт
              </Typography>

              <Button
                view="primary"
                type="submit"
                disabled={Object.keys(touched).length === 0}
                label="Сохранить изменения"
              />
            </Flex>

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

            <div className={styles.section}>
              <Grid
                cols="1"
                gap="xl"
                breakpoints={{ s: { cols: 2 } }}
                className={styles.inputs}
              >
                <GridItem>
                  <FormikInput
                    label="Логин"
                    name="login"
                    placeholder="Введите логин"
                  />
                </GridItem>
                <GridItem>
                  <FormikInput
                    label="Информационный спонсор"
                    name="sponsor"
                    placeholder=""
                    isRequired={false}
                  />
                </GridItem>
                <GridItem>
                  <FormikInput
                    label="Email"
                    name="email"
                    placeholder="Введите логин"
                    disabled
                  />
                </GridItem>
                <GridItem>
                  <FormikInput
                    label="Телефон"
                    name="phone"
                    placeholder="+7 (___) ___ ____"
                  />
                </GridItem>
              </Grid>
            </div>

            <div className={styles.section}>
              <div className={styles.uiGroup}>
                <FormikSwitch
                  label="Lorem ipsum dolor sit amet"
                  name="switch1"
                />
              </div>
              <div className={styles.uiGroup}>
                <FormikSwitch label="Lorem ipsum" name="switch2" />
              </div>
            </div>

            <div className={cns(styles.section, 'is-last')}>
              <div className={styles.uiButton}>
                <Button
                  view="clear"
                  size="s"
                  label="Экспортировать мои данные"
                />
              </div>
              <div className={styles.uiButton}>
                <Button
                  view="clear"
                  size="s"
                  label="Выйти"
                  className={styles.dangerBtn}
                  onClick={handleLogoutClick}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Account;
