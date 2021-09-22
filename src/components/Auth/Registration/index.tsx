import React, { FC, useCallback, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { IconForward } from '@consta/uikit/IconForward';
import { IconBackward } from '@consta/uikit/IconBackward';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  CONFIRM,
  EMAIL,
  PHONE,
  REGEXP_TEST,
  REQUIRED_CHECKBOX,
  REQUIRED,
} from 'utils/formik/validation';

import Typography from 'components/Common/Typography';
import { registration } from 'store/reducers/user';
import { setAuthOpen, setAuth } from 'store/reducers/settings';
import { useQuery } from 'hooks/useQuery';

import { StepType } from './types';
import Stepper from './Stepper';
import ProfileStep from './Steps/Profile';
import UserType from './Steps/UserType';
import Additional from './Steps/Additional';
import useStyles from './styles';

const Registration: FC = () => {
  const [step, setStep] = useState<StepType>(1);
  const [errorMessage, setErrorMessage] = useState('');
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const { t } = useTranslation();

  const closeModal = useCallback(() => {
    dispatch(setAuthOpen(false));
  }, []);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ProfileStep />;
      // case 2:
      //   return <UserType />;
      case 2:
        return <Additional />;
      default:
        return <ProfileStep />;
    }
  };

  const initialValues = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    media_sponsor: query.get('ref') || '',
    // phone: '',
    user_agreement: false,
    // mailing_agree: false,
    // user_type: '',
    name: '',
    about: '',
    avatar_id: null,
  };

  const schema = Yup.object({
    username: REGEXP_TEST(
      'username',
      /^([a-zA-Z0-9\-\\.]+)$/,
      t('auth.signup.validation.login.mask')
    ),
    email: EMAIL,
    password: REGEXP_TEST(
      'password',
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      t('auth.signup.validation.password.mask')
    )
      .min(8, t('auth.signup.validation.password.min'))
      .max(30, t('auth.signup.validation.password.max')),
    passwordConfirm: CONFIRM,
    media_sponsor: Yup.lazy((value) => {
      if (value && value.trim().length > 0) {
        return Yup.string().length(
          40,
          t('auth.signup.validation.media_sponsor')
        );
      }
      return Yup.string().trim().length(0);
    }),
    user_agreement: REQUIRED_CHECKBOX('user_agreement'),
    name: step === 2 ? REQUIRED : Yup.string(),
  });

  const errorCallback = (error: string) => {
    setErrorMessage(error);
    setStep(1);
  };

  const handleSubmit = (values: typeof initialValues) => {
    if (step !== 2) {
      setStep((step + 1) as StepType);
    } else {
      const data = { ...values };
      dispatch(
        registration({
          ...data,
          successCallback: () => {
            dispatch(setAuth({ opened: false, type: 'sign_in' }));
            history.push('/profile/me');
          },
          errorCallback,
        })
      );
    }
  };

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
      <Typography size="3xl" align="center" margin="0 0 24px" weight="semibold">
        {t('auth.signup.title')}
      </Typography>
      {errorMessage && (
        <Typography
          view="alert"
          margin="0 0 25px"
          align="center"
          weight="semibold"
          size="l"
        >
          {errorMessage}
        </Typography>
      )}
      {/* <Stepper currentStep={step} setCurrentStep={setStep} /> */}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          {renderStep()}
          {step !== 1 && (
            <Grid cols="2" gap="m">
              <GridItem>
                <Button
                  view="secondary"
                  label={t('common.back')}
                  iconLeft={IconBackward}
                  type="button"
                  width="full"
                  onClick={() => setStep((step - 1) as StepType)}
                />
              </GridItem>
              <GridItem>
                <Button
                  width="full"
                  type="submit"
                  label={step === 2 ? t('common.finalize') : t('common.next')}
                  iconRight={step !== 2 ? IconForward : undefined}
                />
              </GridItem>
            </Grid>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
