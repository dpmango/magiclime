import React, { FC, useCallback } from 'react';
import { Avatar } from '@consta/uikit/Avatar';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';

import useStyles from './styles';

const refLink = 'https://test.my.link/$2gwdf22fFFgdkmwh/';

const ProfileHead: FC = () => {
  const styles = useStyles();

  const handleCopyRefClick = useCallback(() => {
    // TODO - should be changed to some library ?
    const textArea = document.createElement('textarea');
    textArea.value = refLink;
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      // TODO - show toast ?
      console.log(`Copying text command was ${msg}`);
    } catch (err) {
      console.log(`Unable to copy value , error : ${err.message}`);
    }

    document.body.removeChild(textArea);
  }, [refLink]);

  return (
    <Flex align="center" className={styles.root} margin="0 0px">
      <Avatar
        url="https://randomuser.me/api/portraits/women/13.jpg"
        name="Анастасия Котомкина"
        className={styles.avatar}
      />
      <div className={styles.content}>
        <Typography weight="semibold" lineHeight="s" size="4xl">
          Анастасия Котомкина
        </Typography>
        <Typography
          view="secondary"
          weight="semibold"
          onClick={handleCopyRefClick}
          className={styles.refLink}
        >
          Скопировать рефферальную ссылку
        </Typography>
      </div>
    </Flex>
  );
};

export default ProfileHead;
