import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Button } from '@consta/uikit/Button';
import useStyles from './styles';
import Typography from '../../../Common/Typography';
import FormikSelect from '../../../Common/Controls/Formik/Select';
import FormikInput from '../../../Common/Controls/Formik/Input';
import { createWebinar } from '../../../../utils/api/routes/admin';
import { REQUIRED_STRING } from '../../../../utils/formik/validation';
import FormikDatePicker from '../../../Common/Controls/Formik/DatePicker';

const CreateWebinar: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const initialValues = {
    type: '',
    title: '',
    date: '',
    zoom_url: '',
    speaker: '',
    city: {
      title: '',
    },
  };

  const schema = Yup.object({
    type: REQUIRED_STRING,
    title: REQUIRED_STRING,
    date: REQUIRED_STRING,
    zoom_url: REQUIRED_STRING,
    speaker: REQUIRED_STRING,
    city: Yup.object({
      title: REQUIRED_STRING,
    }),
  });

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
        <Form>
          <div className={styles.container}>
            <FormikSelect
              items={[]}
              name="type"
              placeholder="Выбрать тип вебинара"
              label="Тип вебинара"
            />
            <FormikInput
              name="title"
              label="Введите заголовок"
              placeholder="Заголовок вебинара"
            />
            <FormikDatePicker
              name="date"
              label="Дата"
              placeholder="Выберите дату"
            />
            <FormikInput
              name="zoom_url"
              label="Ссылка"
              placeholder="Вставьте ссылку"
            />
            <FormikInput
              name="speaker"
              label="Спикер"
              placeholder="Имя и фамилия спикера"
            />
            <FormikSelect
              items={[]}
              name="city.title"
              label="Город"
              placeholder="Выбрать город"
            />
          </div>
          <Button
            label={t('admin.webinars.deployWebinar')}
            type="submit"
            view="secondary"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default CreateWebinar;
