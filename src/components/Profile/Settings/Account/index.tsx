import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';
import FormikInput from 'components/Common/Controls/Formik/Input';
import FormikSwitch from 'components/Common/Controls/Formik/Switch';
import { REQUIRED_STRING, EMAIL, PHONE } from 'utils/formik/validation';
import cns from 'classnames';
import { RootState } from 'store/reducers/rootReducer';
import { updateProfile, getProfile } from 'store/reducers/user';

import useStyles from './styles';

const Account: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

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

  return (
    <div className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        Аккаунт
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
              <FormikSwitch label="Lorem ipsum dolor sit amet" name="switch1" />
            </div>
            <div className={styles.uiGroup}>
              <FormikSwitch label="Lorem ipsum" name="switch2" />
            </div>
          </div>

          <div className={cns(styles.section, 'is-last')}>
            <div className={styles.uiButton}>
              <Button view="clear" size="s" label="Отключить аккаунт" />
            </div>
            <div className={styles.uiButton}>
              <Button view="clear" size="s" label="Удалить аккаунт" />
            </div>
            <div className={styles.uiButton}>
              <Button view="clear" size="s" label="Экспортировать мои данные" />
            </div>
            <div className={styles.uiButton}>
              <Button
                view="clear"
                size="s"
                label="Выйти"
                className={styles.dangerBtn}
              />
            </div>
          </div>

          <Button view="secondary" type="submit" label="Сохранить изменения" />
        </Form>
      </Formik>
    </div>
  );
};

export default Account;
