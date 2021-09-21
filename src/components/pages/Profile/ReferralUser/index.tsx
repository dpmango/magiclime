import React, { FC, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@consta/uikit/Avatar';
import { Button } from '@consta/uikit/Button';
import { IconCopy } from '@consta/uikit/IconCopy';
import moment from 'moment';

import ContaIcons from 'assets/icons/ConstaIcons';
import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { Plurize } from 'utils/helpers/plurize';
import { timeToTimeStamp } from 'utils/helpers/formatDate';
import { copyToClipboard } from 'utils/helpers/clipboard';
import { IReferralTree } from 'types/interfaces/referrals';

import useStyles from './styles';

interface IProps {
  data: IReferralTree;
  level: string | number;
  program: string | number;
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
  level,
  program,
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

      copyToClipboard(
        `https://magiclime.academy/profile/me/partners/?id=${id}&level=${level}&program=${program}`,
        t('profile.referral.card.copySuccess'),
        t('profile.referral.card.copyError')
      );
    },
    [id, level, program]
  );

  const referralsPlural = useMemo(() => {
    return Plurize(
      referrals_count || 0,
      t('profile.spacePlural.one'),
      t('profile.spacePlural.two'),
      t('profile.spacePlural.five')
    );
  }, [referrals_count]);

  const timestamp = useMemo(() => {
    if (!created_at) {
      return ' ';
    }
    return moment(created_at).format('DD.MM.YYYY, HH:mm');
  }, [created_at]);

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
              {username} [{id}]
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

      <div className={styles.referralDate}>
        <Typography
          size={root ? 'l' : 's'}
          view={root ? 'brand' : 'primary'}
          weight={root ? 'semibold' : 'regular'}
        >
          {timestamp}
        </Typography>
        {root && (
          <Typography size="xs" margin="6px 0 0" weight="semibold" view="ghost">
            {t('profile.referral.card.date')}
          </Typography>
        )}
      </div>

      {!is_clone ? (
        <>
          <div className={styles.referralMatrixId} onClick={handleCopyRefClick}>
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
          <div className={styles.referralCount}>
            <Typography
              size={root ? 'l' : 's'}
              view={root ? 'primary' : 'secondary'}
            >
              {referrals_count} {!root && referralsPlural}
            </Typography>
            {root && (
              <Typography
                size="xs"
                margin="6px 0 0"
                weight="semibold"
                view="ghost"
              >
                {referralsPlural}
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
