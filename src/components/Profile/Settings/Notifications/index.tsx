import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import { Button } from '@consta/uikit/Button';
import FormikCheckbox from 'components/Common/Controls/Formik/Checkbox';
import { REQUIRED_STRING } from 'utils/formik/validation';

import useStyles from './styles';

const Notifications: FC = () => {
  const styles = useStyles();

  const initialValues = {
    payments: true,
    courses: true,
    events: true,
    news: false,
    promo: false,
    materials: false,
  };

  const handleSubmit = (values: typeof initialValues) => {
    // eslint-disable-next-line no-console
    console.log('TODO - form submit', values);
  };

  const schema = Yup.object({
    name: REQUIRED_STRING,
    surname: REQUIRED_STRING,
  });

  return (
    <div className={styles.root}>
      <Typography weight="semibold" lineHeight="s" size="2xl">
        Профиль
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <div className={styles.section}>
            <Typography weight="semibold" lineHeight="s" size="m">
              Общие
            </Typography>

            <div className={styles.uiGroup}>
              <FormikCheckbox label="Платежные уведомления" name="payments" />
            </div>
            <div className={styles.uiGroup}>
              <FormikCheckbox
                label="Информация о новых курсах, вебинарах и программах"
                name="courses"
              />
            </div>
            <div className={styles.uiGroup}>
              <FormikCheckbox
                label="Напоминания о предстоящих событиях в календаре"
                name="events"
              />
            </div>
            <div className={styles.uiGroup}>
              <FormikCheckbox label="Новости сервиса" name="news" />
            </div>
            <div className={styles.uiGroup}>
              <FormikCheckbox label="Акции и скидки от Lime" name="promo" />
            </div>
            <div className={styles.uiGroup}>
              <FormikCheckbox
                label="Рекомендованные материалы"
                name="materials"
              />
            </div>
          </div>

          <Button view="secondary" type="submit" label="Сохранить изменения" />
        </Form>
      </Formik>
    </div>
  );
};

export default Notifications;
