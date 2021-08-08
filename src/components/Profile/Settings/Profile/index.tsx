import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';
import FormikInput from 'components/Common/Controls/Formik/Input';
import { REQUIRED_STRING } from 'utils/formik/validation';
import { RootState } from 'store/reducers/rootReducer';
import { updateProfile } from 'store/reducers/user';

import useStyles from './styles';

const Profile: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');
  const { profile } = useSelector((state: RootState) => state.user);

  const initialValues = {
    name: profile.name,
    surname: 'api TODO',
    patronymic: 'api TODO',
    date_of_birth: profile.date_of_birth,
    country: profile.country,
    city: profile.city,
  };

  const handleSubmit = (values: typeof initialValues) => {
    const { name, date_of_birth, country, city } = values;

    dispatch(
      updateProfile({
        profile: {
          name: name || '',
          date_of_birth,
          // country,
          // city: city || '',
        },
        successCallback: () => setErrorMessage(''),
        errorCallback: (message: string) => setErrorMessage(message),
      })
    );
  };

  const schema = Yup.object({
    name: REQUIRED_STRING,
    surname: REQUIRED_STRING,
  });

  return (
    <div className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        Профиль
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
                <FormikInput label="Имя" name="name" />
              </GridItem>
              <GridItem>
                <FormikInput
                  label="Фамилия"
                  name="surname"
                  isRequired={false}
                />
              </GridItem>
              <GridItem>
                <FormikInput
                  label="Отчество"
                  name="patronymic"
                  isRequired={false}
                />
              </GridItem>
              <GridItem>
                <FormikInput
                  label="Дата рождения"
                  name="date_of_birth"
                  placeholder="DD.MM.YYYY"
                  isRequired={false}
                />
              </GridItem>
              <GridItem>
                <FormikInput label="Страна" name="country" isRequired={false} />
              </GridItem>
              <GridItem>
                <FormikInput label="Город" name="city" isRequired={false} />
              </GridItem>
            </Grid>
          </div>

          <Button view="secondary" type="submit" label="Сохранить изменения" />
        </Form>
      </Formik>
    </div>
  );
};

export default Profile;
