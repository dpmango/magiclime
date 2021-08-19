import React, { FC, useState } from 'react';
import useStyles from './styles';
import Flex from '../../Common/Flex';
import Typography from '../../Common/Typography';
import { IconWatch } from '@consta/uikit/IconWatch';
import WebinarChat from './WebinarChat';

const Webinar: FC = () => {
  const [isFull, setFull] = useState(false);
  const styles = useStyles({ isFull });

  return (
    <div className={styles.root}>
      <Flex align={'center'} justify={'space-between'} margin={'0 0 24px'}>
        <Typography weight={'semibold'} size={'l'} margin={'0 20px 0 0'}>
          Формулы и функции Excel, которые упростят вам жизнь
        </Typography>
        <Typography view={'ghost'} weight={'semibold'} className={styles.timer}>
          <IconWatch />
          <span>00:24:16</span>
        </Typography>
      </Flex>
      <div className={styles.stream}>
        <Flex className={styles.container}>
          <Flex direction={'column'} className={styles.chatContainer}>
            <img
              src={
                'https://d2skuhm0vrry40.cloudfront.net/2018/articles/2018-06-19-11-22/-1529403763269.jpg/EG11/resize/1200x-1/-1529403763269.jpg'
              }
              alt={'Webinar banner'}
              className={styles.banner}
            />
            <WebinarChat />
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Webinar;
