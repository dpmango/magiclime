import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from '@consta/uikit/Avatar';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { RootState } from 'store/reducers/rootReducer';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';

const ProfileHead: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const { profile } = useSelector((state: RootState) => state.user);

  const handleCopyRefClick = useCallback(() => {
    // TODO - should be changed to some library ?
    const textArea = document.createElement('textarea');
    textArea.value = `http://link.me/${profile.referral_number}`;
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
  }, [profile.referral_number]);

  return (
    <Flex align="center" className={styles.root} margin="0 0px">
      <Avatar
        url={profile.avatar?.image}
        name={profile.name}
        className={styles.avatar}
      />
      <div className={styles.content}>
        <Typography weight="semibold" lineHeight="s" size="4xl">
          {profile.name}
        </Typography>
        <Typography
          view="secondary"
          weight="semibold"
          onClick={handleCopyRefClick}
          className={styles.refLink}
        >
          {t('profile.head.copyRefLink')}
        </Typography>
      </div>
    </Flex>
  );
};

export default ProfileHead;
