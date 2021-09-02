import React, { FC, Fragment } from 'react';
import { v4 as uuid } from 'uuid';
import cln from 'classnames';
import Flex from '../Flex';
import Typography from '../Typography';
import useStyles from './styles';

export type StepsType = Array<{
  section?: string;
  sectionSteps: Array<{ id: number; label: string }>;
}>;

interface IProps<T> {
  steps: StepsType;
  currentStep: number;
  setStep: (step: number) => void;
  errors: T;
  isSubmit: boolean;
}

const FormStepper = <T extends object>({
  steps,
  currentStep,
  setStep,
  errors,
  isSubmit,
}: IProps<T>) => {
  const styles = useStyles();
  return (
    <Flex direction="column">
      {steps.map((item) => (
        <Fragment key={uuid()}>
          {item.section && (
            <Typography
              view="ghost"
              margin="0 0 8px"
              size="xs"
              transform="uppercase"
            >
              {item.section}
            </Typography>
          )}
          <Flex
            direction="column"
            margin="0 0 24px"
            className={styles.stepsWrapper}
          >
            {item.sectionSteps.map((step) => (
              <div
                key={step.id}
                className={cln(styles.step, {
                  [styles.activeStep]: step.id === currentStep,
                  [styles.errorStep]: errors.hasOwnProperty(`step_${step.id}`),
                })}
                onClick={() => setStep(step.id)}
              >
                <Typography
                  view={currentStep === step.id ? 'primary' : 'secondary'}
                >
                  {step.label}
                </Typography>
              </div>
            ))}
          </Flex>
        </Fragment>
      ))}
    </Flex>
  );
};

export default React.memo(FormStepper, (prevProps, nextProps) => {
  return (
    prevProps.currentStep === nextProps.currentStep &&
    prevProps.isSubmit === nextProps.isSubmit
  );
});
