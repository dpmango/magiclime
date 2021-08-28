import { ProgressSpin } from '@consta/uikit/ProgressSpin';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import { TextField } from '@consta/uikit/TextField';
import { IconCamera } from '@consta/uikit/IconCamera';
import { IconSearch } from '@consta/uikit/IconSearch';
import { IUser } from '../../../../types/interfaces/user';
import { createChat, getUsers } from '../../../../utils/api/routes/chat';
import { ICreateChatForm } from '../types';
import useStyles from './styles';
import Flex from '../../../Common/Flex';
import Typography from '../../../Common/Typography';
import { ChatContext } from '../context';
import { ChangeType, SetStateType } from '../../../../types/common';
import { uploadImage } from '../../../../utils/api/routes/other';
import FriendCard from './FriendCard';

const ChatCreating: FC<{ setActiveChatId: SetStateType<number | null> }> = ({
  setActiveChatId,
}) => {
  const [form, setForm] = useState<ICreateChatForm>({
    title: '',
    image: {
      id: 0,
      image: '',
    },
    participants: [] as number[],
  });
  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState('');
  const [uploadAvatarLoading, setUploadAvatarLoading] = useState(false);
  const styles = useStyles({
    haveAvatar: !!form.image.id,
  });
  const { chatContext, setChatContext } = useContext(ChatContext);

  useEffect(() => {
    getUsers(search).then((res) => {
      setUsers(res.data.results);
    });
  }, [search]);

  const addImage = (e: ChangeType) => {
    setUploadAvatarLoading(true);
    uploadImage(e.target!.files![0])
      .then((res) => {
        setForm({ ...form, image: res.data });
      })
      .finally(() => {
        setUploadAvatarLoading(false);
      });
  };

  const handleSubmit = () => {
    const avatar = form.image.id ? +form.image.id : null;
    const data = { ...form, image: avatar };

    createChat(data).then((res) => {
      cancel();
      setActiveChatId(res.data.id);
    });
  };

  const cancel = () => {
    setChatContext({ ...chatContext, mode: 'list' });
  };

  return (
    <div className={styles.root}>
      <Flex
        justify="space-between"
        align="center"
        padding="11px 16px"
        margin="0 0 20px"
        className={styles.header}
      >
        <Typography size="s" weight="semibold">
          Создание беседы
        </Typography>
        <Button
          size="s"
          view="clear"
          onlyIcon
          iconLeft={IconClose}
          onClick={cancel}
        />
      </Flex>
      <Flex align="center" padding="0 16px">
        <div>
          <input
            type="file"
            id="chat_photo_field"
            onChange={addImage}
            className={styles.hiddenInput}
          />
          <label htmlFor="chat_photo_field" className={styles.addPhoto}>
            {uploadAvatarLoading ? (
              <ProgressSpin size="m" />
            ) : form.image.id ? (
              <img src={form.image.image} alt="avatar" />
            ) : (
              <IconCamera view="secondary" />
            )}
          </label>
        </div>
        <TextField
          value={form.title}
          className={styles.input}
          onChange={({ value }) => setForm({ ...form, title: value as string })}
          placeholder="Введите название"
        />
      </Flex>
      <Flex margin="30px 0" padding="0 16px">
        <TextField
          placeholder="Поиск по пользователям"
          value={search}
          className={styles.input}
          leftSide={IconSearch}
          onChange={({ value }) => setSearch(value as string)}
        />
      </Flex>
      <Flex direction="column" className={styles.list}>
        {users.map((user) => (
          <FriendCard
            key={user.id}
            friend={user}
            form={form}
            setForm={setForm}
          />
        ))}
      </Flex>
      <Flex justify="space-between" padding="16px" className={styles.panel}>
        <Button
          label="Создать беседу"
          view="primary"
          onClick={handleSubmit}
          disabled={!form.title || !form.participants.length}
        />
        <Button label="Отмена" view="ghost" onClick={cancel} />
      </Flex>
    </div>
  );
};

export default ChatCreating;
