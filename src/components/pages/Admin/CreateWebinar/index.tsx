import React, { FC, useMemo, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import FormStepper, { StepsType } from '../../../Common/FormStepper';
import BasicSettings from './Steps/BasicSettings';
import Description from './Steps/Description';
import Speakers from './Steps/Speakers';
import useStyles from './styles';
import Typography from '../../../Common/Typography';
import { createWebinar } from '../../../../utils/api/routes/admin';
import { REQUIRED_STRING } from '../../../../utils/formik/validation';
import { IFormSpeaker } from './types';

const CreateWebinar: FC = () => {
  const [step, setStep] = useState(1);
  const styles = useStyles();
  const { t } = useTranslation();

  const steps = useMemo<StepsType>(
    () => [
      {
        section: 'Спланируйте вебинар',
        sectionSteps: [
          { id: 1, label: 'Основные настройки' },
          { id: 2, label: 'Добавить спикеров' },
          { id: 3, label: 'Описание' },
        ],
      },
    ],
    []
  );

  const initialValues = {
    step_1: {
      banner: '',
      type: '',
      date: '',
      title: '',
      city: '',
      zoom_url: '',
    },
    step_2: {
      speakers: [
        {
          avatar: null,
          name: '',
          position: '',
          description: '',
        },
      ],
    },
    step_3: {
      description: '',
    },
  };

  const schema = Yup.object({
    step_1: Yup.object({
      type: REQUIRED_STRING,
      date: REQUIRED_STRING,
      title: REQUIRED_STRING,
      zoom_url: REQUIRED_STRING,
      city: REQUIRED_STRING,
    }),
    step_2: Yup.object({
      speakers: Yup.array().of(
        Yup.object({
          name: REQUIRED_STRING,
          position: REQUIRED_STRING,
        })
      ),
    }),
    step_3: Yup.object({
      description: REQUIRED_STRING,
    }),
  });

  const renderStep = (values: typeof initialValues) => {
    switch (step) {
      case 1:
        return <BasicSettings />;
      case 2:
        return <Speakers speakers={values.step_2.speakers as IFormSpeaker[]} />;
      case 3:
        return <Description />;
      default:
        return <BasicSettings />;
    }
  };

  const handleSubmit = (values: typeof initialValues) => {
    createWebinar(values).then(() => {});
  };

  return (
    <div className={styles.root}>
      <Typography weight="semibold" size="3xl" margin="0 0 24px">
        {t('admin.webinars.createWebinar')}
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
                  {
                    steps[0].sectionSteps.find((item) => item.id === step)!
                      .label
                  }
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
                  label={t('admin.webinars.deployWebinar')}
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

export default CreateWebinar;
