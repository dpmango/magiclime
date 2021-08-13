import React, { FC, useContext, useEffect, useState } from 'react';
import useStyles from './styles';
import Flex from '../../../Common/Flex';
import Typography from '../../../Common/Typography';
import { Button } from '@consta/uikit/Button';
import { ChatContext } from '../context';
import { IconClose } from '@consta/uikit/IconClose';
import { TextField } from '@consta/uikit/TextField';
import { UserIcon } from '../../../../assets/icons';
import { IconCamera } from '@consta/uikit/IconCamera';
import { ChangeType } from '../../../../types/common';
import { uploadImage } from '../../../../utils/api/routes/other';
import { IconSearch } from '@consta/uikit/IconSearch';
import FriendCard from './FriendCard';
import { IFriend } from '../types';

const ChatCreating: FC = () => {
  const [form, setForm] = useState({
    name: '',
    image: {
      id: 0,
      image: '',
    },
    users: [] as number[],
  });
  const [users, setUsers] = useState<IFriend[]>([
    { id: 1, name: 'Roman Avdeev', image: '' },
    {
      id: 2,
      name: 'Roman Avdeev',
      image: 'https://iohotnik.ru/wp-content/auploads/775545/lesnye_koty.jpg',
    },
    { id: 3, name: 'Roman Avdeev', image: '' },
    { id: 4, name: 'Roman Avdeev', image: '' },
    { id: 5, name: 'Roman Avdeev', image: '' },
  ]);
  const [search, setSearch] = useState('');
  const styles = useStyles();
  const { chatContext, setChatContext } = useContext(ChatContext);

  useEffect(() => {
    //Get users list
  }, [search]);

  const addImage = (e: ChangeType) => {
    uploadImage(e.target!.files![0]).then((res) => {
      setForm({ ...form, image: res.data });
    });
  };

  const handleSubmit = () => {
    const avatar = !!form.image.id ? +form.image.id : null;
    const data = { ...form, image: avatar };
  };

  const cancel = () => {
    setChatContext({ ...chatContext, mode: 'list' });
  };

  return (
    <div className={styles.root}>
      <Flex
        justify={'space-between'}
        align={'center'}
        padding={'11px 16px'}
        margin={'0 0 20px'}
        className={styles.header}
      >
        <Typography size={'s'} weight={'semibold'}>Создание беседы</Typography>
        <Button size={'s'} view={'clear'} onlyIcon iconLeft={IconClose} onClick={cancel} />
      </Flex>
      <Flex align={'center'} padding={'0 16px'}>
        <div>
          <input
            type={'file'}
            id={'chat_photo_field'}
            onChange={addImage}
            className={styles.hiddenInput}
          />
          <label htmlFor={'chat_photo_field'} className={styles.addPhoto}>
            {form.image.id ? (
              <img src={form.image.image} alt={'avatar'} />
            ) : (
              <IconCamera view={'secondary'} />
            )}
          </label>
        </div>
        <TextField
          value={form.name}
          className={styles.input}
          onChange={({ value }) => setForm({ ...form, name: value as string })}
          placeholder={'Введите название'}
        />
      </Flex>
      <Flex margin={'30px 0'} padding={'0 16px'}>
        <TextField
          placeholder={'Поиск по пользователям'}
          value={search}
          className={styles.input}
          leftSide={IconSearch}
          onChange={({ value }) => setSearch(value as string)}
        />
      </Flex>
      <Flex direction={'column'} className={styles.list}>
        {users.map((user) => (
          <FriendCard
            key={user.id}
            friend={user}
            form={form}
            setForm={setForm}
          />
        ))}
      </Flex>
      <Flex justify={'space-between'} padding={'16px'} className={styles.panel}>
        <Button
          label={'Создать беседу'}
          view={'primary'}
          onClick={handleSubmit}
        />
        <Button label={'Отмена'} view={'ghost'} onClick={cancel} />
      </Flex>
    </div>
  );
};

export default ChatCreating;
