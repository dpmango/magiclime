/* eslint-disable @typescript-eslint/naming-convention */
import moment from 'moment';
/* eslint-disable react/no-danger */
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar } from '@consta/uikit/Avatar';
import { Loader } from '@consta/uikit/Loader';

import Flex from 'components/Common/Flex';
import Typography from 'components/Common/Typography';
import useSharedStyles from 'assets/styles/Shared';
import useStyles from './styles';

export interface IProps {
  data: {
    author: string;
    author_image?: string;
    timestamp?: string;
    title: string;
    text?: string;
  };
}

const Content: FC<IProps> = ({ data }) => {
  const styles = useStyles();
  const sharedStyles = useSharedStyles({});
  const params: { id: string } = useParams();

  return (
    <div className={styles.content}>
      <Flex direction="column">
        {data.author && (
          <Flex align="center" className={styles.user}>
            <Avatar size="s" name={data.author} url={data.author_image} />
            <Typography weight="semibold" margin="0 0 0 10px">
              {data.author}
            </Typography>
          </Flex>
        )}

        {data.timestamp && (
          <Typography size="xs" margin="20px 0 0" className={styles.date}>
            Дата публикации: {moment(data.timestamp).format('LL')}
          </Typography>
        )}
      </Flex>

      <Typography
        as="h1"
        margin="16px 0 32px"
        size="2xl s:4xl"
        weight="semibold"
        lineHeight="s"
      >
        {data.title}
      </Typography>

      {data.text ? (
        <div
          className={sharedStyles.wysiwyg}
          dangerouslySetInnerHTML={{
            __html: data.text,
          }}
        />
      ) : (
        <Loader className={styles.loader} />
      )}
    </div>
  );
};

export default Content;
