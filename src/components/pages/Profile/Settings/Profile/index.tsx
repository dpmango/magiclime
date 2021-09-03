import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Button } from '@consta/uikit/Button';
import FormikInput from 'components/Common/Controls/Formik/Input';
import { REQUIRED } from 'utils/formik/validation';
import { RootState } from 'store/reducers/rootReducer';
import { updateProfile } from 'store/reducers/user';
import { dateMask } from 'utils/helpers/mask';
import useStyles from './styles';

const Profile: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [errorMessage, setErrorMessage] = useState('');
  const { profile } = useSelector((state: RootState) => state.user);

  const initialValues = {
    name: profile.name,
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
          country: country || '',
          city: city || '',
        },
        successCallback: () => setErrorMessage(''),
        errorCallback: (message: string) => setErrorMessage(message),
      })
    );
  };

  const schema = Yup.object({
    name: REQUIRED,
    country: REQUIRED,
    city: REQUIRED,
  });

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
                {t('profile.settings.navigation.profile')}
              </Typography>

              <Button
                view="primary"
                type="submit"
                disabled={Object.keys(touched).length === 0}
                label={t('profile.settings.cta.save')}
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
                    label={t('profile.settings.profile.name.label')}
                    name="name"
                    placeholder={t('profile.settings.profile.name.placeholder')}
                  />
                </GridItem>
                <GridItem>
                  <FormikInput
                    label={t('profile.settings.profile.birthday.label')}
                    name="date_of_birth"
                    placeholder={t(
                      'profile.settings.profile.birthday.placeholder'
                    )}
                    isRequired={false}
                    mask={dateMask}
                  />
                </GridItem>
                <GridItem>
                  <FormikInput
                    label={t('profile.settings.profile.country.label')}
                    name="country"
                    placeholder={t(
                      'profile.settings.profile.country.placeholder'
                    )}
                    isRequired
                  />
                </GridItem>
                <GridItem>
                  <FormikInput
                    label={t('profile.settings.profile.city.label')}
                    name="city"
                    placeholder={t('profile.settings.profile.city.placeholder')}
                    isRequired
                  />
                </GridItem>
              </Grid>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
