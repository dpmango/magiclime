import React, {
  FC,
  useState,
  KeyboardEvent,
  useContext,
  useCallback,
} from 'react';
import { TextField } from '@consta/uikit/TextField';
import { Button } from '@consta/uikit/Button';
import { IconAttach } from '@consta/uikit/IconAttach';
import { FileField } from '@consta/uikit/FileField';
import { Socket } from 'socket.io-client';
import { sendFile } from '../../../../../utils/api/routes/chat';
import { uploadImage } from '../../../../../utils/api/routes/other';
import { MessageFile } from '../../types';
import useStyles from './styles';
import Flex from '../../../../Common/Flex';
import icons from './icons';
import FilesBlock from './FilesBlock';
import { ChatContext } from '../../context';
import ReplyBlock from './ReplyBlock';

interface IProps {
  chatId: number;
  socket: Socket;
}

const Panel: FC<IProps> = ({ chatId, socket }) => {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<MessageFile[]>([]);
  const { chatContext, setChatContext } = useContext(ChatContext);
  const styles = useStyles();

  const submitMessage = () => {
    const reply = chatContext.replyMessage ? chatContext.replyMessage.id : null;
    const attached_files = files
      .filter((item) => item.hasOwnProperty('file'))
      .map((file) => file.id);
    const attached_images = files
      .filter((item) => item.hasOwnProperty('image'))
      .map((img) => img.id);

    socket.emit('my_room_event', {
      room: chatId.toString(),
      data: JSON.stringify({
        text: message,
        reply_to_id: reply,
        attached_files,
        attached_images,
      }),
    });

    // setMessage('');
    if (files.length > 0) setFiles([]);
    if (reply) setChatContext({ ...chatContext, replyMessage: null });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!e.shiftKey && e.key === 'Enter') {
      e.preventDefault();
      submitMessage();
    }
  };

  const isImage = useCallback(
    (file: File): boolean =>
      /(png|jpe?g|gif|ico)/.test(file.name.split('.').pop() as string),
    []
  );

  const addFile = useCallback(
    (e: DragEvent | React.ChangeEvent<Element>) => {
      const file = (e.target as HTMLInputElement).files![0];
      if (isImage(file)) {
        uploadImage(file).then((res) => {
          setFiles([...files, res.data]);
        });
      } else {
        sendFile(file).then((res) => {
          setFiles([...files, { id: res.data.id, file }]);
        });
      }
    },
    [files.length]
  );

  const cancelReply = useCallback(() => {
    setChatContext({ ...chatContext, replyMessage: null });
  }, [chatContext]);

  return (
    <Flex className={styles.root} align="center" direction="column">
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
              view="clear"
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
          type="textarea"
          placeholder="Новое сообщение"
          className={styles.input}
        />
        <Button
          iconRight={icons.SendIcon}
          onlyIcon
          view="clear"
          onClick={submitMessage}
        />
      </Flex>
    </Flex>
  );
};

export default React.memo(Panel, (prevProps, nextProps) => {
  return prevProps.chatId === nextProps.chatId;
});
