import React, { FC, useState } from 'react';
import { IconWatch } from '@consta/uikit/IconWatch';
import { Button } from '@consta/uikit/Button';
import useStyles from './styles';
import Flex from '../../../Common/Flex';
import Typography from '../../../Common/Typography';
import StreamChat from './StreamChat';
import ConstaIcons from '../../../../assets/icons/ConstaIcons';

const Stream: FC = () => {
  const [isFull, setFull] = useState(false);
  const styles = useStyles({ isFull });

  return (
    <div className={styles.root}>
      <Flex align="center" justify="space-between" margin="0 0 24px">
        <Typography weight="semibold" size="l" margin="0 20px 0 0">
          Формулы и функции Excel, которые упростят вам жизнь
        </Typography>
        <Typography view="ghost" weight="semibold" className={styles.timer}>
          <IconWatch />
          <span>00:24:16</span>
        </Typography>
      </Flex>
      <div className={styles.stream}>
        <Flex className={styles.container}>
          <Flex direction="column" className={styles.chatContainer}>
            <img
              src="https://d2skuhm0vrry40.cloudfront.net/2018/articles/2018-06-19-11-22/-1529403763269.jpg/EG11/resize/1200x-1/-1529403763269.jpg"
              alt="Webinar banner"
              className={styles.banner}
            />
            <StreamChat />
          </Flex>
          <div className={styles.videoContainer}>
            <Button
              onlyIcon
              className={styles.expandBtn}
              view="clear"
              size="l"
              iconLeft={isFull ? ConstaIcons.Close : ConstaIcons.Expand}
              onClick={() => setFull(!isFull)}
            />
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default Stream;
