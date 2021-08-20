import React, { FC, useMemo } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import { Plurize } from 'utils/helpers/plurize';
import { useTranslation } from 'react-i18next';

import { IReferral } from 'components/pages/Profile/types';
import useStyles from './styles';

interface IProps {
  data: IReferral;
  nested?: boolean;
  root?: boolean;
}

const ReferralUser: FC<IProps> = ({ data, nested, root }) => {
  const styles = useStyles({ nested, root });
  const { t } = useTranslation();

  const referralsPlural = useMemo(() => {
    const plural = Plurize(
      data.referralsCount,
      t('profile.referralPlural.one'),
      t('profile.referralPlural.two'),
      t('profile.referralPlural.five')
    );

    return root ? data.referralsCount : `${data.referralsCount} ${plural}`;
  }, [data.referralsCount]);

  return (
    <Flex key={data.id} align="center" className={styles.referral}>
      <Flex align="center" className={styles.referralUser}>
        <Avatar
          url={data.avatar}
          name={data.username}
          className={styles.referralAvatar}
        />
        <div className={styles.referralUserWrapper}>
          <Typography weight="semibold" lineHeight="s" size={root ? 'xl' : 'm'}>
            {data.username}
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
          {data.btl} BTL
        </Typography>
        {root && (
          <Typography size="xs" margin="6px 0 0" weight="semibold" view="ghost">
            {t('profile.referral.card.gain')}
          </Typography>
        )}
      </div>
      <div className={styles.referralLevel}>
        <Typography size={root ? 'l' : 's'}>{data.level}</Typography>
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
