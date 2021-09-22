import { Button } from '@consta/uikit/Button';
import { IconDocBlank } from '@consta/uikit/IconDocBlank';
import { Text } from '@consta/uikit/Text';
import React, { FC, memo } from 'react';
import { saveAs } from 'file-saver';
import Flex from '../../../../../Common/Flex';
import { IFileMessage } from '../../../types';
import useStyles from '../styles';

const Files: FC<{ files: IFileMessage[] }> = ({ files }) => {
  const styles = useStyles();

  const downloadFile = (src: string, name: string) => {
    saveAs(src, name);
  };

  return (
    <Flex direction="column">
      {files.map((file) => (
        <div key={file.id} className={styles.file}>
          <Button
            iconLeft={IconDocBlank}
            size="l"
            form="round"
            onClick={() => downloadFile(file.file, file.name)}
          />
          <div>
            <Text weight="semibold" className={styles.fileName}>
              {file.name}
            </Text>
            <Text view="secondary">
              {(file.size / 1024 / 1024).toFixed(2)} Мб
            </Text>
          </div>
        </div>
      ))}
    </Flex>
  );
};

export default memo(Files, (prevProps, nextProps) => {
  return prevProps.files.length === nextProps.files.length;
});
