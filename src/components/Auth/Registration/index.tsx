import React, { FC, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { IconForward } from '@consta/uikit/IconForward';
import { IconBackward } from '@consta/uikit/IconBackward';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IBaseAuthProps } from '../types';
import Typography from '../../Common/Typography';
import useStyles from './styles';
import { StepType } from './types';
import Stepper from './Stepper';
import ProfileStep from './Steps/Profile';
import {
  CONFIRM,
  EMAIL,
  PHONE,
  REGEXP_TEST,
  REQUIRED_CHECKBOX,
  REQUIRED_STRING,
} from '../../../utils/formik/validation';
import UserType from './Steps/UserType';
import Additional from './Steps/Additional';
import Preferences from './Steps/Preferences';
import { registrationUser } from '../../../utils/api/routes/auth';
import { registration } from '../../../store/reducers/user';

const Registration: FC<IBaseAuthProps> = ({ closeModal }) => {
  const [step, setStep] = useState<StepType>(1);
  const [errorMessage, setErrorMessage] = useState('');
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ProfileStep />;
      case 2:
        return <UserType />;
      case 3:
        return <Preferences />;
      case 4:
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
    media_sponsor: '',
    phone: '',
    user_agreement: false,
    mailing_agree: false,
    user_type: '',
    name: '',
    about: '',
    avatar_id: {
      id: 0,
      image: '',
    },
  };

  const schema = Yup.object({
    username: REQUIRED_STRING,
    email: EMAIL,
    password: REGEXP_TEST(
      'password',
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      'Пароль должен содержать хотя бы одну цифру, заглавную и прописную буквы!'
    )
      .min(8, 'Минимум 8 символов!')
      .max(30, 'Максимум 30 символов!'),
    passwordConfirm: CONFIRM,
    media_sponsor: REQUIRED_STRING.length(40, 'Неверный формат кода!'),
    user_agreement: REQUIRED_CHECKBOX('user_agreement'),
    name: step === 4 ? REQUIRED_STRING : Yup.string(),
  });

  const errorCallback = (error: string) => {
    setErrorMessage(error);
    setStep(1);
  };

  const handleSubmit = (values: typeof initialValues) => {
    if (step !== 4) {
      setStep((step + 1) as StepType);
    } else {
      const avatar = values.avatar_id.id ? +values.avatar_id.id : null;
      const data = { ...values, avatar_id: avatar };
      dispatch(
        registration({
          ...data,
          successCallback: () => history.push('/profile'),
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
        Регистрация
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
      <Stepper currentStep={step} setCurrentStep={setStep} />
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
                  label="Назад"
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
                  label={step === 4 ? 'Завершить' : 'Дальше'}
                  iconRight={step !== 4 ? IconForward : undefined}
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
