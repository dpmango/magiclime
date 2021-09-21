import React, { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@consta/uikit/Avatar';
import moment from 'moment';

import Typography from 'components/Common/Typography';
import Flex from 'components/Common/Flex';
import { IClone } from 'types/interfaces/referrals';

import useStyles from './styles';

interface IProps {
  data: IClone;
  onReferralClick: (id: number) => void;
}

const ReferralClone: FC<IProps> = ({
  data: { id, username, avatar, created_at },
  onReferralClick,
}) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const timestamp = useMemo(() => {
    if (!created_at) {
      return ' ';
    }
    return moment(created_at).format('DD.MM.YY, HH:mm');
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
    </Flex>
  );
};

export default ReferralClone;
