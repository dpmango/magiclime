import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Button } from '@consta/uikit/Button';
import FormikInput from 'components/Common/Controls/Formik/Input';
import { REQUIRED, validationMessages } from 'utils/formik/validation';
import { changePassword } from 'store/reducers/user';

import useStyles from './styles';

const Profile: FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [errorMessage, setErrorMessage] = useState('');

  const initialValues = {
    current_password: '',
    new_password: '',
    repeatPassword: '',
  };

  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    const { current_password, new_password } = values;

    dispatch(
      changePassword({
        data: {
          current_password,
          new_password,
        },
        successCallback: () => {
          resetForm();
          setErrorMessage('');
        },
        errorCallback: (message: string) => setErrorMessage(message),
      })
    );
  };

  const schema = Yup.object({
    current_password: REQUIRED,
    new_password: REQUIRED,
    repeatPassword: Yup.string()
      .required(validationMessages.required)
      .oneOf(
        [Yup.ref('new_password'), null],
        validationMessages.passwordRepeat
      ),
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
                {t('profile.settings.navigation.security')}
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
              <div className={styles.inputs}>
                <div className={styles.uiGroup}>
                  <FormikInput
                    label={t('profile.settings.security.passwordCurrent')}
                    name="current_password"
                    isPassword
                  />
                </div>
                <div className={styles.uiGroup}>
                  <FormikInput
                    label={t('profile.settings.security.passwordNew')}
                    name="new_password"
                    isPassword
                  />
                </div>
                <div className={styles.uiGroup}>
                  <FormikInput
                    label={t('profile.settings.security.passwordRepeat')}
                    name="repeatPassword"
                    isPassword
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
