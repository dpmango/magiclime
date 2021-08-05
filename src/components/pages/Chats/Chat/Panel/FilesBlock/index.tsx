import React, { FC, useState } from 'react';
import { SetStateType } from '../../../../../../types/common';
import { File } from '@consta/uikit/File';
import Flex from '../../../../../Common/Flex';
import useStyles from './style';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import Container from '../../../../../Common/Container';
import { v4 as uuid } from 'uuid';

interface IProps {
  files: File[];
  setFiles: SetStateType<File[]>;
}

const FilesBlock: FC<IProps> = ({ files, setFiles }) => {
  const styles = useStyles();

  const removeFile = (file: File) => {
    setFiles([
      ...files.filter(
        (item) => !(item.name === file.name && item.size === file.size)
      ),
    ]);
  };

  const getExtension = (file: File): string =>
    file.name.split('.').pop() as string;

  return (
    <Container className={styles.root}>
      <Flex>
        {files.map((file) => (
          <div className={styles.file} key={uuid()}>
            {/(png|jpe?g|gif|ico)/.test(getExtension(file)) ? (
              <img
                src={
                  'https://fotointeres.ru/wp-content/uploads/2012/04/0_82594_6463591f_orig.jpg'
                }
              />
            ) : (
              <File extension={getExtension(file)} />
            )}
            <Button
              iconLeft={IconClose}
              view={'clear'}
              size={'xs'}
              form={'round'}
              className={styles.delete}
              onClick={() => removeFile(file)}
            />
          </div>
        ))}
      </Flex>
    </Container>
  );
};

export default FilesBlock;
