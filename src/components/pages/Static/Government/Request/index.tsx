/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/no-danger */
import React, { FC, useEffect, useState, useCallback, useMemo } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Checkbox } from '@consta/uikit/Checkbox';
import { Button } from '@consta/uikit/Button';
import moment from 'moment';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';
import FormikSelect from 'components/Common/Controls/Formik/Select';
import FormikInput from 'components/Common/Controls/Formik/Input';
import FormikTextarea from 'components/Common/Controls/Formik/Textarea';
import { REQUIRED, EMAIL } from 'utils/formik/validation';

import useStyles from './styles';

const GovernmentRequest: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const initialValues = {
    question: '',
    country: '',
    email: '',
    name: '',
    transaction: '',
    topic: '',
    description: '',
  };

  const schema = Yup.object({
    question: REQUIRED,
    country: REQUIRED,
    email: EMAIL,
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
    // createWebinar(values).then(() => {});
  };

  const questionOptions = useMemo(() => {
    return [
      {
        id: 1,
        label: 'Запрос от правохранительных органов',
      },
      {
        id: 2,
        label: 'Другое',
      },
    ];
  }, []);

  const countryOptions = useMemo(() => {
    return [
      {
        id: 1,
        label: 'Россия',
      },
      {
        id: 2,
        label: 'СНГ',
      },
    ];
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Typography size="4xl" weight="semibold">
          Отправить запрос
        </Typography>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={schema}
        >
          <Form className={styles.form}>
            <div className={styles.group}>
              <FormikSelect
                items={questionOptions}
                name="question"
                label={t('govForm.question.label')}
                placeholder={t('govForm.question.placeholder')}
              />
            </div>

            <div className={styles.group}>
              <FormikSelect
                items={countryOptions}
                name="country"
                label={t('govForm.country.label')}
                placeholder={t('govForm.country.placeholder')}
              />
            </div>
            <div className={styles.group}>
              <FormikInput name="email" label={t('govForm.email.label')} />
              <Typography
                size="xs"
                lineHeight="s"
                view="secondary"
                margin="6px 0 0"
              >
                {t('govForm.email.helper')}
              </Typography>
            </div>
            <div className={styles.group}>
              <FormikInput
                name="name"
                label={t('govForm.name.label')}
                placeholder={t('govForm.name.placeholder')}
                isRequired={false}
              />
            </div>
            <div className={styles.group}>
              <FormikTextarea
                name="transaction"
                label={t('govForm.transaction.label')}
                placeholder={t('govForm.transaction.placeholder')}
                rows={5}
              />
            </div>
            <div className={styles.group}>
              <FormikInput
                name="topic"
                label={t('govForm.topic.label')}
                placeholder={t('govForm.topic.placeholder')}
                isRequired={false}
              />
            </div>
            <div className={styles.group}>
              <FormikTextarea
                name="description"
                label={t('govForm.description.label')}
                placeholder={t('govForm.description.placeholder')}
                rows={5}
              />
            </div>

            <div className={styles.group}>
              <Button
                type="submit"
                width="full"
                size="l"
                label={t('govForm.cta')}
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default GovernmentRequest;
