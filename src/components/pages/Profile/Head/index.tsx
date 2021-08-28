import React, { FC, useCallback, ChangeEvent, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@consta/uikit/Avatar';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { updateProfileAvatar } from 'store/reducers/user';
import { RootState } from 'store/reducers/rootReducer';
import { bytesToMegaBytes } from 'utils/helpers/formatBytes';

import Uploader from './Uploader';
import useStyles from './styles';

const ProfileHead: FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { profile } = useSelector((state: RootState) => state.user);

  const handleCopyRefClick = useCallback(
    (e) => {
      e.preventDefault();

      // TODO - should be changed to some library ?
      const textArea = document.createElement('textarea');
      textArea.value = `http://link.me/${profile.referral_number}`;
      textArea.style.opacity = '0';
      textArea.style.position = 'absolute';
      textArea.style.top = '0';
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
    },
    [profile.referral_number]
  );

  return (
    <Flex align="center" className={styles.root} margin="0 0px">
      <div className={styles.avatarWrapper}>
        <Avatar
          url={profile.avatar?.image}
          name={profile.name}
          className={styles.avatar}
        />
        <Uploader />
      </div>

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
