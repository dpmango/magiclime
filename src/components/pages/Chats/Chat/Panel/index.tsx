import React, {
  FC,
  useState,
  KeyboardEvent,
  useContext,
  useCallback,
} from 'react';
import Flex from '../../../../Common/Flex';
import { TextField } from '@consta/uikit/TextField';
import useStyles from './styles';
import { Button } from '@consta/uikit/Button';
import { IconAttach } from '@consta/uikit/IconAttach';
import { FileField } from '@consta/uikit/FileField';
import icons from './icons';
import FilesBlock from './FilesBlock';
import { ChatContext } from '../../context';
import ReplyBlock from './ReplyBlock';
import { sendMessage } from '../../../../../utils/api/routes/chat';

const Panel: FC<{ chatId: number }> = ({ chatId }) => {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const { chatContext, setChatContext } = useContext(ChatContext);
  const styles = useStyles();

  const submitMessage = () => {
    const reply = chatContext.replyMessage ? chatContext.replyMessage.id : null;
    sendMessage({ text: message, chat: chatId, reply_to_id: reply }).then(
      () => {
        setMessage('');
        if (reply) setChatContext({ ...chatContext, replyMessage: null });
      }
    );
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!e.shiftKey && e.key === 'Enter') {
      e.preventDefault();
      submitMessage();
    }
  };

  const addFile = (e: DragEvent | React.ChangeEvent<Element>) => {
    const file = (e.target as HTMLInputElement).files![0];
    if (file) setFiles([...files, file]);
  };

  const cancelReply = useCallback(() => {
    setChatContext({ ...chatContext, replyMessage: null });
  }, [chatContext]);

  return (
    <Flex className={styles.root} align={'center'} direction={'column'}>
      {chatContext.replyMessage && (
        <ReplyBlock
          message={chatContext.replyMessage}
          cancelReply={cancelReply}
        />
      )}
      {files.length !== 0 && <FilesBlock files={files} setFiles={setFiles} />}
      <Flex className={styles.messagePanel}>
        <FileField id="chat_file_attach" onChange={(e) => addFile(e)}>
          {(props) => (
            <Button
              iconRight={IconAttach}
              onlyIcon
              view={'clear'}
              className={styles.addFile}
              {...props}
            />
          )}
        </FileField>
        <TextField
          value={message}
          maxRows={15}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={({ value }) => setMessage(value as string)}
          type={'textarea'}
          placeholder={'Новое сообщение'}
          className={styles.input}
        />
        <Button
          iconRight={icons.SendIcon}
          onlyIcon
          view={'clear'}
          onClick={submitMessage}
        />
      </Flex>
    </Flex>
  );
};

export default Panel;
