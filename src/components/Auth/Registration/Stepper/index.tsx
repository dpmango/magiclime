import React, { FC } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

import { SetStateType } from 'types/common';
import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';
import { StepType } from '../types';
import useStyles from './styles';

interface IProps {
  currentStep: StepType;
  setCurrentStep: SetStateType<StepType>;
}

const Stepper: FC<IProps> = ({ currentStep, setCurrentStep }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const steps = [
    t('auth.signup.stepper.first'),
    t('auth.signup.stepper.second'),
    t('auth.signup.stepper.third'),
  ];

  const getStepClass = (index: number) => {
    if (currentStep === index + 1) return styles.currentStep;
    if (index + 1 < currentStep) return styles.passedStep;
    return styles.disableStep;
  };

  return (
    <Flex align="center" className={styles.container} margin="0 auto 90px">
      {steps.map((step, index) => (
        <React.Fragment key={uuidv4()}>
          <div className={styles.stepWrapper}>
            <div className={classNames(styles.step, getStepClass(index))} />
            <div>
              <Typography weight="semibold" size="l">
                {t('auth.signup.stepper.name')} {index + 1}
              </Typography>
              <Typography size="xs" view="secondary">
                {step}
              </Typography>
            </div>
          </div>
          {index !== steps.length - 1 && <div className={styles.line} />}
        </React.Fragment>
      ))}
    </Flex>
  );
};

export default Stepper;
