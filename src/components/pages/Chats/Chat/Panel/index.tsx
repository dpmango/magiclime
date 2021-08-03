import React, { FC, useState } from 'react';
import Flex from '../../../../Common/Flex';
import { TextField } from '@consta/uikit/TextField';
import useStyles from './style';
import { Button } from '@consta/uikit/Button';
import { IconAttach } from '@consta/uikit/IconAttach';
import { FileField } from '@consta/uikit/FileField';
import icons from './icons';

const Panel: FC = () => {
  const [message, setMessage] = useState('');
  const styles = useStyles();

  return (
    <Flex className={styles.root} align={'center'}>
      <FileField id="chat_file_attach">
        <Button
          iconRight={IconAttach}
          onlyIcon
          view={'clear'}
          className={styles.addFile}
        />
      </FileField>
      <TextField
        value={message}
        onChange={({ value }) => setMessage(value as string)}
        placeholder={'Новое сообщение'}
        className={styles.input}
      />
      <Button iconRight={icons.SendIcon} onlyIcon view={'clear'} />
    </Flex>
  );
};

export default Panel;
