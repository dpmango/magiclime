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
  nested?: boolean;
  nested2?: boolean;
  root?: boolean;
  onReferralClick?: (id: number) => void;
}

const ReferralUser: FC<IProps> = ({
  data: { id, username, avatar, referrals_count, created_at },
  nested,
  nested2,
  root,
  onReferralClick,
}) => {
  const styles = useStyles({ nested, nested2, root });
  const { t } = useTranslation();

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
    return moment(created_at).format('DD.MM.YY, HH:mm:ss');
  }, [created_at]);

  return (
    <Flex
      align="center"
      wrap={!root ? 'wrap' : 'nowrap'}
      className={styles.referral}
      onClick={() => onReferralClick && onReferralClick(id || 0)}
    >
      <Flex align="center" className={styles.referralUser}>
        <Avatar
          url={avatar && avatar.image ? avatar.image : ''}
          name={username}
          className={styles.referralAvatar}
        />

        <div className={styles.referralUserWrapper}>
          <Typography weight="semibold" lineHeight="s" size={root ? 'xl' : 'm'}>
            <Flex align="center">
              {username}&nbsp;
              {!root && (
                <Typography view="secondary" lineHeight="s" size="m">
                  [Уровень 1]
                </Typography>
              )}
            </Flex>
          </Typography>

          {root && (
            <Typography
              size="xs"
              margin="2px 0 0 0px"
              weight="semibold"
              view="ghost"
            >
              Уровень 4
            </Typography>
          )}
        </div>
      </Flex>

      {root ? (
        <>
          <div className={styles.referralDate}>
            <Typography
              size={root ? 'l' : 's'}
              view={root ? 'brand' : 'primary'}
              weight={root ? 'semibold' : 'regular'}
            >
              {timestamp}
            </Typography>
            {root && (
              <Typography
                size="xs"
                margin="6px 0 0"
                weight="semibold"
                view="ghost"
              >
                {t('profile.referral.card.date')}
              </Typography>
            )}
          </div>

          <div className={styles.referralMatrixId}>
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

            <Typography
              size="xs"
              margin="6px 0 0"
              weight="semibold"
              view="ghost"
            >
              {t('profile.referral.card.id')}
            </Typography>
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
        <>
          <div className={styles.referralDatetime}>
            <Typography size="s" view="secondary" weight="regular">
              {timestamp}
            </Typography>
          </div>
          <Flex align="center" className={styles.referralUserData}>
            <Typography margin="0 16px 0 0px" size="s" weight="regular">
              Анастасия Романова
            </Typography>
            <Typography size="s" weight="regular">
              example@gmail.com
            </Typography>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default ReferralUser;
