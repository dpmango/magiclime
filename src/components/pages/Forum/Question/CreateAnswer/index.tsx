import { Button } from '@consta/uikit/Button';
import { TextField } from '@consta/uikit/TextField';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BaseModal from '../../../../Common/BaseModal';
import Flex from '../../../../Common/Flex';
import useStyles from '../styles';

const CreateAnswer: FC<{ addAnswer: (text: string) => void }> = ({
  addAnswer,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState('');
  const { t } = useTranslation();
  const styles = useStyles();

  const submitAnswer = () => {
    addAnswer(text);
    setText('');
    setModalOpen(false);
  };

  return (
    <>
      <Button
        label={t('forum.details.cta')}
        width="full"
        size="l"
        onClick={() => setModalOpen(true)}
        className={styles.createBtn}
      />
      <BaseModal
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        title="Ваш ответ"
      >
        <Flex
          className={styles.textArea}
          align="flex-end"
          direction="column"
          margin="24px 0 0"
        >
          <TextField
            type="textarea"
            placeholder="Напишите подробный ответ"
            rows={5}
            value={text}
            onChange={({ value }) => setText(value || '')}
          />
          <Button label="Отправить" onClick={submitAnswer} />
        </Flex>
      </BaseModal>
    </>
  );
};

export default CreateAnswer;
