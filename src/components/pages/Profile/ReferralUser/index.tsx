import React, { FC, useMemo } from 'react';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Avatar } from '@consta/uikit/Avatar';
import { Button } from '@consta/uikit/Button';
import { Plurize } from 'utils/helpers/plurize';
import { useTranslation } from 'react-i18next';

import { IReferralTree } from 'types/interfaces/referrals';
import useStyles from './styles';

interface IProps {
  data: IReferralTree;
  nested?: boolean;
  root?: boolean;
  onReferralClick?: (id: number) => void;
  onBuyClick?: (id: number) => void;
}

const ReferralUser: FC<IProps> = ({
  data: { id, username, avatar, referrals_count, is_clone, clone_id },
  nested,
  root,
  onReferralClick,
  onBuyClick,
}) => {
  const styles = useStyles({ nested, root, clone: is_clone });
  const { t } = useTranslation();

  const referralsPlural = useMemo(() => {
    const plural = Plurize(
      referrals_count || 0,
      t('profile.referralPlural.one'),
      t('profile.referralPlural.two'),
      t('profile.referralPlural.five')
    );

    return root ? referrals_count : `${referrals_count} ${plural}`;
  }, [referrals_count]);

  return (
    <Flex
      align="center"
      className={styles.referral}
      onClick={() => !is_clone && onReferralClick && onReferralClick(id || 0)}
    >
      <Flex align="center" className={styles.referralUser}>
        <Avatar
          url={avatar && avatar.image ? avatar.image : ''}
          name={username}
          className={styles.referralAvatar}
        />
        <div className={styles.referralUserWrapper}>
          <Typography weight="semibold" lineHeight="s" size={root ? 'xl' : 'm'}>
            {username || 'empty'}
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

      {is_clone ? (
        <div className={styles.clone}>
          <Button
            size="s"
            form="round"
            onClick={() => onBuyClick && onBuyClick(clone_id || 0)}
            label={t('profile.referral.buy.cta')}
          />
        </div>
      ) : (
        <>
          <div className={styles.referralBl}>
            <Typography
              size={root ? 'l' : 's'}
              view={root ? 'brand' : 'primary'}
              weight={root ? 'semibold' : 'regular'}
            >
              TODO BL
            </Typography>
            {root && (
              <Typography
                size="xs"
                margin="6px 0 0"
                weight="semibold"
                view="ghost"
              >
                {t('profile.referral.card.gain')}
              </Typography>
            )}
          </div>
          <div className={styles.referralLevel}>
            <Typography size={root ? 'l' : 's'}>level</Typography>
            {root && (
              <Typography
                size="xs"
                margin="6px 0 0"
                weight="semibold"
                view="ghost"
              >
                {t('profile.referral.card.level')}
              </Typography>
            )}
          </div>
          <div className={styles.referralCount}>
            <Typography size={root ? 'l' : 's'} view="secondary">
              {referralsPlural}
            </Typography>
            {root && (
              <Typography
                size="xs"
                margin="6px 0 0"
                weight="semibold"
                view="ghost"
              >
                {t('profile.referral.card.referrals')}
              </Typography>
            )}
          </div>
        </>
      )}
    </Flex>
  );
};

export default ReferralUser;
