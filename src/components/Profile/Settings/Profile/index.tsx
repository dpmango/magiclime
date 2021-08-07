import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';
import FormikInput from 'components/Common/Controls/Formik/Input';
import { REQUIRED_STRING } from 'utils/formik/validation';

import useStyles from './styles';

const Profile: FC = () => {
  const styles = useStyles();

  const initialValues = {
    name: 'Анастасия',
    surname: 'Котомкина',
    patronymic: 'Викторовна',
    birthday: '03.07.1992',
    country: 'Россия',
    city: 'Санкт-Петербург',
  };

  const handleSubmit = (values: typeof initialValues) => {
    // eslint-disable-next-line no-console
    console.log('TODO - form submit', values);
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
                <FormikInput label="Фамилия" name="surname" />
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
                  name="birthday"
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
