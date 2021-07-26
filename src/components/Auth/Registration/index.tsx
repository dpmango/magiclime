import React, { FC, useState } from 'react';
import { IBaseAuthProps } from '../types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from '../../Common/Typography';
import useStyles from './styles';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import { StepType } from './types';
import Stepper from './Stepper';
import ProfileStep from './Steps/Profile';
import { REQUIRED_STRING } from '../../../utils/formik/validation';
import UserType from './Steps/UserType';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { IconForward } from '@consta/uikit/IconForward';
import { IconBackward } from '@consta/uikit/IconBackward';
import Additional from './Steps/Additional';
import Preferences from './Steps/Preferences';

const Registration: FC<IBaseAuthProps> = ({ closeModal }) => {
  const [step, setStep] = useState<StepType>(1);
  const styles = useStyles();

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
    login: '',
    email: '',
    password: '',
    passwordConfirm: '',
    code: '',
    phone: '',
    user_agreement: false,
    mailing_agree: false,
    user_type: '',
    name: '',
    description: '',
    photo: '',
  };

  const schema = Yup.object({
    login: REQUIRED_STRING,
  });

  const handleSubmit = (values: typeof initialValues) => {
    if (step !== 4) {
      setStep((step + 1) as StepType);
    } else {
      console.log(values);
    }
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
      <Typography
        size={'3xl'}
        align={'center'}
        margin={'0 0 24px'}
        weight={'semibold'}
      >
        Регистрация
      </Typography>
      <Stepper currentStep={step} setCurrentStep={setStep} />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          {renderStep()}
          {step !== 1 && (
            <Grid cols={'2'} gap={'m'}>
              <GridItem>
                <Button
                  view={'secondary'}
                  label={'Назад'}
                  iconLeft={IconBackward}
                  type={'button'}
                  width={'full'}
                  onClick={() => setStep((step - 1) as StepType)}
                />
              </GridItem>
              <GridItem>
                <Button
                  width={'full'}
                  type={'submit'}
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
