/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/no-danger */
import React, { FC, useEffect, useState, useCallback, useMemo } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Checkbox } from '@consta/uikit/Checkbox';
import { Button } from '@consta/uikit/Button';
import moment from 'moment';
import { toast } from 'react-hot-toast';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';
import FormikSelect from 'components/Common/Controls/Formik/Select';
import FormikInput from 'components/Common/Controls/Formik/Input';
import FormikTextarea from 'components/Common/Controls/Formik/Textarea';
import { REQUIRED, EMAIL } from 'utils/formik/validation';
import { postGovernmentFeedback } from 'utils/api/routes/feedback';

import useStyles from './styles';

type SelectType = {
  id: number;
  label: string;
} | null;

const GovernmentRequest: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const initialValues = {
    question: null as SelectType,
    country: null as SelectType,
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
    name: REQUIRED,
    transaction: REQUIRED,
    topic: REQUIRED,
    description: REQUIRED,
  });

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    const { question, country, email, name, transaction, topic, description } =
      values;

    const [err, data] = await postGovernmentFeedback({
      question: question ? question!.label : ' ',
      country: country ? country!.label : ' ',
      email,
      name,
      transaction,
      topic,
      description,
    });

    if (err) {
      toast.error(t('govForm.toast.error'));
    }

    if (data) {
      toast.success(t('govForm.toast.success'));
      resetForm();
    }

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
          onSubmit={handleSubmit}
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
              />
            </div>
            <div className={styles.group}>
              <FormikTextarea
                name="transaction"
                label={t('govForm.transaction.label')}
                placeholder={t('govForm.transaction.placeholder')}
                rows={5}
                isRequired
              />
            </div>
            <div className={styles.group}>
              <FormikInput
                name="topic"
                label={t('govForm.topic.label')}
                placeholder={t('govForm.topic.placeholder')}
              />
            </div>
            <div className={styles.group}>
              <FormikTextarea
                name="description"
                label={t('govForm.description.label')}
                placeholder={t('govForm.description.placeholder')}
                rows={5}
                isRequired
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
