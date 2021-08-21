import React, { FC, useMemo } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import { Plurize } from 'utils/helpers/plurize';
import { useTranslation } from 'react-i18next';

import { IReferralTree } from 'types/interfaces/referrals';
import useStyles from './styles';

interface IProps {
  data: IReferralTree;
  nested?: boolean;
  root?: boolean;
}

const ReferralUser: FC<IProps> = ({
  data: { id, username, avatar, referrals_count },
  nested,
  root,
}) => {
  const styles = useStyles({ nested, root });
  const { t } = useTranslation();

  const referralsPlural = useMemo(() => {
    const plural = Plurize(
      referrals_count,
      t('profile.referralPlural.one'),
      t('profile.referralPlural.two'),
      t('profile.referralPlural.five')
    );

    return root ? referrals_count : `${referrals_count} ${plural}`;
  }, [referrals_count]);

  return (
    <Flex key={id} align="center" className={styles.referral}>
      <Flex align="center" className={styles.referralUser}>
        <Avatar
          url={avatar && avatar.image ? avatar.image : ''}
          name={username}
          className={styles.referralAvatar}
        />
        <div className={styles.referralUserWrapper}>
          <Typography weight="semibold" lineHeight="s" size={root ? 'xl' : 'm'}>
            {username}
          </Typography>
          {root && (
            <Typography
              size="xs"
              margin="2px 0 0 0px"
              weight="semibold"
              view="ghost"
            >
              {t('profile.referral.card.extraInfo')}
            </Typography>
          )}
        </div>
      </Flex>
      <div className={styles.referralBtl}>
        <Typography
          size={root ? 'l' : 's'}
          view={root ? 'brand' : 'primary'}
          weight={root ? 'semibold' : 'regular'}
        >
          TODO BTL
        </Typography>
        {root && (
          <Typography size="xs" margin="6px 0 0" weight="semibold" view="ghost">
            {t('profile.referral.card.gain')}
          </Typography>
        )}
      </div>
      <div className={styles.referralLevel}>
        <Typography size={root ? 'l' : 's'}>level</Typography>
        {root && (
          <Typography size="xs" margin="6px 0 0" weight="semibold" view="ghost">
            {t('profile.referral.card.level')}
          </Typography>
        )}
      </div>
      <div className={styles.referralCount}>
        <Typography size={root ? 'l' : 's'} view="secondary">
          {referralsPlural}
        </Typography>
        {root && (
          <Typography size="xs" margin="6px 0 0" weight="semibold" view="ghost">
            {t('profile.referral.card.referrals')}
          </Typography>
        )}
      </div>
    </Flex>
  );
};

export default ReferralUser;
