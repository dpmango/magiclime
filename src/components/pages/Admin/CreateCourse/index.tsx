import { Button } from '@consta/uikit/Button';
import { Form, Formik } from 'formik';
import React, { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import FormStepper, { StepsType } from '../../../Common/FormStepper';
import Typography from '../../../Common/Typography';
import Audience from './Steps/Audience';
import BaseSettings from './Steps/BaseSettings';
import PlanSettings from './Steps/PlanSettings';
import useStyles from './styles';

const CreateCourse: FC = () => {
  const [step, setStep] = useState(1);
  const { t } = useTranslation();
  const styles = useStyles();

  const steps = useMemo<StepsType>(
    () => [
      {
        section: 'Спланируйте курс',
        sectionSteps: [
          { id: 1, label: 'Аудитория' },
          { id: 2, label: 'Основные настройки' },
        ],
      },
      {
        section: 'Лендинг курса',
        sectionSteps: [{ id: 3, label: 'Конструктор лендинга' }],
      },
      {
        section: 'План обучения',
        sectionSteps: [
          { id: 4, label: 'Настройки' },
          { id: 5, label: 'Разделы' },
        ],
      },
    ],
    []
  );

  const initialValues = useMemo(
    () => ({
      step_1: {
        category: '',
        subcategory: '',
        language: '',
        level: '',
        banner: '',
        promo: '',
        about_course: '',
        about_audience: '',
      },
      step_2: {
        title: '',
        description: '',
        format: '',
        duration: '',
        price: '',
        matrix_level: '',
      },
      step_3: {
        landing: '',
      },
      step_4: {
        access_to_next: '',
        access_to_course: '',
      },
      step_5: {
        lessons: [
          {
            title: '',
            description: '',
          },
        ],
      },
    }),
    []
  );

  const schema = Yup.object({});

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  const renderStep = (values: typeof initialValues) => {
    switch (step) {
      case 1:
        return <Audience />;
      case 2:
        return <BaseSettings />;
      case 4:
        return <PlanSettings />;
      default:
        return <Audience />;
    }
  };

  const getTitle = (): string => {
    const arr = steps.reduce(
      (acc, item) => [...acc, ...item.sectionSteps],
      [] as Array<{ id: number; label: string }>
    );
    return arr.find((item) => item.id === step)!.label;
  };

  return (
    <div className={styles.root}>
      <Typography weight="semibold" size="3xl" margin="0 0 24px">
        Создать курс
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={schema}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <div className={styles.container}>
              <div>
                <Typography weight="semibold" size="2xl" margin="0 0 24px">
                  {getTitle()}
                </Typography>
                {renderStep(values)}
              </div>
              <div>
                <FormStepper
                  steps={steps}
                  currentStep={step}
                  setStep={setStep}
                  errors={errors}
                  isSubmit={isSubmitting}
                />
                <Button
                  label="Опубликовать курс"
                  type="submit"
                  view="primary"
                  width="full"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateCourse;
