import React, { FC } from 'react';
import { Avatar } from '@consta/uikit/Avatar';
import { Switch } from '@consta/uikit/Switch';
import { IUser } from '../../../../../types/interfaces/user';
import Flex from '../../../../Common/Flex';
import Typography from '../../../../Common/Typography';
import { SetStateType } from '../../../../../types/common';
import { ICreateChatForm } from '../../types';
import useStyles from '../styles';

interface IProps {
  friend: IUser;
  form: ICreateChatForm;
  setForm: SetStateType<ICreateChatForm>;
}

const FriendCard: FC<IProps> = ({ friend, form, setForm }) => {
  const styles = useStyles({});

  const handleChange = (checked: boolean) => {
    // Сюда приходит следующее состояние, поэтому условия нужно делать наоборот
    if (checked)
      setForm({ ...form, participants: [...form.participants, friend.id] });
    else
      setForm({
        ...form,
        participants: [...form.participants.filter((id) => id !== friend.id)],
      });
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      padding="13px 16px"
      className={styles.friend}
    >
      <Flex align="center">
        <Avatar
          form="round"
          name={friend.name}
          url={friend.avatar ? friend.avatar.image : ''}
        />
        <Typography size="s" weight="semibold" margin="0 0 0 15px">
          {friend.name}
        </Typography>
      </Flex>
      <Switch
        checked={form.participants.includes(friend.id)}
        onChange={({ checked }) => handleChange(checked)}
      />
    </Flex>
  );
};

export default FriendCard;
