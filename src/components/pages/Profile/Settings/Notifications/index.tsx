import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Button } from '@consta/uikit/Button';
import FormikCheckbox from 'components/Common/Controls/Formik/Checkbox';
import { REQUIRED } from 'utils/formik/validation';

import useStyles from './styles';

const Notifications: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

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
    name: REQUIRED,
    surname: REQUIRED,
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
                {t('profile.settings.navigation.notifications')}
              </Typography>

              <Button
                view="primary"
                type="submit"
                disabled={Object.keys(touched).length === 0}
                label={t('profile.settings.cta.save')}
              />
            </Flex>

            <div className={styles.section}>
              <Typography weight="semibold" lineHeight="s" size="m">
                {t('profile.settings.notifications.mainGroup')}
              </Typography>

              <div className={styles.uiGroup}>
                <FormikCheckbox
                  label={t('profile.settings.notifications.payments')}
                  name="payments"
                />
              </div>
              <div className={styles.uiGroup}>
                <FormikCheckbox
                  label={t('profile.settings.notifications.courses')}
                  name="courses"
                />
              </div>
              <div className={styles.uiGroup}>
                <FormikCheckbox
                  label={t('profile.settings.notifications.events')}
                  name="events"
                />
              </div>
              <div className={styles.uiGroup}>
                <FormikCheckbox
                  label={t('profile.settings.notifications.news')}
                  name="news"
                />
              </div>
              <div className={styles.uiGroup}>
                <FormikCheckbox
                  label={t('profile.settings.notifications.promo')}
                  name="promo"
                />
              </div>
              <div className={styles.uiGroup}>
                <FormikCheckbox
                  label={t('profile.settings.notifications.materials')}
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
