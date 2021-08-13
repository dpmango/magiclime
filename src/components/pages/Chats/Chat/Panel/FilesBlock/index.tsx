import React, { FC, useState } from 'react';
import { SetStateType } from '../../../../../../types/common';
import Flex from '../../../../../Common/Flex';
import useStyles from './style';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import Container from '../../../../../Common/Container';
import { v4 as uuid } from 'uuid';
import { Attach } from '@consta/uikit/Attach';
import moment from 'moment';
import cn from 'classnames';

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

  const getExt = (file: File): string => file.name.split('.').pop() as string;

  const isImage = (file: File): boolean =>
    /(png|jpe?g|gif|ico)/.test(getExt(file));

  return (
    <Container className={styles.root}>
      <Flex align={'center'}>
        {files.map((file) => (
          <div
            className={cn(
              styles.file,
              isImage(file) ? styles.image : styles.doc
            )}
            key={uuid()}
          >
            {isImage(file) ? (
              <img
                src={
                  'https://fotointeres.ru/wp-content/uploads/2012/04/0_82594_6463591f_orig.jpg'
                }
              />
            ) : (
              <Attach
                fileName={file.name}
                fileExtension={getExt(file)}
                fileDescription={`${(file.size / 1024 / 1024).toFixed(
                  1
                )} МБ, ${moment(file.lastModified).format('DD.MM.YY, HH:mm')}`}
              />
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
