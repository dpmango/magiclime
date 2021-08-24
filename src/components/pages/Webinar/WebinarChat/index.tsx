import React, {
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { TextField } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';
import moment from 'moment';
import useStyles from './styles';
import Flex from '../../../Common/Flex';
import Message from '../../Chats/Chat/Message';
import { IMessage } from '../../Chats/types';
import icons from '../../Chats/Chat/Panel/icons';
import Typography from '../../../Common/Typography';

const WebinarChat = () => {
  const styles = useStyles();
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([
    {
      id: 1,
      text: 'Hello',
      created_at: '2021-08-08 08:45',
      creator: { id: 1, name: 'Ivan Ivanov', avatar: null },
    },
    {
      id: 2,
      text: 'How are you?',
      created_at: '2021-08-08 08:53',
      creator: { id: 2, name: 'Petya Petrov', avatar: null },
    },
  ]);
  const ref = useRef<HTMLDivElement>(null);

  const submitMessage = useCallback(() => {}, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!e.shiftKey && e.key === 'Enter') {
      e.preventDefault();
      submitMessage();
    }
  };

  // Скроллим окно сообщений вниз
  useEffect(() => {
    if (ref.current) {
      const elem = ref.current;
      elem.scrollTop = elem.scrollHeight - elem.clientHeight;
    }
  }, [ref.current]);

  return (
    <Flex direction={'column'} className={styles.root}>
      <div className={styles.body} ref={ref}>
        {messages.map((message) => (
          <div key={message.id} className={styles.message}>
            <Typography
              size="s"
              weight="semibold"
              margin="0 0 4px"
              className={styles.text}
            >
              {message.text}
            </Typography>
            <Flex justify="space-between">
              <Typography view="ghost" size="2xs">
                {message.creator.name}
              </Typography>
              <Typography view="ghost" size="2xs" margin="0 0 0 12px">
                {moment(message.created_at).format('HH:mm')}
              </Typography>
            </Flex>
          </div>
        ))}
      </div>
      <Flex align="center" className={styles.inputWrapper} padding="0 4px 0 0">
        <TextField
          className={styles.input}
          value={value}
          onChange={({ value }) => setValue(value || '')}
          onKeyDown={(e) => handleKeyDown(e)}
          placeholder="Новое сообщение"
          type="textarea"
          form="brick"
          maxRows={7}
        />
        <Button
          iconRight={icons.SendIcon}
          onlyIcon
          view="clear"
          size="s"
          onClick={submitMessage}
        />
      </Flex>
    </Flex>
  );
};

export default WebinarChat;
