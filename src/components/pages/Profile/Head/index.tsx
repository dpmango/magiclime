import React, { FC, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { Avatar } from '@consta/uikit/Avatar';
import { Button } from '@consta/uikit/Button';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { IUser } from 'types/interfaces/user';
import { RootState } from 'store/reducers/rootReducer';

import Uploader from './Uploader';
import BalanceWidget from '../Balance/BalanceWidget';
import useStyles from './styles';

interface IProps {
  profile: IUser;
  isMyProfile: boolean;
}

const ProfileHead: FC<IProps> = ({ profile, isMyProfile }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const { rates } = useSelector((state: RootState) => state.meta);

  const handleCopyRefClick = useCallback(
    (e) => {
      e.preventDefault();

      // TODO - should be changed to some library ?
      const textArea = document.createElement('textarea');
      textArea.value = `https://magiclime.academy/?ref=${profile.referral_number}`;
      textArea.style.opacity = '0';
      textArea.style.position = 'absolute';
      textArea.style.top = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        toast(t('profile.head.copySuccess'));
      } catch (err) {
        toast(`${t('profile.head.copyError')} : ${err.message}`);
      }

      document.body.removeChild(textArea);
    },
    [profile.referral_number]
  );

  const handleSendMessage = useCallback(() => {
    const { id } = profile;

    console.log('TODO - start dialog', id);
  }, []);

  return (
    <Flex align="center" className={styles.root} margin="0 0px">
      <div className={styles.avatarWrapper}>
        <Avatar
          url={profile.avatar?.image}
          name={profile.name}
          className={styles.avatar}
        />
        {isMyProfile && <Uploader />}
      </div>

      <div className={styles.content}>
        <Flex align="center" justify="space-between">
          <div>
            <Typography weight="semibold" lineHeight="s" size="4xl">
              {profile.name}
            </Typography>
            {isMyProfile && (
              <Typography
                view="secondary"
                weight="semibold"
                onClick={handleCopyRefClick}
                className={styles.refLink}
              >
                {t('profile.head.copyRefLink')}
              </Typography>
            )}
          </div>
          {isMyProfile ? (
            <BalanceWidget btcRate={rates.price} inline />
          ) : (
            <Button
              onClick={handleSendMessage}
              label={t('profile.head.sendMessage')}
            />
          )}
        </Flex>
      </div>
    </Flex>
  );
};

export default ProfileHead;
