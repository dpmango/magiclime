import React, { FC } from 'react';
import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import { Attach } from '@consta/uikit/Attach';
import moment from 'moment';
import cn from 'classnames';
import Container from '../../../../../Common/Container';
import { MessageFile } from '../../../types';
import useStyles from './style';
import Flex from '../../../../../Common/Flex';
import { SetStateType } from '../../../../../../types/common';
import { IPhoto } from '../../../../../../types/interfaces/common';

interface IProps {
  files: MessageFile[];
  setFiles: SetStateType<MessageFile[]>;
}

const FilesBlock: FC<IProps> = ({ files, setFiles }) => {
  const styles = useStyles();

  const removeFile = (file: MessageFile) => {
    setFiles([...files.filter((item) => item.id !== file.id)]);
  };

  const getExt = (file: File): string => file.name.split('.').pop() as string;

  const isImage = (file: MessageFile): file is IPhoto => {
    return (file as IPhoto).image !== undefined;
  };

  return (
    <Container className={styles.root}>
      <Flex align="center">
        {files.map((item) => (
          <div
            className={cn(
              styles.file,
              item.hasOwnProperty('image') ? styles.image : styles.doc
            )}
            key={item.id}
          >
            {isImage(item) ? (
              <img src={item.image} alt="file" />
            ) : (
              <Attach
                fileName={
                  item.file.name.length > 50
                    ? `${item.file.name.slice(0, 47)}...`
                    : item.file.name
                }
                fileExtension={getExt(item.file)}
                fileDescription={`${(item.file.size / 1024 / 1024).toFixed(
                  1
                )} МБ, ${moment(item.file.lastModified).format(
                  'DD.MM.YY, HH:mm'
                )}`}
              />
            )}
            <Button
              iconLeft={IconClose}
              view="clear"
              size="xs"
              form="round"
              className={styles.delete}
              onClick={() => removeFile(item)}
            />
          </div>
        ))}
      </Flex>
    </Container>
  );
};

export default React.memo(FilesBlock, (prevProps, nextProps) => {
  return prevProps.files.length === nextProps.files.length;
});
