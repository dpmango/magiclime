import React, { FC, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@consta/uikit/Avatar';
import { IconCopy } from '@consta/uikit/IconCopy';
import moment from 'moment';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { copyToClipboard } from 'utils/helpers/clipboard';
import { IClone } from 'types/interfaces/referrals';
import { useQuery } from 'hooks/useQuery';

import useStyles from './styles';

interface IProps {
  data: IClone;
  onReferralClick: (id: number) => void;
}

const ReferralClone: FC<IProps> = ({
  data: { id, username, avatar, created_at, created_from_username },
  onReferralClick,
}) => {
  const styles = useStyles();
  const query = useQuery();
  const { t } = useTranslation();

  const handleCopyRefClick = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      const level = query.get('level');
      const program = query.get('program');

      copyToClipboard(
        `https://magiclime.academy/profile/me/partners/?id=${id}&level=${level}&program=${program}`,
        t('profile.referral.card.copySuccess'),
        t('profile.referral.card.copyError')
      );
    },
    [id, query]
  );

  const timestamp = useMemo(() => {
    if (!created_at) {
      return ' ';
    }
    return moment(created_at).format('DD.MM.YY, HH:mm:ss');
  }, [created_at]);

  return (
    <Flex
      align="center"
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
          <Typography weight="semibold" lineHeight="s" size="m">
            {username} [{id}]
          </Typography>
        </div>
      </Flex>

      <div className={styles.referralDate}>
        <Typography size="s" view="primary" weight="regular">
          {timestamp}
        </Typography>
      </div>

      <div className={styles.referralId} onClick={handleCopyRefClick}>
        <Flex align="center" justify="flex-end">
          <Typography
            margin="0 6px 0 0"
            size="s"
            view="primary"
            weight="regular"
          >
            {created_from_username} ({id})
          </Typography>
          <IconCopy size="s" />
        </Flex>
      </div>
    </Flex>
  );
};

export default ReferralClone;
