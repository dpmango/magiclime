import React, { FC, useState, KeyboardEvent } from 'react';
import Flex from '../../../../Common/Flex';
import { TextField } from '@consta/uikit/TextField';
import useStyles from './style';
import { Button } from '@consta/uikit/Button';
import { IconAttach } from '@consta/uikit/IconAttach';
import { FileField } from '@consta/uikit/FileField';
import icons from './icons';
import FilesBlock from './FilesBlock';

const Panel: FC = () => {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const styles = useStyles();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!e.shiftKey && e.key === 'Enter') {
      e.preventDefault();
      setMessage('');
      //send
    }
  };

  const addFile = (e: DragEvent | React.ChangeEvent<Element>) => {
    const file = (e.target as HTMLInputElement).files![0];
    if (file) setFiles([...files, file]);
  };

  return (
    <Flex className={styles.root} align={'center'} direction={'column'}>
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
        <Button iconRight={icons.SendIcon} onlyIcon view={'clear'} />
      </Flex>
    </Flex>
  );
};

export default Panel;
