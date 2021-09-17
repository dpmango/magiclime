import React, { FC } from 'react';
import { Avatar } from '@consta/uikit/Avatar';
import useStyles from './styles';
import Flex from '../../../../Common/Flex';
import Typography from '../../../../Common/Typography';
import { ISpeaker } from '../../types';

interface IProps {
  speaker: ISpeaker;
  short: boolean;
}

const Speaker: FC<IProps> = ({ speaker, short }) => {
  const styles = useStyles({ short });

  return (
    <div className={styles.root}>
      <Flex align="center">
        <Avatar
          name={speaker.name}
          url={speaker.avatar ? speaker.avatar.image : ''}
          className={styles.avatar}
        />
        <div>
          <Typography
            margin={`0 0 ${short ? 2 : 8}px`}
            weight={short ? 'regular' : 'semibold'}
            size={short ? 'm' : '2xl'}
          >
            {speaker.name}
          </Typography>
          <Typography view="secondary" size={short ? 'xs' : 'm'}>
            {speaker.company}
          </Typography>
        </div>
      </Flex>
      {!short && (
        <Typography margin="18px 0 0" className={styles.description}>
          {speaker.description}
        </Typography>
      )}
    </div>
  );
};

export default Speaker;
