import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
import { REQUIRED_STRING } from 'utils/formik/validation';
import { RootState } from '../../../../../store/reducers/rootReducer';
import { createTopic } from '../../../../../utils/api/routes/forum';
import { ITopicListItem } from '../../types';

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
    name: themeSelectList[0],
  };

  const handleSubmit = (values: typeof initialValues) => {
    const data = { ...values, name: values.name.label };
    createTopic(topicId, data).then((res) => {
      addTopic(res.data);
      setModalOpen(false);
    });
  };

  const schema = Yup.object({
    question: REQUIRED_STRING,
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
          setModalOpen={(x: boolean) => setModalOpen(x)}
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
                      <Avatar name={name} url={avatar ? avatar.image : ''} />
                      <Typography margin="0 0 0 8px" size="m" lineHeight="xs">
                        {name}
                      </Typography>
                    </Flex>
                    <div className={styles.formSelect}>
                      <FormikSelect
                        items={themeSelectList}
                        placeholder="Выберите тему"
                        name="name"
                        isRequired={false}
                      />
                    </div>
                  </Flex>

                  <div className={styles.formInputs}>
                    <FormikTextarea
                      label={t('forum.create.question.label')}
                      placeholder={t('forum.create.question.placeholder')}
                      name="description"
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
    </div>
  );
};

export default CreateForum;
