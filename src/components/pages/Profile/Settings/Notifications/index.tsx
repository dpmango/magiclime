import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ touched }) => (
          <Form>
            <Flex align="center" justify="space-between">
              <Typography
                margin="0 24px 0 0"
                weight="semibold"
                lineHeight="s"
                size="2xl"
              >
                Уведомления
              </Typography>

              <Button
                view="primary"
                type="submit"
                disabled={Object.keys(touched).length === 0}
                label="Сохранить изменения"
              />
            </Flex>

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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Notifications;
