import { SkeletonCircle, SkeletonText } from '@consta/uikit/Skeleton';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import { TextField } from '@consta/uikit/TextField';
import { IconCamera } from '@consta/uikit/IconCamera';
import { IconSearch } from '@consta/uikit/IconSearch';
import { v4 as uuid } from 'uuid';
import { IUser } from '../../../../types/interfaces/user';
import { createChat, getUsers } from '../../../../utils/api/routes/chat';
import PhotoField from '../../../Common/Controls/PhotoField';
import { ICreateChatForm } from '../types';
import useStyles from './styles';
import Flex from '../../../Common/Flex';
import Typography from '../../../Common/Typography';
import { ChatContext } from '../context';
import { SetStateType } from '../../../../types/common';
import FriendCard from './FriendCard';

const ChatCreating: FC<{ setActiveChatId: SetStateType<number | null> }> = ({
  setActiveChatId,
}) => {
  const [form, setForm] = useState<ICreateChatForm>({
    title: '',
    avatar: null,
    participants: [] as number[],
  });
  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const styles = useStyles({
    haveAvatar: !!form.avatar,
  });
  const { chatContext, setChatContext } = useContext(ChatContext);

  useEffect(() => {
    setLoading(true);
    getUsers(search)
      .then((res) => {
        setUsers(res.data.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  const handleSubmit = () => {
    createChat(form).then((res) => {
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
        <div className={styles.photoWrapper}>
          <PhotoField
            render={({ src, fieldId }) => (
              <label htmlFor={fieldId} className={styles.addPhoto}>
                {form.avatar ? (
                  <img src={src} alt="avatar" />
                ) : (
                  <IconCamera view="secondary" />
                )}
              </label>
            )}
            onChangeCallback={(avatar) => {
              setForm({ ...form, avatar: avatar.id });
            }}
          />
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
        {!loading
          ? users.map((user) => (
              <FriendCard
                key={user.id}
                friend={user}
                form={form}
                setForm={setForm}
              />
            ))
          : Array.from({ length: 4 }).map(() => (
              <div key={uuid()} className={styles.skeleton}>
                <SkeletonCircle size={32} />
                <SkeletonText rows={1} fontSize="xs" lineHeight="s" />
              </div>
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
