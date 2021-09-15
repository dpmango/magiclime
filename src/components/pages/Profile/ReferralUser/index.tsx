import React, { FC, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';
import { Avatar } from '@consta/uikit/Avatar';
import { Button } from '@consta/uikit/Button';
import { IconCopy } from '@consta/uikit/IconCopy';

import ContaIcons from 'assets/icons/ConstaIcons';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Plurize } from 'utils/helpers/plurize';
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
  data: {
    id,
    username,
    avatar,
    referrals_count,
    created_at,
    is_clone,
    clone_id,
    clone_enabled,
  },
  nested,
  root,
  onReferralClick,
  onBuyClick,
}) => {
  const styles = useStyles({ nested, root, clone: is_clone });
  const { t } = useTranslation();

  const handleCopyRefClick = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
    },
    [id]
  );

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
        {!is_clone ? (
          <Avatar
            url={avatar && avatar.image ? avatar.image : ''}
            name={username}
            className={styles.referralAvatar}
          />
        ) : (
          <Flex align="center" justify="center" className={styles.cloneFree}>
            <ContaIcons.Plus size="s" view="brand" />
          </Flex>
        )}

        <div className={styles.referralUserWrapper}>
          {!is_clone ? (
            <Typography
              weight="semibold"
              lineHeight="s"
              size={root ? 'xl' : 'm'}
            >
              {username}
            </Typography>
          ) : (
            <Typography lineHeight="s" view="brand" size={root ? 'xl' : 'm'}>
              {t('profile.referral.buy.free')}
            </Typography>
          )}

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

      <div className={styles.referralBl}>
        <Typography
          size={root ? 'l' : 's'}
          view={root ? 'brand' : 'primary'}
          weight={root ? 'semibold' : 'regular'}
        >
          {created_at}
        </Typography>
        {root && (
          <Typography size="xs" margin="6px 0 0" weight="semibold" view="ghost">
            {t('profile.referral.card.date')}
          </Typography>
        )}
      </div>

      {!is_clone ? (
        <>
          <div className={styles.referralLevel}>
            <Flex align="center">
              <Typography
                margin="0 6px 0 0"
                lineHeight="s"
                size={root ? 'l' : 's'}
              >
                {id}
              </Typography>
              <IconCopy size="s" />
            </Flex>

            {root && (
              <Typography
                size="xs"
                margin="6px 0 0"
                weight="semibold"
                view="ghost"
              >
                {t('profile.referral.card.id')}
              </Typography>
            )}
          </div>
          <div className={styles.referralCount} onClick={handleCopyRefClick}>
            <Typography
              size={root ? 'l' : 's'}
              view={root ? 'primary' : 'secondary'}
            >
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
      ) : (
        <div className={styles.clone}>
          {clone_enabled && (
            <Button
              size="s"
              view="primary"
              form="round"
              onClick={() => onBuyClick && onBuyClick(clone_id || 0)}
              label={t('profile.referral.buy.cta')}
            />
          )}
        </div>
      )}
    </Flex>
  );
};

export default ReferralUser;
