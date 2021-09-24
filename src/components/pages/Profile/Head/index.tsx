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
import { copyToClipboard } from 'utils/helpers/clipboard';

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

  const rates = useSelector((state: RootState) => state.meta.rates);

  const handleCopyRefClick = useCallback(
    (e) => {
      e.preventDefault();

      copyToClipboard(
        `https://magiclime.academy/?ref=${profile.referral_number}`,
        t('profile.head.copySuccess'),
        t('profile.head.copyError')
      );
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
            {isMyProfile && profile.is_bought_1level_bitlime && (
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
            <></>
            // <Button
            //   onClick={handleSendMessage}
            //   label={t('profile.head.sendMessage')}
            // />
          )}
        </Flex>
      </div>
    </Flex>
  );
};

export default ProfileHead;
