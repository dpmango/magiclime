import React, { FC } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { SetStateType } from '../../../../types/common';
import { StepType } from '../types';
import Flex from '../../../Common/Flex';
import useStyles from './styles';
import Typography from '../../../Common/Typography';

interface IProps {
  currentStep: StepType;
  setCurrentStep: SetStateType<StepType>;
}

const Stepper: FC<IProps> = ({ currentStep, setCurrentStep }) => {
  const styles = useStyles();
  const steps = [
    'Данные профиля',
    'Тип пользователя',
    'Предпочтения',
    'Дополнительно',
  ];

  const getStepClass = (index: number) => {
    if (currentStep === index + 1) return styles.currentStep;
    if (index + 1 < currentStep) return styles.passedStep;
    return styles.disableStep;
  };

  return (
    <Flex align="center" className={styles.container} margin="0 50px">
      {steps.map((step, index) => (
        <React.Fragment key={uuidv4()}>
          <div className={styles.stepWrapper}>
            <div className={classNames(styles.step, getStepClass(index))} />
            <div>
              <Typography weight="semibold" size="l">
                Шаг {index + 1}
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
