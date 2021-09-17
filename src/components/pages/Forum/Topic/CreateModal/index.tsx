import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Button } from '@consta/uikit/Button';
import { Avatar } from '@consta/uikit/Avatar';
import BaseModal from 'components/Common/BaseModal';
import FormikTextarea from 'components/Common/Controls/Formik/Textarea';
import { REQUIRED } from 'utils/formik/validation';
import { RootState } from '../../../../../store/reducers/rootReducer';
import { createTopic } from '../../../../../utils/api/routes/forum';
import FormikInput from '../../../../Common/Controls/Formik/Input';
import { ITopicListItem } from '../../types';

import useStyles from './styles';

interface IProps {
  topicId: string;
  addTopic: (item: ITopicListItem) => void;
}

const CreateForum: FC<IProps> = ({ topicId, addTopic }) => {
  const styles = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const { name, avatar } = useSelector(
    (state: RootState) => state.user.profile
  );

  const { t } = useTranslation();

  const initialValues = {
    description: '',
    name: '',
  };

  const handleSubmit = (values: typeof initialValues) => {
    createTopic(topicId, { ...values }).then((res) => {
      addTopic(res.data);
      setModalOpen(false);
    });
  };

  const schema = Yup.object({
    question: REQUIRED,
  });

  return (
    <div className={styles.root}>
      <Button
        label={t('forum.create.openModal')}
        onClick={(): void => setModalOpen(true)}
      />

      <div className={styles.modal}>
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
              <Form>
                <Flex align="center" wrap="wrap" className={styles.topline}>
                  <Flex align="center" className={styles.formUser}>
                    <Avatar name={name} url={avatar ? avatar.image : ''} />
                    <Typography margin="0 0 0 8px" size="m" lineHeight="xs">
                      {name}
                    </Typography>
                  </Flex>
                </Flex>

                <div className={styles.formInputs}>
                  <FormikInput
                    label="Тема вопроса"
                    placeholder="Напишите тему"
                    name="name"
                    isRequired={false}
                  />
                </div>

                <div className={styles.formInputs}>
                  <FormikTextarea
                    label={t('forum.create.question.label')}
                    placeholder={t('forum.create.question.placeholder')}
                    name="description"
                    rows={5}
                  />
                  <Flex margin="24px 0 0" justify="flex-end">
                    <Button label={t('forum.create.cta')} type="submit" />
                  </Flex>
                </div>
              </Form>
            </Formik>
          </div>
        </BaseModal>
      </div>
    </div>
  );
};

export default CreateForum;
