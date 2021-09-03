import React, { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import ConstaIcons from 'assets/icons/ConstaIcons';
import Flex from 'components/Common/Flex';
import { Button } from '@consta/uikit/Button';
import { Avatar } from '@consta/uikit/Avatar';
import BaseModal from 'components/Common/BaseModal';
import FormikSelect from 'components/Common/Controls/Formik/Select';
import FormikTextarea from 'components/Common/Controls/Formik/Textarea';
import { REQUIRED } from 'utils/formik/validation';

import useStyles from './styles';

type SelectItem = {
  label: string;
  id: number;
};

const themeSelectList: SelectItem[] = [
  {
    id: 1,
    label: 'Тема форума 1',
  },
  {
    id: 2,
    label: 'Тема форума 2',
  },
  {
    id: 3,
    label: 'Тема форума 3',
  },
];

const CreateForum: FC = () => {
  const styles = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const { t } = useTranslation();

  const initialValues = {
    question: '',
    theme: themeSelectList[0],
  };

  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    // TODO - api things
    resetForm();
  };

  const schema = Yup.object({
    question: REQUIRED,
  });

  return (
    <div className={styles.root}>
      <Button
        label={t('forum.create.openModal')}
        width="full"
        onClick={(): void => setModalOpen(true)}
      />

      <BaseModal
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        title={t('forum.create.title')}
      >
        <div className={styles.form}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
          >
            {({ isValid, touched }) => (
              <Form>
                <Flex align="center" wrap="wrap" className={styles.topline}>
                  <Flex align="center" className={styles.formUser}>
                    <Avatar name="User name" />
                    <Typography margin="0 0 0 8px" size="m" lineHeight="xs">
                      User name
                    </Typography>
                  </Flex>
                  <div className={styles.formSelect}>
                    <FormikSelect
                      items={themeSelectList}
                      placeholder="Выберите тему"
                      name="theme"
                      isRequired={false}
                    />
                  </div>
                </Flex>

                <div className={styles.formInputs}>
                  <FormikTextarea
                    label={t('forum.create.question.label')}
                    placeholder={t('forum.create.question.placeholder')}
                    name="question"
                    rows={5}
                  />
                  <Flex margin="24px 0 0" justify="flex-end">
                    <Button
                      disabled={!Object.keys(touched).length || !isValid}
                      label={t('forum.create.cta')}
                      type="submit"
                    />
                  </Flex>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </BaseModal>
    </div>
  );
};

export default CreateForum;
